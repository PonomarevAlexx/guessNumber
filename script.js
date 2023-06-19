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

const texrMessage = {
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

    if (score < 2){
        gameWasLost(texrMessage.gameOver)
    } else {

        if(randomNumber === +enteredNumber.value) {
            gameWasWin(texrMessage.win)
            return;
        }
        
        if (enteredNumber.value < randomNumber) {
            numberIsIncorrect(texrMessage.needMore);
        }
        
        if (enteredNumber.value > randomNumber) {
            numberIsIncorrect(texrMessage.needLess);
        }
    }
});

btnNewGame.addEventListener('click', () => {

    body.style.backgroundColor = 'black';
    displayRandomNumber.textContent = '???';
    message.textContent = texrMessage.startGame;
    displayScore.textContent = '20';
    enteredNumber.value = '';
    randomNumber = random();
    score = 20;
});