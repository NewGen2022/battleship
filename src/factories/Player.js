class Player {
    constructor (name) {
        this.name = name;
        this.attackedPositions = [];
    }

    // player makes move
    attack(row, column, board) {
        if (this.isAttacked(row, column)) return false;

        this.attackedPositions.push([row, column]);
        return board.receiveAttack(row, column);
    }

    // if player plays vs robot, robot will attack randomly 
    randomAttack (board) {
        let row;
        let column;

        do {
            row = Math.floor(Math.random() * 10); 
            column = Math.floor(Math.random() * 10); 
        } while (this.isAttacked(row, column));

        this.attackedPositions.push([row, column]);
        return board.receiveAttack(row, column);
    }

    // checks is the move have already be done
    isAttacked (row, column) {
        for (let i = 0; i < this.attackedPositions.length; i++) {
            if (
                this.attackedPositions[i][0] === row && 
                this.attackedPositions[i][1] === column
            ) {
                return true;
            }
        }

        return false;
    }
}

export default Player;