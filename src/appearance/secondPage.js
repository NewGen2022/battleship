import leftArrow from '../assets/left-arrow.png';
import { createBackOrNextButton } from './hideDisplayPages';

class SecondPage {
    constructor () {
        this.startMain = document.getElementById('start-screen-container');

        this.inputs = document.createElement('div');
        this.leftInput = document.createElement('div');
        this.rightInput = document.createElement('div');
        
        this.inputs.setAttribute('id', 'inputs');
        this.leftInput.setAttribute('id', 'left-input');
        this.rightInput.setAttribute('id', 'right-input');

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