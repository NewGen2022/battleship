// sets display style of all 'first start page' elements to FLEX
function displayFirstPageElements () {
    const playerOrBotContainer = document.getElementById('player-or-bot-container');
    const next = document.getElementById('next');
    playerOrBotContainer.style.display = 'flex';
    next.style.display = 'flex';
}

// sets display style of all 'second start page' elements to FLEX
function displaySecondPageElements () {
    const secondPage = document.querySelector('h1');
    const back = document.getElementById('back');
    secondPage.style.display = 'flex';
    back.style.display = 'flex';
}

// sets display style of all 'first start page' elements to NONE
function hideFirstPageElements () {
    const playerOrBotContainer = document.getElementById('player-or-bot-container');
    const next = document.getElementById('next');
    playerOrBotContainer.style.display = 'none';
    next.style.display = 'none';
}

// sets display style of all 'second start page' elements to NONE
function hideSecondPageElements () {
    const secondPage = document.querySelector('h1');
    const back = document.getElementById('back');
    secondPage.style.display = 'none';
    back.style.display = 'none';
}

// shows 'first page' and hides 'second page' 
function generateFirstPage () {
    displayFirstPageElements();
    hideSecondPageElements();
}

// shows 'second page' and hides 'first page' 
function generateSecondPage () {
    hideFirstPageElements();
    displaySecondPageElements();
}

    // creates button back (to go back of the start screen choice) OR
    // creates button next (to go to the next start screen choice)
function createBackOrNextButton (arrowDirection) {
        const backOrNextArrow = document.createElement('button');
        
        const arrow = document.createElement('img');
        
        arrow.src = arrowDirection;
        
        if (arrowDirection === leftArrow) {
            backOrNextArrow.setAttribute('id', 'back');
            backOrNextArrow.addEventListener('click', () => generateFirstPage());
        } else if (arrowDirection === rightArrow) {
            backOrNextArrow.setAttribute('id', 'next');
            backOrNextArrow.addEventListener('click', () => generateSecondPage());
        }
        
        backOrNextArrow.appendChild(arrow);

        this.startMain.appendChild(backOrNextArrow);
}

export {
    generateFirstPage,
    generateSecondPage,
    createBackOrNextButton
};