// Global variables

const navButtons = document.querySelectorAll('.nav-btn');

// Navigation event listeners

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        let buttonContent = document.getElementById(`${button.id}-content`);
        buttonContent.classList.toggle('off');
    })
})
