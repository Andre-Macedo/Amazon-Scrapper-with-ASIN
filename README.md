# Full-stack Test Amazon Scraper

This project is a full-stack web application that allows users to scrape Amazon product listings with a given keyword and ASIN. It includes both a backend (Node.js) for handling the scraping logic and an interactive frontend (HTML, CSS, JavaScript) for user input and displaying the given ASIN position.
Setup

## Prerequisites
  - Node.js installed on your machine.

## Installation

- Clone the repository:

```bash
git clone https://github.com/Andre-Macedo/Amazon-Scrapper-with-ASIN.git
```

- Navigate to the project directory:

```bash
cd Amazon-Scrapper-with-ASIN
```

- Install dependencies:

```bash
npm install
```
## Running the Application

- Start the Node.js server:

    ```bash

    npm start
    ````

    Open your web browser and go to http://localhost:3000 to access the application.

## How to Use

- Enter the desired search keyword in the provided input field.
- 
- Enter the desired search ASIN in the provided input field.

- Click the "Scrape" button to initiate the scraping process.

- View the extracted product with the given ASIN position.

## Project Structure

- public/: Contains static files (HTML, CSS, JS) for the frontend.
- server.js: Node.js backend script for handling scraping logic and serving frontend files.

## Dependencies

 - Express: Fast, unopinionated, minimalist web framework for Node.js.
 - Axios: Promise-based HTTP client for the browser and Node.js.
 - Cheerio: Fast, flexible, and lean implementation of core jQuery for the server.

## Notes

- The app utilizes Bootstrap cdn for the styling of the page.

Feel free to explore, modify, and adapt this project for your needs!

