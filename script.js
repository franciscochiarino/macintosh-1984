// Global variables

const navButtons = document.querySelectorAll('.nav-btn');

// Navigation event listeners

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        let buttonDropdown = document.getElementById(`${button.id}-dropdown`);
        buttonDropdown.classList.toggle('off');
    })
})
