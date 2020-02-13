
function ticTacToe() {
    
    // If there is a winner, this variable is going to be reassigned to an empty string, so users can't keep playing
    let squares = document.getElementsByClassName('square');

    // Other Variables
    const display = document.getElementById('script-display');  // Where messages are going to be displayed
    let clicksInsideBoard = 0;  // Click counter

    // Create virtual board
    const virtualBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    // Count the clicks inside the board, so we know who's who
    const clickCounter = () => {
        clicksInsideBoard += 1
    };

    // Check if someone wins
    const findWinner = (array) => {
        let counterP1 = 0;
        let counterP2 = 0;

        // Using 'for' because forEach didn't work here
        for (let i = 0; i < array.length; i++) {
            let sq = array[i];
            (sq === 'X') ? counterP1 += 1 : false;
            (sq === 'O') ? counterP2 += 1 : false;
        }

        if (counterP1 === 3) {
            display.innerHTML = '<h3>Player One Wins!</h3>';
            confetti.start();
            squares = '';
        }
        if (counterP2 === 3) {
            display.innerHTML = '<h3>Player Two Wins!</h3>';
            confetti.start();
            squares = '';
        }
    };

    // Get arrays
    const findCombinations = () => {
    
        // Horizontal arrays
        virtualBoard.forEach(row => {     
            findWinner(row);
        })

        // Vertical arrays
        for (let i = 0; i < virtualBoard.length; i++) {
            let col = [];

            for (let j = 0; j < virtualBoard.length; j++) {
                col.push(virtualBoard[j][i]);
            }

            findWinner(col);
        }

        // Diagonal arrays
        let diagonal1 = [virtualBoard[0][0], virtualBoard[1][1], virtualBoard[2][2]];
        let diagonal2 = [virtualBoard[2][0], virtualBoard[1][1], virtualBoard[0][2]];

        findWinner(diagonal1);
        findWinner(diagonal2);
    };

    // Draw & Locate clicks
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
            let squareId = squares[i].id;
            let squareRow = squareId[squareId.length - 2];
            let squareCol = squareId[squareId.length - 1];
            
            if (clicksInsideBoard % 2 === 0 && squares[i].innerHTML === '') {
                squares[i].innerHTML = '<p>X</p>';
                clickCounter();

                // Concatinate the last character of the square's id (it's number):
                virtualBoard[squareRow][squareCol] = 'X';

                // Check if player one won:
                findCombinations();

            } else if (squares[i].innerHTML === '') {
                squares[i].innerHTML = '<p>O</p>';
                clickCounter();

                // Concatinate the last character of the square's id (it's number):
                virtualBoard[squareRow][squareCol] = 'O';
                
                // Check if player two won:
                findCombinations();
            }
        });
    }
}
