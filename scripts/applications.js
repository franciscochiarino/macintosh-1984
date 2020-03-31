// Apps buttons and HTMLs

const appBtns = document.querySelectorAll('.app-btn');
const escape = document.getElementById('escape');
const memoryCard = {
    width: '100',
    height: '142'
}

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
                <button id="confirm-background" class="btn">OK</button>
            </section>
        </div>`,
    hangman: `
        <div id="hangman-window">
            <div class="flex-container">
                <section>
                    <!-- Hangman Illustration -->
                    <svg width="240" height="296" viewBox="0 0 240 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
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
            <form id="hangman-form" action="#">
                <label>Pick a character:
                    <input type="text" name="letter" id="letter" required>
                </label>
                <button type="submit" class="btn">GO!</button>
            </form>
        </div>`,
    memory: `
        <div id="memory-window">
            <div class="flex-container">
                <header>
                    <h3>Find the matching pairs!</h3>
                </header>
                
                <section class="grid-container">
                    
                    <div class="flip-card">
                        <div class="flip-card-inner lion" id="lion">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/lion_425x550.jpg" alt="lion" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 

                    <div class="flip-card">
                        <div class="flip-card-inner cat" id="cat">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/cat_425x550.jpg" alt="cat" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 

                    <div class="flip-card">
                        <div class="flip-card-inner cow" id="cow">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/cow_425x550.jpg" alt="cow" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 

                    <div class="flip-card">
                        <div class="flip-card-inner cow" id="cow-pair">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/cow_425x550.jpg" alt="cow" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 

                    <div class="flip-card">
                        <div class="flip-card-inner squirrel" id="squirrel">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/squirrel_425x550.jpg" alt="squirrel" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 

                    <div class="flip-card">
                        <div class="flip-card-inner wolf" id="wolf">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/wolf_425x550.jpg" alt="wolf" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 

                    <div class="flip-card">
                        <div class="flip-card-inner stone-goat" id="stone-goat">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/stone-goat_425x550.jpg" alt="stone-goat" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 

                    <div class="flip-card">
                        <div class="flip-card-inner sheep" id="sheep">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/sheep_425x550.jpg" alt="sheep" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 

                    <div class="flip-card">
                        <div class="flip-card-inner dog" id="dog">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/dog_425x550.jpg" alt="dog" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 

                    <div class="flip-card">
                        <div class="flip-card-inner sheep" id="sheep-pair">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/sheep_425x550.jpg" alt="sheep" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 
                    
                    <div class="flip-card">
                        <div class="flip-card-inner giraffe" id="giraffe">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/giraffe_425x550.jpg" alt="giraffe" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 
                    
                    <div class="flip-card">
                        <div class="flip-card-inner squirrel" id="squirrel-pair">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/squirrel_425x550.jpg" alt="squirrel" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 
                    
                    <div class="flip-card">
                        <div class="flip-card-inner dog" id="dog-pair">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/dog_425x550.jpg" alt="dog" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 
                    
                    <div class="flip-card">
                        <div class="flip-card-inner lion" id="lion-pair">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/lion_425x550.jpg" alt="lion" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 
                    
                    <div class="flip-card">
                        <div class="flip-card-inner giraffe" id="giraffe-pair">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/giraffe_425x550.jpg" alt="giraffe" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 
                    
                    <div class="flip-card">
                        <div class="flip-card-inner wolf" id="wolf-pair">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/wolf_425x550.jpg" alt="wolf" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 
                    
                    <div class="flip-card">
                        <div class="flip-card-inner cat" id="cat-pair">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/cat_425x550.jpg" alt="cat" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 
                    
                    <div class="flip-card">
                        <div class="flip-card-inner stone-goat" id="stone-goat-pair">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <img src="./assets/memory-pics/stone-goat_425x550.jpg" alt="stone-goat" width=${memoryCard.width} height=${memoryCard.height}>
                            </div>
                        </div>
                    </div> 
                </section> <!-- .grid-container -->
            </div> <!-- .flex-container -->
        </div>`,
    ticTacToe: `
        <div id="tic-tac-toe-window">
            <section class="flex-container">
                <section id="board">
                    <div id="sq00" class="square"></div>
                    <div id="sq01" class="square"></div>
                    <div id="sq02" class="square"></div>
                    <div id="sq10" class="square"></div>
                    <div id="sq11" class="square"></div>
                    <div id="sq12" class="square"></div>
                    <div id="sq20" class="square"></div>
                    <div id="sq21" class="square"></div>
                    <div id="sq22" class="square"></div>
                </section>
                <section id="script-display">
                    <h3>player one = X</h3> 
                    <h3>Player two = O</h3>
                </section>
            </section>
        </div>`,
    notes:`
        <div id="notes-window">
            <form>
                <input type="text">
                <input type="submit" value="Add" class="btn">
            </form>
            <section class="task-section">
                <ul>
                    
                </ul>
            </section>
        </div>`,
    calculator: `
        <div id="calculator-window">
            <div id="display"></div>
            <button>C</button>
            <button>E</button>
            <button>=</button>
            <button class="operator" id="times">*</button>
            <button class="number">7</button>
            <button class="number">8</button>
            <button class="number">9</button>
            <button class="operator" id="divide">/</button>
            <button class="number">4</button>
            <button class="number">5</button>
            <button class="number">6</button>
            <button class="operator" id="minus">-</button>
            <button class="number">1</button>
            <button class="number">2</button>
            <button class="number">3</button>
            <button class="operator" id="plus">+</button>
            <button class="number" id="zero">0</button>
            <button class="number">.</button>
        </div>`
};

// Open Application

// Add event listener to each button that opens an app
appBtns.forEach(button => {

    button.addEventListener('click', function(event) {
        const draggableDiv = document.getElementById('draggable-div');
        const appName = event.target.id
        
        if (draggableDiv.className.includes('off')) {

            // Show draggable window
            draggableDiv.classList.toggle('off');
            draggableDiv.style.top = '10%';
            draggableDiv.style.left = '10%';
            event.target.offsetParent.classList.toggle('off');

            // Add the app's title to the div's header
            const appTitle = appName[0].toLocaleUpperCase() + appName.substring(1);
            document.getElementById('draggable-div-title').innerText = appTitle;
            
            // Adjacent the html from the apps object
            draggableDiv.insertAdjacentHTML('beforeend', apps[appName]);
        }

        // Invert colors to default once the app is opened
        navButtons.forEach(button => {

            if (button.className.includes('invert-colors')) {
                button.classList.toggle('invert-colors');
            }
        })

        // Call the function with the app's name
        window[appName]();
        
    })
})

// Close Application

escape.addEventListener('mousedown', closeApp)

function closeApp() {

    const draggableDiv = document.getElementById('draggable-div');
    draggableDiv.classList.toggle('off');
    // If we dont remove the html, it would be added again and again everytime we open the app
    draggableDiv.removeChild(draggableDiv.lastChild);
    confetti.stop();
}


