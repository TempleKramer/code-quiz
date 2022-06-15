var startBtn = document.querySelector("#start-button")
var questionSection = document.querySelector(".question-section")
var finalSection = document.querySelector(".result-section");
var highScoreSection = document.querySelector(".highscore-class");
var returnToStartQuizBtn = document.getElementById("#return-btn");
var clearScoreBtn = document.getElementById("#clear-high-score");
var enterScoreBtn = document.getElementById("#end-button");
var input = document.getElementById("input-box")



function titlePage() {
    var quiztitlepage = document.getElementById("quiz-start-page")
}

var time = 60;

function setTimer() {
    setInterval(function() {
        var timer = document.getElementById("timer-display");
        if (time> 0 && i < 3) {
            time = time - 1;
            timer.textContent = "Time Remaining: " + time;
        }
    }, 1000);
}

var questionOne = {
    question:
    "What is the name of the professional football team located in Houston, Texas",
    choices: ["A. Giants", "B. Texans", "C. Lions", "D. Cowboys"],
    answer: "B. Texans",
}

var questionTwo = {
    question:
    "What is the name of the toy cowboy in Toy Story",
    choices: ["A. Woody", "B. Buzz Lightyear", "C. Andy", "D. Sid"], 
    answer: "A. Woody"
}

var questionThree = {
    question: 
    "What is the capital of Texas", 
    choices: ["A. Dallas", "B. San Antonio", "C. Austin", "D. El Paso"],
    answer: "C. Austin"
}

var questionArray = [questionOne. questionTwo, questionThree];

var i=0

var quizBegin = function() {
    titlePage();
    if(i===0) {
        setTimer();
    }

    if(i===3) {
        endQuiz();
        return;
    }
}

var questionOneDiv = document.createElement("div");
  questionOneDiv.textContent = questionArray[i].question;
  questionOneDiv.className = "question-div";
  questionSection.append(questionOneDiv);

 
  for (k = 0; k < questionArray[i].choices.length; k++) {
    var choicesDiv = document.createElement("button");
    choicesDiv.textContent = questionArray[i].choices[k];
    choicesDiv.className = "button-style";
    choicesDiv.addEventListener("click", answerValidation);
    questionSection.append(choicesDiv);
  }

  var answerValidation = function (event) {
    if (i > 2) return;
  
    if (event.target.textContent === questionArray[i].answer && i < 3) {
      alert("CORRECT!");
    } else {
      alert("Incorrect, time has been subracted by 5 seconds");
      time -= 5;
    }
  
    i++;
    questionSection.innerHTML = "";
    quizBegin();
  };





// I am struggling to really figure out this code as I cannot get my start button to work. I will be submitting 
// this project again at a later date. I just wanted to get something to submit as it is already late





  startBtn.addEventListener("click", quizBegin);










