import cruise from '../assets/cruise.png';
import swords from '../assets/sword.png';
import rightArrow from '../assets/right-arrow.png';
import leftArrow from '../assets/left-arrow.png';

class StartScreen {
    constructor () {
        const body = document.querySelector("body");

        this.startMain = document.createElement('div');
        this.startHeader = document.createElement('div');
        
        this.startMain.setAttribute('id', 'start-screen-container');
        this.startHeader.setAttribute('id', 'start-header');

        this.createHeader();
        this.playerOrRobotChoice();
        this.createNextBackButtons();

        body.appendChild(this.startMain);
        
        this.handlePlayerOrBotChange();
    }

    //  creates start screen header (BATTLESHIP)
    createHeader () {
        const startImg = document.createElement('img');
        startImg.src = cruise;

        const startImg2 = document.createElement('img');
        startImg2.src = cruise;

        const startText = document.createTextNode('BATTLESHIP');

        this.startHeader.appendChild(startImg);
        this.startHeader.appendChild(startText);
        this.startHeader.appendChild(startImg2);

        this.startMain.appendChild(this.startHeader);
    }

    // creates PlayerVSPlayer and PlayerVSBot containers
    playerOrRobotChoice() {
        const playerOrRobotContainer = document.createElement('div');
        const playerVsPlayer = this.#createPlayerOption('Player', 'Player');
        const or = document.createElement('div');
        const playerVsRobot = this.#createPlayerOption('Player', 'Bot');

        playerOrRobotContainer.setAttribute('id', 'player-or-robot-container');
        playerVsPlayer.classList.add('active-player-vs-bot');

        or.textContent = 'OR';
        or.setAttribute('id', 'or');
    
        playerOrRobotContainer.appendChild(playerVsPlayer);
        playerOrRobotContainer.appendChild(or);
        playerOrRobotContainer.appendChild(playerVsRobot);
    
        this.startMain.appendChild(playerOrRobotContainer);
    }

    // create options of WhoVSWho according to the passed attributes
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
    // to change the class of the active one
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

    // creates two buttons: back (to go back of the start screen choice) 
    // and next (to go to the next start screen choice)
    createNextBackButtons () {
        const backNextContainer = document.createElement('div');
        
        const next = document.createElement('button');
        const back = document.createElement('button');
        
        const nextArrow = document.createElement('img');
        const backArrow = document.createElement('img');
        
        nextArrow.src = rightArrow;
        backArrow.src = leftArrow;
        
        backNextContainer.setAttribute('id', 'back-next-container');
        next.setAttribute('id', 'next');
        back.setAttribute('id', 'back');
        
        next.appendChild(nextArrow);
        back.appendChild(backArrow);

        backNextContainer.appendChild(back);
        backNextContainer.appendChild(next);

        this.startMain.appendChild(backNextContainer);
    }
}

export default StartScreen;