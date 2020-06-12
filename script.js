const buttonRow   = document.querySelector(".buttonRow");
const startBtn    = document.getElementById("startBtn");
const scoreBtn    = document.getElementById("scoreBtn");
const startTimer  = document.getElementById("startTimer");
const quizTimer   = document.getElementById("quizTimer");
const mainText    = document.getElementById("mainText");
const question    = document.getElementById("question");
const answerOne   = document.getElementById("answerOne");
const answerTwo   = document.getElementById("answerTwo");
const answerThree = document.getElementById("answerThree");
const scoreBoard  = document.getElementById("scoreBoard");
let score = 0;
let secondsLeft = 5;

let currentQuestion = 0;
let questions = [];
const correctAnswers = [2,1,2,3,3,1,3,3,1,3];
let answers = new Array(30);

// Question 0 ---- Answer is 2nd
questions[0] = "1. Who made this quiz?";
answers[0] = "Mary";            answers[10] = "Jose";            answers[20] = "Bigfoot";

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



startBtn.addEventListener("click", function(){
    document.getElementsByClassName('buttonRow')[0].style.display = "none";
    document.getElementById('startTimer').style.display = "block";
    mainText.textContent = "Good Luck";
    secondsLeft = 5;
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

answerOne.addEventListener("click", function(){ choice(1); });
answerTwo.addEventListener("click", function(){ choice(2); });
answerThree.addEventListener("click", function(){ choice(3); });

function choice(num){
  console.log("Button is " + num);
  if(num == correctAnswers[currentQuestion]){
    score++;
    scoreBoard.textContent = "SCORE: " + score;
    if(currentQuestion < 9){
      nextQuestion();
    } else{
      secondsLeft = 0;
    }
  } else{
    secondsLeft -= 5;
  }
}

function nextQuestion(){
  currentQuestion++;
  question.textContent = questions[currentQuestion];
  answerOne.textContent = answers[currentQuestion];
  answerTwo.textContent = answers[currentQuestion + 10];
  answerThree.textContent = answers[currentQuestion + 20];
}

function startQuiz(){
  
  document.getElementsByClassName('mainmenu')[0].style.display = "none";
  document.getElementsByClassName('quiz')[0].style.display = "block";

  currentQuestion = 0;
  score = 0;
  secondsLeft = 30;
  quizTimer.textContent = secondsLeft;
  question.textContent = questions[0];
  answerOne.textContent = answers[0];
  answerTwo.textContent = answers[10];
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
  returnToMenu();
}
function returnToMenu(){
    document.getElementsByClassName('mainmenu')[0].style.display = "block";
    document.getElementsByClassName('quiz')[0].style.display = "none";
    mainText.textContent = "You think that you can beat my quiz?";
    document.getElementsByClassName('buttonRow')[0].style.display = "block";
    document.getElementById('startTimer').style.display = "none";
}
