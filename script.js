// script.js
// By Jose Burgos

// Variables \\
const buttonRow    = document.querySelector(".buttonRow");
const startBtn     = document.getElementById("startBtn");
const scoreBtn     = document.getElementById("scoreBtn");
const startTimer   = document.getElementById("startTimer");
const quizTimer    = document.getElementById("quizTimer");
const mainText     = document.getElementById("mainText");
const question     = document.getElementById("question");
const answerOne    = document.getElementById("answerOne");
const answerTwo    = document.getElementById("answerTwo");
const answerThree  = document.getElementById("answerThree");
const scoreBoard   = document.getElementById("scoreBoard");
const rightorwrong = document.getElementById("rightorwrong");
const endMessage   = document.getElementById("endMessage");
const form         = document.getElementById("form");
const backToMenu   = document.getElementById("backToMenu");
const submit       = document.getElementById("submit");
const highscore    = document.getElementsByClassName("highscore");

//const table        = document.getElementById("table").rows;
console.log(table);

let name = "";
let score = 0;
let secondsLeft = 5;

let currentQuestion = 0;
let questions = [];
const correctAnswers = [2,1,2,3,3,1,3,3,1,3];
let answers = new Array(30);

// Initializing local storaging
let recordNames = ["xxx","xxx","xxx"];
let recordScores = [0,0,0];

if(localStorage.getItem("storedNames") === null){
  localStorage.setItem("storedNames",recordNames);
} else{
  recordNames = localStorage.getItem("storedNames");
}
if(localStorage.getItem("storedScores") === null){
  localStorage.setItem("storedScores",recordScores);
} else{
  recordScores = localStorage.getItem("storedScores");
}

// Questions and Answers \\
// Question 0 ---- Answer is 2nd
questions[0] = "1. Who made this quiz?";
answers[0] = "Mary";         answers[10] = "Jose";         answers[20] = "Bigfoot";

// Question 1 ---- Answer is 1st
questions[1] = "2. What sound does a cow make?";
answers[1] = "Moo";          answers[11] = "Meow";         answers[21] = "Good Morning";

// Question 2 ---- Answer is 2nd
questions[2] = "3. What is the capital of Albania?";
answers[2] = "England";      answers[12] = "Tirana";       answers[22] = "Dallas";

// Question 3 ---- Answer is 3rd
questions[3] = "4. What kind meat goes in a ham sandwich?";
answers[3] = "More Bread";   answers[13] = "Steak";        answers[23] = "Ham";

// Question 4 ---- Answer is 3rd
questions[4] = "5. Which answer is the correct one?";
answers[4] = "Nope";         answers[14] = "Not This One"; answers[24] = "This One";

// Question 5 ---- Answer is 1st
questions[5] = "6. How do you spell 'Philadelphia'?";
answers[5] = "Philadelphia"; answers[15] = "Mexico";       answers[25] = "Philidelhpaia";

// Question 6 ---- Answer is 3rd
questions[6] = "7. Where was Abraham Lincoln born?";
answers[6] = "Saudi Arabia"; answers[16] = "Mars";         answers[26] = "America";

// Question 7 ---- Answer is 3rd
questions[7] = "8. How to crack open an egg?";
answers[7] = "A shovel";     answers[17] = "Yell at it";   answers[27] = "Try a spatula or edge of a bowl";

// Question 8 ---- Answer is 1st
questions[8] = "9. What color is an orange?";
answers[8] = "Orange";       answers[18] = "Apple";        answers[28] = "Green";

// Question 9 ---- Answer is 3rd
questions[9] = "Last Question. What letter does 'dinosaur' start with?";
answers[9] = "B";            answers[19] = "A";            answers[29] = "D";

// Event Listeners \\
answerOne.addEventListener("click", function(){ choice(1); });
answerTwo.addEventListener("click", function(){ choice(2); });
answerThree.addEventListener("click", function(){ choice(3); });

backToMenu.addEventListener("click", function(){ returnToMenu(); });
submit.addEventListener("click", function(){
  event.preventDefault();
  name = document.getElementById("playerInitials").value;
  console.log("The input was: " + name);
  changeRecords();
  returnToMenu();
});
scoreBtn.addEventListener("click", function(){ highScoreScreen(); })
startBtn.addEventListener("click", function(){ // Starting Quiz
    // Hides mainmenu elements for the countdown
    document.getElementsByClassName('buttonRow')[0].style.display = "none";
    document.getElementsByClassName('buttonRow')[1].style.display = "none";
    document.getElementById('startTimer').style.display = "block";
    mainText.textContent = "Good Luck";
    secondsLeft = 3;
    startTimer.textContent = secondsLeft;

    const timerInterval = setInterval(function(){
        secondsLeft--;
        startTimer.textContent = secondsLeft;

        if(secondsLeft <= 0){
            startTimer.textContent = "";
            clearInterval(timerInterval);
            startQuiz();
        }
    }, 1000);
});


