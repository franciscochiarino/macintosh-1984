// Apps buttons and HTMLs

const appBtns = document.querySelectorAll('.app-btn');
const apps = {
    background: `
        <div id="background-window">
            <section class="bw-flex-container">
                <!-- <section class="main-thumbnail">
                    <img id="img-thumbnail" src="./assets/icons/mac-icon-classic.png" alt="">
                </section> -->
                <section class="thumbnails border-shadow">
                    <img src="./assets/thumbnails/macintosh_157x120.jpg" alt="light blue background color with old mac icon">
                    <img src="./assets/thumbnails/made-in-the-80s_157x120.jpg" alt="80s style background with big 80">
                    <img src="./assets/thumbnails/stripes_157x120.jpg" alt="pink yellow white blue and black stripes background">
                    <img src="./assets/thumbnails/retro-apple_157x120.jpg" alt="apple's finder smiley face background">                      
                </section>
            </section>
            <section class="btn-section">
                <button id="confirm-background" class="border-shadow">OK</button>
            </section>
        </div>`
};

// Open Application

// Add event listener to each button that opens an app
appBtns.forEach(button => {

    button.addEventListener('click', function(event) {
        const draggableDiv = document.getElementById('draggable-div');

        if (draggableDiv.className.includes('off')) {

            draggableDiv.classList.toggle('off');
            // Adjacent the html from the apps object
            draggableDiv.insertAdjacentHTML('beforeend', apps[event.target.id]);
        }
    })
})

// Close Application

escape.addEventListener('mousedown', function(event) {

    const draggableDiv = document.getElementById('draggable-div');
    draggableDiv.classList.toggle('off');
    // If we dont remove the html, it would be added again and again everytime we open the app
    draggableDiv.removeChild(draggableDiv.lastChild);
})
