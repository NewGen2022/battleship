import leftArrow from '../assets/left-arrow.png';
import { createBackOrNextButton } from './hideDisplayPages';

class SecondPage {
    constructor () {
        this.generateSecondStartPage();
    }

    generateSecondStartPage () {
        const startMain = document.getElementById('start-screen-container');
        
        const secondPage = document.createElement('h1');
        secondPage.textContent = 'SECOND PAGE';

        secondPage.style.display = 'none';

        startMain.appendChild(secondPage);

        createBackOrNextButton(leftArrow);
        const back = document.getElementById('back');
        back.style.display = 'none';
    }
}

export default SecondPage;