// Functions \\
function choice(num){ // This is for the eventlisteners for the answer buttons during the quiz
  console.log("Button is " + num);
  if(num == correctAnswers[currentQuestion]){ // Correct Answer
    score += 5;
    scoreBoard.textContent = "SCORE: " + score;
    rightorwrong.textContent = "CORRECT";
  } else{ // Wrong Answer
    secondsLeft -= 5;
    quizTimer.textContent = secondsLeft;
    rightorwrong.textContent = "WRONG";
  }
  nextQuestion();
}

function nextQuestion(){
  currentQuestion++;

  if(currentQuestion == 10){
    secondsLeft = 0;
  } else{
    question.textContent = questions[currentQuestion];
    answerOne.textContent = answers[currentQuestion];
    answerTwo.textContent = answers[currentQuestion + 10];
    answerThree.textContent = answers[currentQuestion + 20];
  }
}

function startQuiz(){
  
  document.getElementsByClassName('mainmenu')[0].style.display = "none";
  document.getElementsByClassName('quiz')[0].style.display = "block";

  currentQuestion = 0;
  score = 0;
  scoreBoard.textContent = "SCORE: 0";
  secondsLeft = 30;

  quizTimer.textContent   = secondsLeft;
  question.textContent    = questions[0];
  answerOne.textContent   = answers[0];
  answerTwo.textContent   = answers[10];
  answerThree.textContent = answers[20];

  const timerInterval = setInterval(function(){
    secondsLeft--;
    quizTimer.textContent = secondsLeft;
    if(secondsLeft <= 0){
        quizTimer.textContent = "";
        clearInterval(timerInterval);
        endScreen();
    }
    }, 1000);

}
function endScreen(){
  // Remove Quiz screen elements
  // You scored x points!
  // If it's a high score (top 5), give congratulations and ask if they want to save the score with initials?
  // There will be a little form where that can be done. Probably best to have character limit.
  // Have a submit button for that form and a go back to main menu button. If they want to redo the quiz,
  // they can just go back and press start again.
  
  document.getElementsByClassName('endScreen')[0].style.display = "block";
  document.getElementsByClassName('quiz')[0].style.display = "none";
  
  endMessage.textContent = "Great Job! You scored " + score + " points!";
  if(newRecord()){
    form.style.display = "block";
    endMessage.TextContent = endMessage.TextContent + " That's a NEW RECORD!"
  }
}

function newRecord(){
  for(let i=0; i < 3; i++){
    if(score > recordScores[i]){ return true; }
  }
  return false;
}

function changeRecords(){
  if(score > recordScores[0]){
    recordScores[2] = recordScores[1];
    recordScores[1] = recordScores[0];
    recordScores[0] = score;
    
    recordNames[2] = recordNames[1];
    recordNames[1] = recordNames[0];
    recordNames[0] = name;

  } else if(score > recordScores[1]){
    recordScores[2] = recordScores[1];
    recordScores[1] = score;
    
    recordNames[2] = recordNames[1];
    recordNames[1] = name;
    
  } else{
    recordScores[2] = score;

    recordNames[2] = name;
  }

}
function highScoreScreen(){
  document.getElementsByClassName('mainmenu')[0].style.display = "none";
  document.getElementsByClassName('highscore')[0].style.display = "block";
  //for(let i=1; i<6; i++){
  //  
  //  table.childNodes[i].childNodes[1] = recordNames[i-1];
  //  table.childNodes[i].childNodes[2] = recordScores[i-1];
  //}
}
function returnToMenu(){
  document.getElementsByClassName('highscore')[0].style.display = "none";
  document.getElementsByClassName('mainmenu')[0].style.display = "block";
  document.getElementsByClassName('quiz')[0].style.display = "none";
  document.getElementsByClassName('endScreen')[0].style.display = "none";
  mainText.textContent = "You think that you can beat my quiz?";
  document.getElementsByClassName('buttonRow')[0].style.display = "block";
  document.getElementsByClassName('buttonRow')[1].style.display = "block";
  document.getElementById('startTimer').style.display = "none";
}
