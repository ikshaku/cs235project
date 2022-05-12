

// import fs from 'fs'
// const fs = require('fs')
// const content = 'Some content!';

// fs.writeFile('test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });

var timer = document.getElementById("timer");
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");
var startQuizBtn2 = document.getElementById("start-quiz-button2");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var questionDiv2 = document.getElementById("questionDiv2");
var questionTitle2 = document.getElementById("questionTitle2");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var choiceA2 = document.getElementById("btn4");
var choiceB2 = document.getElementById("btn5");
var choiceC2 = document.getElementById("btn6");
var choiceD2 = document.getElementById("btn7");
var initialInput = {};

var correctAns = 0;
var questionNum = 0;

var t1;

function goToByScroll(id){
  $('html,body').animate({

scrollTop: $("."+id).offset().top +0
},400);
t1 = (new Date()).getSeconds();
console.log("Time taken to read: " + ((new Date()).getSeconds()) + " seconds");
}

// var startTime = new Date().getTime();
// var loadtime;
//     function doneLoading() {
//         var loadtime = new Date().getTime();
//         console.log("image took " + loadtime + "ms to load");
//     }; 

function nextQuestion() {
  questionIndex = 0;
  const questions = [
    {
        question: "In the school playground, who picked Hamad in their team?",
        choices: ["a) Khalid", "b) Faisal", "c) Hamad did not participate", "d) Nobody picked Hamad in their team"],
        answer: "d) Nobody picked Hamad in their team"
    }
  ]
  questionTitle.textContent = questions[questionIndex].question;
  choiceA.textContent = questions[questionIndex].choices[0];
  choiceB.textContent = questions[questionIndex].choices[1];
  choiceC.textContent = questions[questionIndex].choices[2];
  choiceD.textContent = questions[questionIndex].choices[3];
}

function nextQuestion2() {
  questionIndex = 0;
  const questions = [
    {
        question: "Do you think students will be friends with Hamad?",
        choices: ["a) Yes, because new student", "b) No", "c) No", "d) yes"],
        answer: "b) No"
    }
  ]
  questionTitle2.textContent = questions[questionIndex].question;
  choiceA2.textContent = questions[questionIndex].choices[0];
  choiceB2.textContent = questions[questionIndex].choices[1];
  choiceC2.textContent = questions[questionIndex].choices[2];
  choiceD2.textContent = questions[questionIndex].choices[3];
}


// after question is answered, show if correct or wrong
function checkAnswer(ans) {
questionIndex = 0;
  var questions = [
    {
        question: "In the school playground, who picked Hamad in their team?",
        choices: ["a) Khalid", "b) Faisal", "c) Hamad did not participate", "d) Nobody picked Hamad in their team"],
        answer: "d) Nobody picked Hamad in their team"
    }
  ]
  if (questions[questionIndex].answer === questions[questionIndex].choices[ans]) {
      var emoji = document.createElement("img");
      emoji.src = 'happy.png';
      emoji.alt = "Yayyy!";
      emoji.height = "200";
      emoji.width = "200";
      document.getElementById("answerCheck").appendChild(emoji);
      console.log("You took" + " " + (new Date()).getSeconds() + " seconds for the quiz") ;
      var wrong = document.getElementById("wrongAns");
      wrong.style.display = "block";
      wrong.textContent = "You are correct!";
  } else {
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
}

function checkAnswer2(ans) {
  questionIndex = 0;
  var questions = [
    {
        question: "Do you think students will be friends with Hamad?",
        choices: ["a) Yes, because new student", "b) No", "c) No", "d) yes"],
        answer: "b) No"
    }
  ]
  if (questions[questionIndex].answer === questions[questionIndex].choices[ans]) {
      var emoji = document.createElement("img");
      emoji.src = 'smiley-emoji.gif';
      emoji.alt = "Yayyy!";
      emoji.height = "200";
      emoji.width = "200";
      document.getElementById("answerCheck2").appendChild(emoji);
      console.log("You took" + " " + (new Date()).getSeconds() + " seconds for the quiz") ;
      var wrong = document.getElementById("wrongAns2");
      wrong.style.display = "block";
      wrong.textContent = "Super!";
  } else {
      var emoji = document.createElement("img");
      emoji.src = 'wrong.gif';
      emoji.alt = "Try Again";
      emoji.height = "200";
      emoji.width = "200";
      document.getElementById("answerCheck2").appendChild(emoji);
      var wrong = document.getElementById("wrongAns2");
      wrong.style.display = "block";
      wrong.textContent = "Oops! Better Luck Next Time!";
      console.log("You took" + " " + (new Date()).getSeconds() + "seconds") ;
  }

  questionIndex++;
}


function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

function chooseA2() { checkAnswer2(0); }

function chooseB2() { checkAnswer2(1); }

function chooseC2() { checkAnswer2(2); }

function chooseD2() { checkAnswer2(3); }

/**
* ADD EVENT LISTENERS
*/
startQuizBtn.addEventListener("click", nextQuestion);
startQuizBtn2.addEventListener("click", nextQuestion2);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);
choiceA2.addEventListener("click", chooseA2);
choiceB2.addEventListener("click", chooseB2);
choiceC2.addEventListener("click", chooseC2);
choiceD2.addEventListener("click", chooseD2);