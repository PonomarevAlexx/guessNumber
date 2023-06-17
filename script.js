'use strict';

let score = 20,
    randomNumber = random(),
    enteredNumber = document.querySelector('.number-input');
const displayRandomNumber = document.querySelector('.question'),
      bestScore = document.querySelector('.highscore'),
      btnCheckInput = document.querySelector('.check'),
      displayScore = document.querySelector('.score'),
      body = document.querySelector('body'),
      message = document.querySelector(('.guess-message')),
      btnNewGame = document.querySelector('.again');

function random() {
    return Math.trunc((Math.random() * 20) + 1);
};

function noName(text) {
    message.textContent = text;
    score--;
    displayScore.textContent = score;
};

btnCheckInput.addEventListener('click', () => {

    if (score < 2){
        message.textContent = 'Game Over!';
        displayScore.textContent = score - 1;
    } else {

        if(randomNumber == enteredNumber.value) {
            message.textContent = 'Right!!!';
            body.style.backgroundColor = 'green';
            displayRandomNumber.textContent = randomNumber;

            if (bestScore.textContent < score) {
                bestScore.textContent = score;
            }
        }
        
        if (enteredNumber.value < randomNumber) {
            noName('Need more!');
        }
        
        if (enteredNumber.value > randomNumber) {
            noName('Need less!');
        }
    }
});

btnNewGame.addEventListener('click', () => {

    body.style.backgroundColor = 'black';
    displayRandomNumber.textContent = '???';
    message.textContent = 'Начни угадывать';
    displayScore.textContent = '20';
    enteredNumber.value = '';
    randomNumber = random();
    score = 20;
});