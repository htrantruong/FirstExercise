document.getElementById("actionButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function() {
    // Setting the current year dynamically in the footer
    // This gets the element with the ID 'year' and sets its text content to the current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Event listener for the 'actionButton' click event
    // This function will toggle the visibility of a paragraph on the page
    document.getElementById('actionButton').addEventListener('click', function() {
        // Selecting the paragraph element to be toggled
        // Replace 'p' with a more specific selector if needed
        var content = document.querySelector('p'); 

        // Toggling the display style between 'none' and 'block' to show/hide the paragraph
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});
