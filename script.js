// Global variables

// Get all the navigation buttons
const navButtons = document.querySelectorAll('.nav-btn');


// Navigation event listeners

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        let buttonDropdown = document.getElementById(`${button.id}-dropdown`);
        buttonDropdown.classList.toggle('off');
    })
})

// start.addEventListener('click', function() {
//     startDropdown.classList.toggle('off');
// })