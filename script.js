'use strict';
let checkButton = document.querySelector('.check'); //get the check class from the HTML
let reset = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random()*20)+1; //set the random secret number
let score = 20;
let highScore = 0;
//

function setNewValue(){
    document.querySelector('.guess').value = '';
}

function resetAction(){
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20)+1;
    setNewValue();
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

function reduceScore(){
    score--;
    document.querySelector('.score').textContent = score;
}

function highscore(){
    if (score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}

function guessIsWrong(guess){
    if(score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber ? "📈 Too high" : "📉 Too low";
      reduceScore();
    } else {
      youLost();
    }
      setNewValue();    
}

function youWon(){
    document.querySelector('.message').textContent = "🎉 Correct Number"  
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347'
    highscore();
}

function youLost(){
    document.querySelector('.message').textContent = '💥 You lost the game';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = secretNumber;
}

function whenClicked(){
    const guess = Number(document.querySelector('.guess').value); //create guess value
    if(!guess){
     document.querySelector('.message').textContent = "📛 No number.";     
    } else if (guess === secretNumber){
      youWon();
    } else if (guess !== secretNumber){
      guessIsWrong(guess);    
    } 
}

reset.addEventListener('click', resetAction); //Reset function
checkButton.addEventListener('click', whenClicked); //Click function


