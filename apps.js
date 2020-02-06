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
                    <img id="macintosh_1920x1200" src="./assets/thumbnails/macintosh_157x120.jpg" alt="light blue background color with old mac icon">
                    <img id="made-in-the-80s_1920x1080" src="./assets/thumbnails/made-in-the-80s_157x120.jpg" alt="80s style background with big 80">
                    <img id="stripes_1920x1080" src="./assets/thumbnails/stripes_157x120.jpg" alt="pink yellow white blue and black stripes background">
                    <img id="space_1920x1080" src="./assets/thumbnails/space_157x120.jpg" alt="planet picture from space">                      
                </section>
            </section>
            <section class="btn-section">
                <button id="confirm-background" class="border-shadow">OK</button>
            </section>
        </div>`,
    hangman: `
        <div id="hangman-window">
            <div class="flex-container">
                <section>
                    <!-- Hangman Illustration -->
                    <svg width="240" height="296" viewBox="0 0 240 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="hangman">
                            <!-- Hang Stand -->
                            <g id="hang-stand">
                                <line id="Line 1" y1="293" x2="107" y2="293" stroke="black" stroke-width="6"/>
                                <line id="Line 4" x1="53.0506" y1="59.3659" x2="107.758" y2="5.94937" stroke="black" stroke-width="6" stroke-linecap="round"/>
                                <line id="Line 3" x1="48" y1="5" x2="239" y2="5" stroke="black" stroke-width="6"/>
                                <line id="Line 2" x1="53" y1="293" x2="53" stroke="black" stroke-width="6"/>
                                <line id="Line 5" x1="208.5" y1="6" x2="208.5" y2="64" stroke="black"/>
                            </g>
                            <!-- Head -->
                            <g id="head">
                                <circle id="circle" cx="208" cy="90" r="25.5" fill="#FBDAB4" stroke="black"/>
                                <path id="hair" d="M178 85L180.5 93L188 84L193.5 81L198 75L203.5 77L211 73.5L220 79.5H228L226.5 87.5L235.5 94L238.5 83L235.5 72.5L226.5 63.5L215.5 58.5H204.5L198 60L189.5 63.5L184 69.5L176 71.5L178 76V85Z" fill="#021C1E" stroke="black"/>
                                <circle id="eye-left" cx="199.5" cy="87.5" r="4.5" fill="#F8F4F4"/>
                                <circle id="eye-right" cx="216.5" cy="87.5" r="4.5" fill="#F8F4F4"/>
                                <path id="nose" d="M208.5 89.5L207.5 96H209.5" stroke="black"/>
                                <!-- Sad -->
                                <g id="sad">
                                    <circle id="sad-eye-left" cx="199.5" cy="89.5" r="1.5" fill="black"/>
                                    <circle id="sad-eye-right" cx="216.5" cy="89.5" r="1.5" fill="black"/>
                                    <path id="mouth-sad" d="M202 106.714L207.845 105.76C210.665 105.3 213.486 106.577 215 109V109" stroke="black"/>
                                </g>
                                <!-- Happy -->
                                <g id="happy">
                                    <circle id="happy-eye-left" cx="199.5" cy="87.5" r="1.5" fill="black"/>
                                    <circle id="happy-eye-right" cx="216.5" cy="87.5" r="1.5" fill="black"/>
                                    <path id="mouth-happy" d="M202 106.5V106.5C202.848 108.478 205.071 109.476 207.112 108.796L214 106.5" stroke="black"/>
                                </g>
                            </g>
                            <!-- Body -->
                            <line id="body" x1="207.5" y1="116" x2="207.5" y2="212" stroke="black" stroke-width="3"/>
                            <!-- Right Arm -->
                            <path id="arm-right" d="M208 135L224 172" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <!-- Left Arm -->
                            <line id="arm-left" x1="206.692" y1="135.005" x2="189.005" y2="171.308" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <!-- Right Leg -->
                            <line id="leg-right" x1="207.956" y1="212.82" x2="224.82" y2="254.044" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <!-- Left Leg -->
                            <line id="leg-left" x1="190.192" y1="254.039" x2="207.367" y2="212.808" stroke="black" stroke-width="3" stroke-linecap="round"/> 
                        </g>
                    </svg>
                </section>

                <!-- Stuff displayed by app.js -->
                <section id="display">
                    <section id="word-display"></section>
                    <section id="output-message"></section>
                    <section id="used-characters">
                        <p id="used-character"></p>
                    </section>
                </section>
                
            </div> <!-- .flex-container -->

            <!-- Form -->
            <form onsubmit="guessLetter(); return false" action="#">
                <label for="hangman">Pick a character:
                    <input type="text" name="letter" id="letter" required>
                </label>
                <input type="submit">
            </form>
        </div>`
};

// Open Application

// Add event listener to each button that opens an app
appBtns.forEach(button => {

    button.addEventListener('click', function(event) {
        const draggableDiv = document.getElementById('draggable-div');

        if (draggableDiv.className.includes('off')) {

            draggableDiv.classList.toggle('off');
            event.target.offsetParent.classList.toggle('off');
            // Adjacent the html from the apps object
            draggableDiv.insertAdjacentHTML('beforeend', apps[event.target.id]);
        }

        // Invert colors to default once the app is opened
        navButtons.forEach(button => {

            if (button.className.includes('invert-colors')) {
                button.classList.toggle('invert-colors');
            }
        })

        // Call the function with the app's name
        window[event.target.id]();
    })
})

// Close Application

escape.addEventListener('mousedown', closeApp)

function closeApp(event) {

    const draggableDiv = document.getElementById('draggable-div');
    draggableDiv.classList.toggle('off');
    // If we dont remove the html, it would be added again and again everytime we open the app
    draggableDiv.removeChild(draggableDiv.lastChild);
}
