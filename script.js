// Global variables

const navButtons = document.querySelectorAll('.nav-btn');

// Navigation event listeners

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        let buttonContent = document.getElementById(`${button.id}-content`);

        if (buttonContent.className.includes('off')) {

            buttonContent.classList.toggle('off');
            button.classList.toggle('invert-colors');

        } else {

            buttonContent.classList.toggle('off');
            button.classList.toggle('invert-colors');
        }
        
    })
})
