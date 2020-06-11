/*
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
*/

const buttonRow = document.querySelector(".buttonRow");
const startBtn = document.getElementById("startBtn");
const scoreBtn = document.getElementById("scoreBtn");
const startTimer = document.getElementById("startTimer");
const quizTimer = document.getElementById("quizTimer");
const question = document.getElementById("question");
let score = 0;
let secondsLeft = 6;

startBtn.addEventListener("click", function(){
    document.getElementsByClassName('buttonRow')[0].style.visibility = 'hidden';
    document.getElementById('startTimer').style.visibility = 'visible';
    question.textContent = "Good Luck";
    const timerInterval = setInterval(function(){
        secondsLeft--;
        startTimer.textContent = secondsLeft;

        if(secondsLeft <= 0){
            startTimer.textContent = "";
            secondsLeft = 6;
            clearInterval(timerInterval);
            returnToMenu(); // Temporary until I get the quiz set up
        }
    }, 1000);
});

function returnToMenu(){
    // Do things
    document.getElementsByClassName('buttonRow')[0].style.visibility = 'visible';
    document.getElementById('startTimer')[0].style.visibility = 'hidden';
}
