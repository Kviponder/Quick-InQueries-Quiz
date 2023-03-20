const quizContainer = document.getElementById("quizContainer");
const startButt = document.getElementById("startQuizBtn");
const submit = document.getElementById("submitBtn");
const resultsBox = document.getElementById("resultsContainer");
const resultBtn = document.getElementById("vieResultsBtn");
const timerElem = document.getElementById("timer");
const error = document.getElementById("errorMessage");

let timeleft = 75;
let currentQuestion = 0;
let score = 0;
let timerInt;

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
      "Which of the following statements is true about JavaScript functions?",
    options: [
      "They must always return a value",
      'They can only be declared using the "function" keyword',
      "They can be passed as arguments to other functions",
      "They cannot access variables declared outside of the function",
    ],
    answer: "They can be passed as arguments to other functions",
  },
  {
    question:
      "Which of the following methods can be used to add an element to the end of an array?",
    options: ["push()", "unshift()", "pop()", "shift()"],
    answer: "push()",
  },
];

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

function moveToNextQuestion() {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    clearInterval(timerInt);
    const scoreElem = document.createElement("h2");
    scoreElem.textContent = `Your score is: ${timeleft} seconds`;
    while (quizContainer.firstChild) {
      quizContainer.removeChild(quizContainer.firstChild);
    }
    quizContainer.appendChild(scoreElem);
  }
}

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

startButt.addEventListener("click", startQuiz);

function startQuiz() {
  quizContainer.classList.remove("showNone");
  startButt.classList.add("showNone"); // hide start button
  submit.classList.remove("showNone"); // show submit button
  timerElem.classList.remove("showNone"); //Shows timer
  error.classList.add("showNone") //hides "Time is Up"

  showQuestion(currentQuestion);

  timerInt = setInterval(timer, 1000);
  function timer() {
    let timerSpan = document.getElementById("timer");
    timeleft = timeleft - 1;
    if (timeleft <= 0) {
      clearInterval(timerInt);
      return;
      timerSpan.textContent = "Time's up!";
      return;
    }
    timerSpan.textContent = timeleft + " seconds remaining";
    console.log(timeleft);
    quizContainer.insertBefore(timerElem, quizContainer.firstChild);
  }
  quizQuestionElem.insertBefore(timerElem, quizQuestionElem.childNodes[0]); // add timer before questions
  quizContainer.removeChild(error); // hide error message
}
