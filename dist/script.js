/*$(function() {
 $('.slide').css({
   'height': (($(window).height()) -40)
  });
});*/

/*$(function(){
  setHeight();
});
$(window).resize(function() {
  setHeight();
});
function setHeight() {
  var Height = $(window).height();
  $('.slide').css('height', Height);
}
*/
const questions = [
  {
      question: "In the school playground, who picked Hamad in their team?",
      choices: ["a) Khalid", "b) Faisal", "c) Hamad did not participate", "d) Nobody picked Hamad in their team"],
      answer: "d) Nobody picked Hamad in their team"
  },
]

var timer = document.getElementById("timer");
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
//var answerCheck = document.getElementById("answerCheck");
var initialInput = {};

var correctAns = 0;
var questionNum = 0;
var timeLeft = {};
/**
* FUNCTIONS
*/

// WHEN I click the start button, timer starts

var totalTime = 151;



function goToByScroll(id){			$('html,body').animate({
scrollTop: $("."+id).offset().top +0
},400);
console.log("Time taken to read: " + (new Date()).getSeconds() + " seconds");
}

var totalTime = 151;
function newQuiz() {
  questionIndex = 0;
  totalTime = 150;
//    timeLeft.textContent = totalTime;
  initialInput.textContent = "";

  startDiv.style.display = "none";
  questionDiv.style.display = "block";
  // timer.style.display = "block";
  // timesUp.style.display = "none";

  var startTimer = setInterval(function() {
      totalTime--;
      timeLeft.textContent = totalTime;
      if(totalTime <= 0) {
          clearInterval(startTimer);
          if (questionIndex < questions.length - 1) {
              gameOver();
          }
      }
  },1000);

  showQuiz();
};

// then presented with questions and choices
function showQuiz() {
  nextQuestion();
}

function nextQuestion() {
  questionTitle.textContent = questions[questionIndex].question;
  choiceA.textContent = questions[questionIndex].choices[0];
  choiceB.textContent = questions[questionIndex].choices[1];
  choiceC.textContent = questions[questionIndex].choices[2];
  choiceD.textContent = questions[questionIndex].choices[3];
}


// after question is answered, show if correct or wrong
function checkAnswer(answer) {

  //var lineBreak = document.getElementById("lineBreak");
  //lineBreak.style.display = "block";
  //answerCheck.style.display = "block";

  if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
      // correct answer, add 1 score to final score
      correctAns++;
      // console.log(correctAns);
      var emoji = document.createElement("img");
      emoji.src = 'smiley-emoji.gif';
      emoji.alt = "Yayyy!";
      emoji.height = "200";
      emoji.width = "200";
      document.getElementById("answerCheck").appendChild(emoji);
      console.log("You took" + " " + (new Date()).getSeconds() + " seconds for the quiz") ;
      //answerCheck.textContent = "Correct! Emoji will come";
      // answerCheck.src = smiley-emoji.gif;
      // answerCheck.alt = "Smiley emoji";
  } else {
      // wrong answer, deduct 10 second from timer
      //totalTime -= 10;
      //timeLeft.textContent = totalTime;
      var emoji = document.createElement("img");
      emoji.src = 'wrong.gif';
      emoji.alt = "Try Again";
      emoji.height = "200";
      emoji.width = "200";
      document.getElementById("answerCheck").appendChild(emoji);
      var wrong = document.getElementById("wrongAns");
      wrong.style.display = "block";
      wrong.textContent = "Oops! Better Luck Next Time!";
      console.log("You took" + " " + (new Date()).getSeconds() + "seconds") ;
  }

  questionIndex++;
  // repeat with the rest of questions
  // if (questionIndex < questions.length) {
  //     nextQuestion();
  // } else {
  //     // if no more question, run game over function
  //     gameOver();
  // }
}


function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

/**
* ADD EVENT LISTENERS
*/
startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);