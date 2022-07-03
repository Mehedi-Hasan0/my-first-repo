'use strict';
let number = Math.trunc(Math.random() * 20 ) + 1;
let score = 20;
let highScore = 0;
console.log(number);


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('Not a Number !')
    } else if (guess === number) {
    displayMessage('Correct Numbers!!!');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
        highScore = score
        document.querySelector('.highscore').textContent = highScore;
    }

   } else if (guess !== number) {
    if (score > 1) {
        displayMessage(guess > number ? 'Too High!' : 'Too Low !');
        score-- ;
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('You loose the game!!');
        document.querySelector('.score').textContent = 0;
    }

   }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    console.log(number);
    
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    

})