'use strict';

let score = 20,
    randomNumber = random();
const displayRandomNumber = document.querySelector('.question'),
      bestScore = document.querySelector('.highscore'),
      btnCheckInput = document.querySelector('.check'),
      displayScore = document.querySelector('.score'),
      body = document.querySelector('body'),
      message = document.querySelector(('.guess-message')),
      btnNewGame = document.querySelector('.again'),
      enteredNumber = document.querySelector('.number-input');

const TEXT_MESSAGES = {
    startGame: 'Start playing',
    needMore: 'Need more!',
    needLess: 'Need less!',
    win: 'Right!!!',
    gameOver: 'Game Over!'
}

function random() {
    return Math.trunc((Math.random() * 20) + 1);
};

function numberIsIncorrect(text) {
    message.textContent = text;
    displayScore.textContent = --score;
};

function gameWasWin(text) {
    message.textContent = text;
    body.style.backgroundColor = 'green';
    displayRandomNumber.textContent = randomNumber;
    if (bestScore.textContent < score) {
        bestScore.textContent = score;
    }
}

function gameWasLost(text) {
    message.textContent = text;
    displayScore.textContent = score - 1;
}

btnCheckInput.addEventListener('click', () => {

    if (score < 2) return gameWasLost(TEXT_MESSAGES.gameOver)
    if (randomNumber === +enteredNumber.value) return gameWasWin(TEXT_MESSAGES.win);
    
    return numberIsIncorrect(enteredNumber.value < randomNumber ? TEXT_MESSAGES.needMore :  TEXT_MESSAGES.needLess)
});

btnNewGame.addEventListener('click', () => {

    body.style.backgroundColor = 'black';
    displayRandomNumber.textContent = '???';
    message.textContent = TEXT_MESSAGES.startGame;
    displayScore.textContent = '20';
    enteredNumber.value = '';
    randomNumber = random();
    score = 20;
});