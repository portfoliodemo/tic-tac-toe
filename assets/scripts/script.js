
// Tic-Tac-Toe

// Create a gameBoard object, using an IIFE (Immediately Invoked Function Expression)
// The game board displays the tic-tac-toe board
const Gameboard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    // Return the current state of the board array
    const getBoard = () => board;

    // Reinitialize board to its original empty state
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
    };

    // Checks if the specified position on the board is empty, if so, place marker
    const placeMarker = (index, marker) => {
        if(board[index] === '') {
            board[index] = marker;
            return true;
        } 
        return false;
    };
    
    // Return the object
    return { getBoard, resetBoard, placeMarker };

})();
 
// Update the DOM
// TODO: Add currentPlayer instead of only 'X'
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        if (Gameboard.placeMarker(index, 'X')) {
            updateBoard();
        }
    });
});

// Update the Game Board
function updateBoard() {
    const board = Gameboard.getBoard();
    board.forEach((marker, index) => {
        cells[index].innerText = marker;
    });
}

// const gameBoard = {
//     board: ['', '', '', '', '', '', '', '', ''],
// };

// Create a player object
// const player = {
//     playerOneName: "",
//     playerOneMarker: "",
//     playerTwoName: "",
//     playerTwoMarker: "",
// };




