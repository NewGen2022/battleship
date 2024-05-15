import cruise from '../assets/cruise.png';
import swords from '../assets/sword.png';

class StartScreen {
    constructor () {
        const body = document.querySelector("body");

        this.startMain = document.createElement('div');
        this.startHeader = document.createElement('div');
        
        this.startMain.setAttribute('id', 'start-screen-container');
        this.startHeader.setAttribute('id', 'start-header');

        this.createHeader();
        this.playerOrRobotChoice();

        body.appendChild(this.startMain);
    }

    createHeader () {
        const startImg = document.createElement('img');
        startImg.src = cruise;
        startImg.classList.add('image');

        const startImg2 = document.createElement('img');
        startImg2.src = cruise;
        startImg2.classList.add('image');

        const startText = document.createTextNode('BATTLESHIP');

        this.startHeader.appendChild(startImg);
        this.startHeader.appendChild(startText);
        this.startHeader.appendChild(startImg2);

        this.startMain.appendChild(this.startHeader);
    }

    playerOrRobotChoice() {
        const playerOrRobotContainer = document.createElement('div');
        playerOrRobotContainer.setAttribute('id', 'player-or-robot-container');

        const or = document.createElement('div');
        or.textContent = 'OR';
        or.setAttribute('id', 'or');
    
        const playerVsPlayer = this.#createPlayerOption('Player', 'Player');
        const playerVsRobot = this.#createPlayerOption('Player', 'Bot');
    
        playerOrRobotContainer.appendChild(playerVsPlayer);
        playerOrRobotContainer.appendChild(or);
        playerOrRobotContainer.appendChild(playerVsRobot);
    
        this.startMain.appendChild(playerOrRobotContainer);
    }

    #createPlayerOption(player1, player2) {
        const playerOption = document.createElement('div');
        playerOption.setAttribute('id', `player-vs-${player2.toLowerCase()}`);
    
        const playerText1 = document.createTextNode(player1);
        const vsImg = document.createElement('img');
        vsImg.src = swords;
        vsImg.classList.add('image');
        const playerText2 = document.createTextNode(player2);
    
        playerOption.appendChild(playerText1);
        playerOption.appendChild(vsImg);
        playerOption.appendChild(playerText2);
    
        return playerOption;
    }
}

export default StartScreen;