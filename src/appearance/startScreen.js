import cruise from '../assets/cruise.png';
import leftArrow from '../assets/left-arrow.png';

import { generateFirstPage, generateSecondPage } from './hideDisplayPages';
import FirstPage from './firstPage';

class StartScreen {
    constructor () {
        this.body = document.querySelector("body");

        this.startMain = document.createElement('div');
        this.startMain.setAttribute('id', 'start-screen-container');
        
        this.startHeader = document.createElement('div');
        this.startHeader.setAttribute('id', 'start-header');

        this.createHeader();

        new FirstPage();
        
        this.generateSecondStartPage();
    }

    //  creates start screen header (BATTLESHIP)
    createHeader () {
        const startImg = document.createElement('img');
        const startText = document.createTextNode('BATTLESHIP');
        const startImg2 = document.createElement('img');
        
        startImg.src = cruise;
        startImg2.src = cruise;

        this.startHeader.appendChild(startImg);
        this.startHeader.appendChild(startText);
        this.startHeader.appendChild(startImg2);

        this.startMain.appendChild(this.startHeader);
    }


    generateSecondStartPage () {
        const secondPage = document.createElement('h1');
        secondPage.textContent = 'SECOND PAGE';

        secondPage.style.display = 'none';

        this.startMain.appendChild(secondPage);

        this.createBackOrNextButton(leftArrow);
        const back = document.getElementById('back');
        back.style.display = 'none';
    }
}

export default StartScreen;