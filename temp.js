window.addEventListener('load', function () {
    // Set a timeout to simulate loading (e.g., 3 seconds)
    setTimeout(function () {
        // Hide the loading screen
        document.getElementById('loadingScreen').style.display = 'none';

        // Show the main content
        document.getElementById('mainContent').style.display = 'block';
    }, 3000); // Adjust time in milliseconds (3000 = 3 seconds)
});
