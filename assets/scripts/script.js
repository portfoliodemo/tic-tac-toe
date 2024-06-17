
// Tic-Tac-Toe

// Create a gameBoard object, using an IIFE
// Immediately Invoked Function Expression
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

// const gameBoard = {
//     board: ['', '', '', '', '', '', '', '', ''],
// };

// Create a player object
const player = {
    playerOneName: "",
    playerOneMarker: "",
    playerTwoName: "",
    playerTwoMarker: "",
};

// Create a player/player(s) object
// Player Factory
// const Player = (name, symbol) => {
//     const getSymbol = () => symbol;
//     return { name, getSymbol };
// };


// Create a game/flow object

// What happens in a tic-tac-toe game?

// An empty board is displayed initially..

// How should that board be displayed? 9 buttons? 

// Command line only, or with an interface? 

// This is meant to be a webpage so an interface seems reasonable
// The command line idea is cool too, and eliminates the need for a UI

