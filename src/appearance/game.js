import StartScreen from "./startScreen";

class Game {
    constructor (leftBoardLogic, rightBoardLogic, player1Name, player2Name) {
        this.leftBoardLogic = leftBoardLogic;
        this.rightBoardLogic = rightBoardLogic;
        this.player1Name = player1Name;
        this.player2Name = player2Name;

        const body = document.querySelector('body');

        this.gameDiv = document.createElement('div');

        this.leftBoard = document.createElement('div');
        this.rightBoard = document.createElement('div');

        this.leftInput = document.createElement('div');
        this.rightInput = document.createElement('div');

        this.gameDiv.setAttribute('id', 'game-container');
        
        this.leftInput.setAttribute('id', 'left-input');
        this.rightInput.setAttribute('id', 'right-input');
        
        this.leftBoard.setAttribute('id', 'left-board');
        this.rightBoard.setAttribute('id', 'right-board');
        
        this.gameDiv.appendChild(this.leftInput);
        this.gameDiv.appendChild(this.rightInput);

        this.start();
        
        body.appendChild(this.gameDiv);
    }

    start() {
        const startContainerHide = document.getElementById('start-screen-container');
        startContainerHide.parentNode.removeChild(startContainerHide);

        this.displayPlayerName();

        this.displayLeftBoard();
        
        

        let isBot = document.getElementById('player-vs-bot');
        if (!isBot) {
            isBot = false;
        } else {
            isBot = true;
        }

        this.displayRightBoard(isBot);

        if (this.player2Name !== 'Optimus Prime') {
            this.createLeftHideShowBtn();
            this.createRightHideShowBtn();
        }
    }

    displayPlayerName () {
        console.log('name');
    }

    displayLeftBoard () {
        this.leftBoard.innerHTML = ''; // Clear previous board display
        
        this.leftBoardLogic.board.forEach((row, rowIndex) => {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('board-row');
    
            row.forEach((cell, colIndex) => {
                const cellDiv = document.createElement('div');
                cellDiv.classList.add('board-cell');
    
                if (cell) {
                    cellDiv.classList.add('ship-cell'); // Ship is present
                }

                if (this.player2Name !== 'Optimus Prime') {
                    cellDiv.classList.add('disable-all-board');
                }

                cellDiv.addEventListener('click', () => {
                    if (this.leftBoardLogic.receiveAttack(rowIndex, colIndex)) {
                        cellDiv.classList.remove('ship-cell');
                        cellDiv.classList.add('ship-hit');
                        cellDiv.textContent = 'x';
                    }

                    this.leftBoardLogic.missedShots.forEach((missedRow, missedRowIndex) => {
                        missedRow.forEach((missedCell, missedColIndex) => {
                            if (missedCell) {
                                const missedCellDiv = this.leftBoard.querySelector(`.board-row:nth-child(${missedRowIndex + 1}) .board-cell:nth-child(${missedColIndex + 1})`);
                                if (missedCellDiv) {
                                    missedCellDiv.classList.remove('disable-all-board');
                                    missedCellDiv.classList.add('missed-cell');
                                }
                            }
                        });
                    });

                    if (this.leftBoardLogic.missedShots[rowIndex][colIndex]) {
                        cellDiv.classList.add('missed-cell'); // Missed shot
                    }

                    cellDiv.classList.remove('disable-all-board');

                    if (this.leftBoardLogic.isGameOver()) {
                        this.END();
                    }
                });
    
                rowDiv.appendChild(cellDiv);
            });
    
            this.leftBoard.appendChild(rowDiv);
        });

        this.leftInput.appendChild(this.leftBoard);
    }

