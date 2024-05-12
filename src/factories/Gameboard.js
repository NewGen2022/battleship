import Ship from "./Ship";

class GameBoard {
    #SIZE = 10;

    constructor () {
        this.board = [];
        this.missedShots = [];
        this.init();
    }

    // initialize board
    init () {
        for (let i = 0; i < this.#SIZE; i++) {
            this.board[i] = [];
            this.missedShots[i] = [];
            for (let j = 0; j < this.#SIZE; j++) {
                this.board[i][j] = null;
                this.missedShots[i][j] = false;
            }
        };
    }

    // places ship on the board
    placeShip (ship, row, column, isHorizontal=true) {
        if (!this.#isPlacementValid(ship, row, column, isHorizontal)) return false;

        if (isHorizontal) {
            for (let i = 0; i < ship.length; i++) {
                this.board[row][column + i] = ship;
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                this.board[row + i][column] = ship;
            }
        }

        return true;
    }

    // checks if player's move is valid
    #isPlacementValid (ship, row, column, isHorizontal) {
        this.#isMoveValid(row, column);

        // ship doesn't fit in gameBoard
        if (isHorizontal) {
            if (column + ship.length > SIZE) return false
        } else {
            if (row + ship.length > SIZE) return false
        }
    
        // any of the fields is already taken
        if (isHorizontal) {
            for (let i = 0; i < ship.length; i++) {
                if (this.board[row][column + i]) return false
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                if (this.board[row + i][column]) return false
            }
        }
    
        // any of the neighbor fields are already taken
        if (isHorizontal) {
            for (let i = 0; i < ship.length; i++) {
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        if (
                            row + x < 0 ||
                            row + x >= SIZE ||
                            column + y + i < 0 ||
                            column + y + i >= SIZE
                        )
                            continue
                        if (this.board[row + x][column + y + i]) return false
                    }
                }
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        if (
                            row + x + i < 0 ||
                            row + x + i >= SIZE ||
                            column + y < 0 ||
                            column + y >= SIZE
                        )
                        continue
                        if (this.board[row + x + i][column + y]) return false
                    }
                }
            }
        }
        return true
    }

    // checks if move is inside the board
    #isMoveValid (row, column) {
        if (row < 0 || row >= SIZE || column < 0 || column >= SIZE) {
            return false
        }

        return true;
    }

    // takes a pair of coordinates, determines whether or 
    // not the attack hit a ship and then sends the ‘hit’ 
    // function to the correct ship, or records the 
    // coordinates of the missed shot.
    receiveAttack (row, column) {
        this.#isMoveValid(row, column);

        if (this.board[row, column]) {
            let hitIndex = 0
            // is vertical
            if (column > 0 && this.board[row][column - 1]) {
                let i = 1
                while (column - i >= 0 && this.board[row][column - i]) {
                    hitIndex++
                    i++
                }
            }
            // is horizontal
            else if (row > 0 && this.board[row - 1][column]) {
                let i = 1
                while (row - i >= 0 && this.board[row - i][column]) {
                    hitIndex++
                    i++
                }
            }
            this.board[row][column].hit(hitIndex)
            return true
        } else {
            this.missedShots[row][column] = true;
            return false;
        }
    }


    isGameOver () {
        // Iterate through the board
        for (let row = 0; row < this.#SIZE; row++) {
            for (let column = 0; column < this.#SIZE; column++) {
                if (this.board[row][column] instanceof Ship && !this.board[row][column].isSunk()) {
                    return false;
                }
            }
        }
        // If no ship object is found or all ship objects are sunk, return true
        return true;
    }
}

export default GameBoard;