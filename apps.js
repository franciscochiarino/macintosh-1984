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

// Add event listener to app buttons

appBtns.forEach(button => {
    button.addEventListener('click', function(event) {
        const draggableDiv = document.getElementById('draggable-div');
        // const draggableDivHeader = document.getElementById('draggable-divheader');

        if (draggableDiv.className.includes('off')) {
            draggableDiv.classList.toggle('off');
            draggableDiv.insertAdjacentHTML('beforeend', apps[event.target.id]);
        }
    })
})

