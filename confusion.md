## Timer Attempts

function timerOn() {
    let secsLeft = (document.getElementById("timer").innerHTML = seconds + "s");
    timer.setInterval(() => {
      Attribute("class", "showNone");
    }, interval);
  }
  if (timeleft > 0) {
    clearInterval();
    document.getElementById(secsLeft).innerHTML = "";
  } else {
    document.getElementById(errorMessage).innerHTML = "Time is up!";
  }


  let timerFunc = setInterval(function function1({
  let secLeft = document.getElementById("timer").innerHTML = timeleft

}
)
}

const quizContainer = document.getElementById("quizContainer");
const startButt = document.getElementById("startQuizBtn");
const resultsBox = document.getElementById("resultsContainer");
const resultBtn = document.getElementById("viewResultsBtn");
const timer = document.getElementById("timer");
const error = document.getElementById("errorMessage");

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

quizQuestions.forEach(function (question, index) {
  const questionElem = document.createElement("h2");
  questionElem.textContent =
    "Question " + (index + 1) + " : " + question.question;

  const optionsElem = document.createElement("div");
  optionsElem.classList.add("options");

  question.options.forEach(function (option) {
    const optionElem = document.createElement("button");
    optionElem.textContent = option;
    optionsElem.appendChild(optionElem);
  });
  quizContainer.appendChild(questionElem);
  quizContainer.appendChild(optionsElem);
});

function getElementByQuestion() {
  let question = questionElem((question.textContent = questionElem));
}

let timeleft = 75;

function startQuiz() {
  startButt.setAttribute("class", "showNone"); // hide start button
  const quizQuestionsElem = document.getElementById("quizContainer");
  quizQuestionsElem.classList.remove("showNone"); // show quiz questions
  timer.textContent = timeleft; // display timer
  quizQuestionsElem.insertBefore(timer, quizQuestionsElem.childNodes[0]); // add timer before questions
  quizQuestionsElem.removeChild(error); // hide error message
  getElementByQuestion();
}

startButt.addEventListener("click", startQuiz);
function startQuiz() {
  startButt.classList.add("showNone"); // hide start button
  submit.classList.remove("showNone"); // show submit button
  timer.classList.remove("showNone"); // show timer
  const quizQuestionElem = document.querySelectorAll(".question")[0]; // get first question
  quizQuestionElem.classList.remove("showNone"); // show first question
  timer.textContent = timeleft; // display timer

  // hide rest of the questions
  const restQuestions = document.querySelectorAll(".question");
  for (let i = 1; i < restQuestions.length; i++) {
    restQuestions[i].classList.add("showNone");
  }

  //above should be correct for the most part //

  //when press start quiz: Timer starts countdown

  //ref start time in notes
  quizContainer.insertBefore(timer, quizContainer.childNodes[0]); // add timer before questions
  error.classList.add("showNone"); // hide error message
}
