// script.js

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', function() {
    // Get the user's search query
    const query = document.getElementById('searchQuery').value;

    // Check if the query is not empty
    if (query) {
        // Redirect to results.html with the query as a URL parameter
        window.location.href = `results.html?query=${encodeURIComponent(query)}`;
    }
});
