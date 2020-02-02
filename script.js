// Global variables

const navButtons = document.querySelectorAll('.nav-btn');

// Navigation event listeners

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        button.style.backgroundColor = '#000';
        button.style.color = '#fff';
        let buttonContent = document.getElementById(`${button.id}-content`);
        buttonContent.classList.toggle('off');
    })
})
