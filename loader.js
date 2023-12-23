
  document.addEventListener("DOMContentLoaded", function () {
    // Simulate content loading
    setTimeout(function () {
        // Hide the loader
        document.getElementById("loader-wrapper").style.display = "none";
        // Show the content
        document.querySelector(".content").style.display = "block";
    }, 1500); // Adjust the timeout duration based on your actual content loading time
});
