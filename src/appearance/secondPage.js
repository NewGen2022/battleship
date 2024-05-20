import leftArrow from '../assets/left-arrow.png';
import { createBackOrNextButton } from './hideDisplayPages';
import GameBoard from '../factories/Gameboard';

class SecondPage {
    constructor () {
        this.startMain = document.getElementById('start-screen-container');

        this.leftBoard = document.createElement('div');
        this.rightBoard = document.createElement('div');

        this.leftBoardLogic = new GameBoard();
        this.rightBoardLogic = new GameBoard();

        this.inputs = document.createElement('div');
        this.leftInput = document.createElement('div');
        this.rightInput = document.createElement('div');
        
        this.inputs.setAttribute('id', 'inputs');
        this.leftInput.setAttribute('id', 'left-input');
        this.rightInput.setAttribute('id', 'right-input');
        
        this.leftBoard.setAttribute('id', 'left-board');
        this.rightBoard.setAttribute('id', 'right-board');

        console.log(this.leftBoardLogic);
        console.log(this.rightBoardLogic);

        this.startMain.appendChild(this.inputs);

        this.generateSecondStartPage();
    }

    generateSecondStartPage() {
        createBackOrNextButton(leftArrow);
    }

    generateNameInput (playerVsBot) {
        this.inputs.innerHTML = '';
        this.leftInput.innerHTML = '';
        this.rightInput.innerHTML = '';

        let player1;
        let player2;

        if (playerVsBot === 'player-vs-player') {
            player1 = this.#createNameInput('player1');
            player2 = this.#createNameInput('player2');
        } else if (playerVsBot === 'player-vs-bot') {
            player1 = this.#createNameInput('player1');
            player2 = this.#createNameInput('bot');
        }

        this.leftInput.appendChild(player1);
        this.rightInput.appendChild(player2);

        this.inputs.appendChild(this.leftInput);
        this.inputs.appendChild(this.rightInput);
    }

    displayGameBoard () {
        const player2 = document.getElementById('player2-input');

        this.displayLeftBoard();
        this.displayRightBoard();
        
        if (!player2) {
            const rightBoard = document.getElementById('right-board');
            const rightBoardCells = rightBoard.querySelectorAll('.board-cell');
            rightBoardCells.forEach(cell => {
                cell.classList.add('disable-board');
            });
        }
    }

    displayLeftBoard() {
        this.leftBoard.innerHTML = ''; // Clear previous board display
        this.leftBoardLogic.board.forEach((row, rowIndex) => {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('board-row');
    
            row.forEach((cell, colIndex) => {
                const cellDiv = document.createElement('div');
                cellDiv.classList.add('board-cell');
    
                if (cell) {
                    cellDiv.classList.add('ship-cell'); // Ship is present
                } else if (this.leftBoardLogic.missedShots[rowIndex][colIndex]) {
                    cellDiv.classList.add('missed-cell'); // Missed shot
                }
    
                rowDiv.appendChild(cellDiv);
            });
    
            this.leftBoard.appendChild(rowDiv);
        });

        this.leftInput.appendChild(this.leftBoard);
    }

    displayRightBoard() {
        this.rightBoard.innerHTML = ''; // Clear previous board display
        this.rightBoardLogic.board.forEach((row, rowIndex) => {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('board-row');
    
            row.forEach((cell, colIndex) => {
                const cellDiv = document.createElement('div');
                cellDiv.classList.add('board-cell');
    
                if (cell) {
                    cellDiv.classList.add('ship-cell'); // Ship is present
                } else if (this.rightBoardLogic.missedShots[rowIndex][colIndex]) {
                    cellDiv.classList.add('missed-cell'); // Missed shot
                }
    
                rowDiv.appendChild(cellDiv);
            });
    
            this.rightBoard.appendChild(rowDiv);
        });

        this.rightInput.appendChild(this.rightBoard);
    }
    

    #createNameInput (player) {
        const input = document.createElement('input');

        if (player === 'player1') {
            input.placeholder = 'Player 1';
            input.setAttribute('id', `${player}-input`);
        } else if (player === 'player2') {
            input.placeholder = 'Player 2';
            input.setAttribute('id', `${player}-input`);
        } else if (player === 'bot') {
            input.placeholder = 'Optimus Prime';
            input.value = 'Optimus Prime';
            input.setAttribute('id', `${player}-input`);
            input.disabled = true;
        }

        return input;
    }
}

export default SecondPage;