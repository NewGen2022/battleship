import cruise from '../assets/cruise.png';
import swords from '../assets/sword.png';
import rightArrow from '../assets/right-arrow.png';
import leftArrow from '../assets/left-arrow.png';

class StartScreen {
    constructor () {
        this.body = document.querySelector("body");

        this.startMain = document.createElement('div');
        this.startHeader = document.createElement('div');
        
        this.startMain.setAttribute('id', 'start-screen-container');
        this.startHeader.setAttribute('id', 'start-header');

        this.generateFirstStartPage();
        this.generateSecondStartPage();
    }

    // creates first start screen page with
    // choice between PlayerVSPlayer and PlayerVSBot
    generateFirstStartPage () {
        this.body.appendChild(this.startMain);
        this.createHeader();
        this.generatePlayerOrBotChoice();
        this.createBackOrNextButton(rightArrow);
        this.handlePlayerOrBotChange();
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

    // creates PlayerVSPlayer and PlayerVSBot containers
    // for first page
    generatePlayerOrBotChoice() {
        const playerOrBotContainer = document.createElement('div');
        const playerVsPlayer = this.#createPlayerOption('Player', 'Player');
        const or = document.createElement('div');
        const playerVsRobot = this.#createPlayerOption('Player', 'Bot');

        playerOrBotContainer.setAttribute('id', 'player-or-bot-container');
        playerVsPlayer.classList.add('active-player-vs-bot');

        or.textContent = 'OR';
        or.setAttribute('id', 'or');
    
        playerOrBotContainer.appendChild(playerVsPlayer);
        playerOrBotContainer.appendChild(or);
        playerOrBotContainer.appendChild(playerVsRobot);
    
        this.startMain.appendChild(playerOrBotContainer);
    }

    // create options of WhoVSWho according to the 
    // passed attributes for first page
    #createPlayerOption(player1, player2) {
        const playerOption = document.createElement('div');
        const playerText1 = document.createTextNode(player1);
        const playerText2 = document.createTextNode(player2);
        const vsImg = document.createElement('img');

        playerOption.setAttribute('id', `${player1.toLowerCase()}-vs-${player2.toLowerCase()}`);
    
        vsImg.src = swords;
    
        playerOption.appendChild(playerText1);
        playerOption.appendChild(vsImg);
        playerOption.appendChild(playerText2);
    
        return playerOption;
    }

    // adds event listeners to PlayerVSPlayer and PlayerVSBot 
    // to change the class of the active one for first page
    handlePlayerOrBotChange () {
        const playerVsPlayer = document.getElementById('player-vs-player');
        const playerVsBot = document.getElementById('player-vs-bot');

        playerVsPlayer.addEventListener('click', () => {
            if (playerVsPlayer.class === undefined) {
                playerVsBot.classList.remove('active-player-vs-bot')
                playerVsPlayer.classList.add('active-player-vs-bot');
            }
        })

        playerVsBot.addEventListener('click', () => {
            if (playerVsBot.class === undefined) {
                playerVsPlayer.classList.remove('active-player-vs-bot')
                playerVsBot.classList.add('active-player-vs-bot');
            }
        })
    }

    // creates button back (to go back of the start screen choice) OR
    // creates button next (to go to the next start screen choice)
    // for first page
    createBackOrNextButton (arrowDirection) {
        const backOrNextArrow = document.createElement('button');
        
        const arrow = document.createElement('img');
        
        arrow.src = arrowDirection;
        
        if (arrowDirection === leftArrow) {
            backOrNextArrow.setAttribute('id', 'back');
            backOrNextArrow.addEventListener('click', () => this.handleFirstPageDisplaying());
        } else if (arrowDirection === rightArrow) {
            backOrNextArrow.setAttribute('id', 'next');
            backOrNextArrow.addEventListener('click', () => this.handleSecondPageGeneration());
        }
        
        backOrNextArrow.appendChild(arrow);

        this.startMain.appendChild(backOrNextArrow);
    }
    
    handleFirstPageDisplaying () {
        this.displayFirstPageElements();
        this.hideSecondPageElements();
    }

    handleSecondPageGeneration () {
        this.hideFirstPageElements();
        this.displaySecondPageElements();
    }

    // sets display style of all 'first start page' elements to FLEX
    displayFirstPageElements () {
        const playerOrBotContainer = document.getElementById('player-or-bot-container');
        const next = document.getElementById('next');
        playerOrBotContainer.style.display = 'flex';
        next.style.display = 'flex';
    }

    // sets display style of all 'second start page' elements to FLEX
    displaySecondPageElements () {
        const secondPage = document.querySelector('h1');
        const back = document.getElementById('back');
        secondPage.style.display = 'flex';
        back.style.display = 'flex';
    }

    // sets display style of all 'first start page' elements to NONE
    hideFirstPageElements () {
        const playerOrBotContainer = document.getElementById('player-or-bot-container');
        const next = document.getElementById('next');
        playerOrBotContainer.style.display = 'none';
        next.style.display = 'none';
    }

    // sets display style of all 'second start page' elements to NONE
    hideSecondPageElements () {
        const secondPage = document.querySelector('h1');
        const back = document.getElementById('back');
        secondPage.style.display = 'none';
        back.style.display = 'none';
    }
}

export default StartScreen;