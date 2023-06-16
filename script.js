'use strict';

let bestScore = document.querySelector('.highscore');
const btnNewGame = document.querySelector('.again');

    let score = 20,
        randomNumber = Math.trunc((Math.random() * 20) + 1);
    const displayRandomNumber = document.querySelector('.question'),
          btnCheckInput = document.querySelector('.check'),
          displayScore = document.querySelector('.score');

    btnCheckInput.addEventListener('click', () => {
        let enteredNumber = document.querySelector('.number-input');
        const message = document.querySelector(('.guess-message')),
              body = document.querySelector('body');

        if (score < 2){
            message.textContent = 'Game Over!';
            displayScore.textContent = score - 1;
        } else {
            if(randomNumber == enteredNumber.value) {
                message.textContent = 'Right!!!';
                body.style.backgroundColor = 'green';
                if (bestScore.textContent < score) {
                    bestScore.textContent = score;
                }
                displayRandomNumber.textContent = randomNumber;
            } else if (enteredNumber.value < randomNumber) {
                message.textContent = 'Need more!';
                score--;
                displayScore.textContent = score;
            } else if (enteredNumber.value > randomNumber) {
                message.textContent = 'Need less!';
                score--;
                displayScore.textContent = score;
            }
        }

        btnNewGame.addEventListener('click', () => {

            body.style.backgroundColor = 'black';
            displayRandomNumber.textContent = '???';
            message.textContent = 'Начни угадывать';
            displayScore.textContent = '20';
            enteredNumber.value = '';
            randomNumber = Math.trunc((Math.random() * 20) + 1);
            score = 20;
        })
    });
