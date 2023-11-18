// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Get the elements
    const scrapeBtn = document.getElementById('scrapeBtn');
    const keywordInput = document.getElementById('keyword');
    const asinInput = document.getElementById('asin');
    const resultDiv = document.getElementById('result');

    // Add event listeners
    scrapeBtn.addEventListener('click', () => {
        // Get the keyword and ASIN
        const keyword = keywordInput.value.trim();
        const asin = asinInput.value.trim();

        // Check if the keyword and ASIN are not empty
        if (!keyword || !asin) {
            alert('Please enter both keyword and ASIN');
            return;
        }

        // Make an AJAX request to your backend
        axios.get(`/api/scrape?keyword=${encodeURIComponent(keyword)}&asin=${encodeURIComponent(asin)}`)
            .then(response => displayResult(response.data))
            .catch(error => console.error('Error:', error));
    });

    /**
     * Display the search result position of a given ASIN.
     *
     * @param {Object} data - The search result data.
     */
    function displayResult(data) {
        // Check if the ASIN is not found in the search results
        if (data.position === -1) {
            resultDiv.innerHTML = '<p>ASIN not found in search results.</p>';
        } else {
            // Display the position of the ASIN in the search results
            resultDiv.innerHTML = `<p>Position of ASIN ${asinInput.value}: ${data.position}</p>`;
        }
    }
});
