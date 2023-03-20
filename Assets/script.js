const quizContainer = document.getElementById("quizContainer");
const startButt = document.getElementById("startQuizBtn");
const submit = document.getElementById("submitBtn");
const resultsBox = document.getElementById("resultsContainer");
const resultBtn = document.getElementById("viewResultsBtn");
const timerElem = document.getElementById("timer");
const error = document.getElementById("errorMessage");
const scoreBox = document.getElementById("scoreBox");

let timeleft = 75;
let currentQuestion = 0;
let score = 0;
let timerInt;

// Define an array of quiz questions, options, and correct answers
let quizQuestions = [
  {
    question: "What is JavaScript primarily used for?",
    options: [
      "Creating dynamic websites",
      "Designing user interfaces",
      "Building databases",
      "Writing server-side code",
    ],
    answer: "Creating dynamic websites",
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["Integer", "Float", "Boolean", "Character"],
    answer: "Boolean",
  },
  {
    question: 'What is the result of the following expression: "2" + 2?',
    options: ['"4"', '"22"', "4", "0"],
    answer: '"22"',
  },
  {
    question: 'What does the keyword "this" refer to in JavaScript?',
    options: [
      "The current function",
      "The global object",
      "The object that the function is a method of",
      "The object that the function was called on",
    ],
    answer: "The object that the function was called on",
  },
  {
    question:
      "Which of the following statements is true about JavaScript functions? They:",
    options: [
      "Must always return a value",
      'Can only be declared using the "function" keyword',
      "Can be passed as arguments to other functions",
      "Cannot access variables declared outside of the function",
    ],
    answer: "Can be passed as arguments to other functions",
  },
  {
    question:
      "Which of the following methods can be used to add an element to the end of an array?",
    options: ["push()", "unshift()", "pop()", "shift()"],
    answer: "push()",
  },
];


// Function to show a question at the given index
function showQuestion(index) {
  const questions = document.querySelectorAll(".question");
  const options = document.querySelectorAll(".options");

  for (let i = 0; i < questions.length; i++) {
    questions[i].classList.add("showNone");
    options[i].classList.add("showNone");
  }

  questions[index].classList.remove("showNone");
  options[index].classList.remove("showNone");
}
// Function to move to the next question or end the game
function moveToNextQuestion() {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    endGame();
}
}
// Function to end the game, display the score, and clean up the UI
function endGame() {
    const scoreElem = document.createElement("h2");
    scoreElem.textContent = `Your score is: ${timeleft} seconds`;
    while (quizContainer.firstChild) {
      quizContainer.removeChild(quizContainer.firstChild);
    }
    quizContainer.insertBefore(scoreElem, timerElem.nextSibling);
    timerElem.textContent = "Time's Up!"
    timeleft = -1;
  }

// Create the quiz UI elements for each question
quizQuestions.forEach(function (question, index) {
  const questionElem = document.createElement("h2"); //Creates h2 and div for question and answer
  questionElem.textContent =
    "Question " + (index + 1) + " : " + question.question; //index +1 calls each item in the quizQuestions array to display them with a 1-5 order

  questionElem.classList.add("question");

  const optionsElem = document.createElement("div");
  optionsElem.classList.add("options");
  question.options.forEach(function (option) {
    const optionElem = document.createElement("button");
    optionElem.addEventListener("click", function () {
      if (option === question.answer) {
        moveToNextQuestion();
      } else {
        timeleft -= 5;
      }
    });
    optionElem.textContent = option;
    optionsElem.appendChild(optionElem);
  });

  quizContainer.appendChild(questionElem);
  quizContainer.appendChild(optionsElem);
});

// Add event listener to start the quiz when the start button is clicked
startButt.addEventListener("click", startQuiz);

