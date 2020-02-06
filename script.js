// Global variables

const navButtons = document.querySelectorAll('.nav-btn');
const escape = document.getElementById('escape');
// const escapeAboutMe = document.getElementById('escape-about-me');
const aboutMeBtn = document.getElementById('about-me-btn');
const aboutMeWindow = document.getElementById('about-me-window');
const desktop = document.querySelector('.desktop');


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

desktop.addEventListener('click', function() {
    navButtons.forEach(button => {
        let buttonContent = document.getElementById(`${button.id}-content`);

        if (!buttonContent.className.includes('off')) {
            buttonContent.classList.toggle('off');
            button.classList.toggle('invert-colors');
        }

        if (!aboutMeWindow.className.includes('off')) {
            aboutMeWindow.classList.toggle('off');
        }
    })
})

// Open About Me

aboutMeBtn.addEventListener('click', function(event) {
    event.target.parentElement.classList.toggle('off');
    event.target.parentElement.previousElementSibling.classList.toggle('invert-colors')
    aboutMeWindow.classList.toggle('off');
})


// Draggable Div and About Me escape 'x'

escape.addEventListener('click', function() {
    const draggableDiv = document.getElementById('draggable-div');
    draggableDiv.classList.toggle('off');
})

// escapeAboutMe.addEventListener('click', function() {
//     aboutMeWindow.classList.toggle('off');
// })

// Make the DIV element draggable

dragElement(document.getElementById("draggable-div"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// Testing