    displayRightBoard (isBot) {
        this.rightBoard.innerHTML = ''; // Clear previous board display
        
        if (isBot) {
            this.rightBoardLogic.placeShipRandomly();
        }
        
        this.rightBoardLogic.board.forEach((row, rowIndex) => {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('board-row');

            row.forEach((cell, colIndex) => {
                const cellDiv = document.createElement('div');
                cellDiv.classList.add('board-cell');
    
                if (cell) {
                    cellDiv.classList.add('ship-cell'); // Ship is present
                }

                cellDiv.classList.add('disable-all-board');

                cellDiv.addEventListener('click', () => {
                    if (this.rightBoardLogic.receiveAttack(rowIndex, colIndex)) {
                        cellDiv.classList.remove('ship-cell');
                        cellDiv.classList.add('ship-hit');
                        cellDiv.textContent = 'x';
                    }

                    this.rightBoardLogic.missedShots.forEach((missedRow, missedRowIndex) => {
                        missedRow.forEach((missedCell, missedColIndex) => {
                            if (missedCell) {
                                const missedCellDiv = this.rightBoard.querySelector(`.board-row:nth-child(${missedRowIndex + 1}) .board-cell:nth-child(${missedColIndex + 1})`);
                                if (missedCellDiv) {
                                    missedCellDiv.classList.remove('disable-all-board');
                                    missedCellDiv.classList.add('missed-cell');
                                }
                            }
                        });
                    });

                    if (this.rightBoardLogic.missedShots[rowIndex][colIndex]) {
                        cellDiv.classList.add('missed-cell'); // Missed shot
                    }

                    cellDiv.classList.remove('disable-all-board');

                    if (this.rightBoardLogic.isGameOver()) {
                        this.END();
                    }
                });
    
                rowDiv.appendChild(cellDiv);
            });
    
            this.rightBoard.appendChild(rowDiv);
        });

        this.rightInput.appendChild(this.rightBoard);
    }

    createLeftHideShowBtn () {
        const leftShowBtn = document.createElement('button');
        leftShowBtn.setAttribute('id', 'left-show-btn');
        leftShowBtn.innerText = 'Show';

        // this.leftBoard.style.pointerEvents = 'none';

        leftShowBtn.addEventListener('click', () => {
            const cellDiv = this.leftBoard.querySelectorAll('.board-cell');
            const isShowing = leftShowBtn.innerText === 'Show';

            cellDiv.forEach(cell => {
                if (isShowing) {
                    cell.classList.remove('disable-all-board'); // shows cells
                } else {
                    if (!(cell.classList.contains('missed-cell') || cell.classList.contains('ship-hit'))) {
                        cell.classList.add('disable-all-board'); // hides cells
                    }
                }
            });

            leftShowBtn.innerText = isShowing ? 'Hide' : 'Show';
        })


        this.leftInput.appendChild(leftShowBtn);
    }

    createRightHideShowBtn () {
        const rightShowBtn = document.createElement('button');
        rightShowBtn.setAttribute('id', 'right-show-btn');
        rightShowBtn.innerText = 'Show';

        rightShowBtn.addEventListener('click', () => {
            const cellDiv = this.rightBoard.querySelectorAll('.board-cell');
            const isShowing = rightShowBtn.innerText === 'Show';

            cellDiv.forEach(cell => {
                if (isShowing) {
                    cell.classList.remove('disable-all-board'); // shows cells
                } else {
                    if (!(cell.classList.contains('missed-cell') || cell.classList.contains('ship-hit'))) {
                        cell.classList.add('disable-all-board'); // hides cells
                    }
                }
            });

            rightShowBtn.innerText = isShowing ? 'Hide' : 'Show';
        });

        this.rightInput.appendChild(rightShowBtn);
    }

    END () {
        const endWindow = document.createElement('dialog');
        const winner = document.createElement('div');
        const restartBtn = document.createElement('button');

        endWindow.setAttribute('id', 'modal-window');
        winner.setAttribute('id', 'winner');
        restartBtn.setAttribute('id', 'restart');

        winner.textContent = 'Player Name wins';
        restartBtn.textContent = 'Restart';

        restartBtn.addEventListener('click', () => {
            endWindow.close();
            const body = document.querySelector('body');
            body.innerHTML = '';
            new StartScreen();
        })

        endWindow.appendChild(winner);
        endWindow.appendChild(restartBtn);

        this.gameDiv.appendChild(endWindow);
        
        endWindow.showModal();
    }
}

export default Game;