// Function to start the quiz, show the first question, and start the time
function startQuiz() {
  quizContainer.classList.remove("showNone");
  startButt.classList.add("showNone"); // hide start button
  submit.classList.remove("showNone"); // show submit button
  timerElem.classList.remove("showNone"); //Shows timer
  error.classList.add("showNone"); //hides "Time is Up"

  showQuestion(currentQuestion);

  timerInt = setInterval(timer, 1000);
  function timer() {
    let timerSpan = document.getElementById("timer");
    timeleft = timeleft - 1;
    if (timeleft < 0) {
      timeleft = 0;
    }
    timerSpan.textContent = timeleft + " seconds remaining";
    console.log(timeleft);
    quizContainer.insertBefore(timerElem, quizContainer.firstChild);
    if(timeleft <= 0) {
      clearInterval(timerInt);
      endGame();
      timerSpan.textContent = "Time's up!";
    }
    
  }
  quizContainer.removeChild(error); // hide error message
}

// Function to create and display the score board on page load
document.body.onload = addElement;

function addElement() {
  //creates a div element then adds before main, which is scoreAbove
  const scoreBoard = document.createElement("div");
  scoreBoard.setAttribute("id", "scoreBox");

  const scoreAbove = document.getElementById("main");
  document.body.insertBefore(scoreBoard, scoreAbove); //insert before puts the scores above the quiz

  const scoreHead = document.createElement("h2"); //Creates heading
  scoreHead.textContent = "Score Board";
  scoreBoard.appendChild(scoreHead);

  const scoreForm = document.createElement("form"); //adds form
  scoreForm.setAttribute("id", "scoreForm"); // sets the id
  scoreBoard.appendChild(scoreForm);

  const nameLab = document.createElement("label");
  nameLab.setAttribute("id", "text");
  nameLab.textContent = "Name: ";
  scoreBoard.appendChild(nameLab);

  const nameInp = document.createElement("input");
  nameInp.setAttribute("type", "text");
  nameInp.setAttribute("name", "name");
  scoreBoard.appendChild(nameInp);

  const scoreLab = document.createElement("label");
  scoreLab.setAttribute("id", "text");
  scoreLab.textContent = "Score: ";
  scoreBoard.appendChild(scoreLab);

  const scoreInp = document.createElement("input");
  scoreInp.setAttribute("type", "text");
  scoreInp.setAttribute("type", "number");
  scoreInp.setAttribute("id", "score");
  scoreInp.setAttribute("name", "score");
  scoreBoard.appendChild(scoreInp);

  const scoreBtn = document.createElement("button");
  scoreBtn.setAttribute("type", "submit");
  scoreBtn.textContent = "Enter Score";
  scoreBoard.appendChild(scoreBtn);
  scoreBtn.addEventListener("click", submitScore);
  // Function to submit the score to the score board
  function submitScore(event) {
    event.preventDefault();

    const name = nameInp.value;
    const score = scoreInp.value;

    if ((name === "" || score, "")) {
      alert("Please enter both a Name and Score");
      return;
    }

    scores.push({ name, score });
    localStorage.setItem("scores", JSON.stringify(scores));
    displayScores();

    console.log("Name:", name, "Score:", score);

    nameInp.value = "";
    scoreInp.value = "";
  }
  const scores = JSON.parse(localStorage.getItem("scores")) || [];

  const scoreListVar = document.createElement("div");
  scoreListVar.setAttribute("id", "scoreList");
  scoreBoard.appendChild(scoreListVar);

  const scoreListHead = document.createElement("h3");
  scoreListHead.textContent = "scores: ";
  scoreListVar.appendChild(scoreListHead);

  const scoreList = document.createElement("ul");
  scoreListVar.appendChild(scoreList);

  function displayScores() {
    const scoreList = document.createElement("ul");
    scoreListVar.appendChild(scoreList);
    scoreList.innerHTML = "";
    scores.forEach(({name, score}) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${name}: ${score}`
      scoreList.appendChild(listItem);
    });
  }
  displayScores();
};
// Function to load and display scores from local storage

function loadScores() {
  const storedScores = localStorage.getItem("scores");
  if (storedScores) {
    const scores = JSON.parse(storedScores);
    scores.forEach((score) => {
      const li = document.createElement("li");
      li.textContent = `${score.name}: ${score.score}`;
    });
  }
}
loadScores();

console.log(score.scoreForm);


