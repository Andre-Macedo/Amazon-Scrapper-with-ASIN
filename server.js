// Import necessary libraries
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for scraping Amazon product listings
app.get('/api/scrape', async (req, res) => {
    try {
        // Extract the search keyword and asin from the query parameters
        const { keyword, asin } = req.query;

        if (!keyword) {
            throw new Error('Please provide a keyword');
        }

        // Set the maximum number of pages to search
        const maxPages = 5;
        let position = -1;// Default position if ASIN is not found

        //  Search for the specified ASIN
        for (let page = 1; page <= maxPages; page++) {
            // Construct the URL
            const amazonUrl = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}&page=${page}`;
            // Make an HTTP request
            const response = await axios.get(amazonUrl);
            // Parse the HTML
            const $ = cheerio.load(response.data);

            // Search for the specified ASIN
            $('.s-result-item').each((index, element) => {
                // Get the ASIN
                const productASIN = $(element).attr('data-asin');

                if (productASIN === asin) {
                    // Store the position of the specified ASIN
                    position = index + 1;
                    return false; // Exit the each loop
                }
            });

            if (position !== -1) {
                // ASIN found, no need to continue searching
                break;
            }
        }

        // Return the final position, even if it's -1
        return res.json({ position });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});