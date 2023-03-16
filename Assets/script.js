
const quizBank = document.getElementById("questionBank");
const quizContainer = document.getElementById("quizContainer");
const startButt = document.getElementById("startQuizBtn");
const resultsBox = document.getElementById("resultsContainer");
const resultBtn = document.getElementById("vieResultsBtn");
const timer = document.getElementById("timer");
const error = document.getElementById("errorMessage");

// make more later for each html id-- update should be all but never know
// All this is correct
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
console.log(quizQuestions);
// Seems correct
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

// function getElementByQuestion() {
//   let question = questionElem((question.textContent = questionElem));
// }

startButt.addEventListener("click", startQuiz);
//this function should do the following:
//Or this function should do some of the following
//  On start quiz i want startQuizBtn to display as none
//  Then I want question 1 & a timer to display
//  On clicking an answer, if correct next question, if 
//incoreect, time is subtracted from total, and user is left to answer again
//  if time finishes before all answers, error message 
//saying "time is up" will display and move to score screen
//on last question display submit button
//if finish all before time, then end message, then hide submit button, leave time displaying end time.  
//Have box to enter highscore, and new start button

function startQuiz() {
  let startScreenID = document.getElementById("quizBlock");
  startScreenID.setAttribute("class", "showNone");
  quizBank.removeAttribute("class");

//above should be correct for thew most part //
  // ask someone smarter for help my man


  //when press start squiz: Timer starts countdown
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
  //ref start time in notes

  getElementByQuestion();
}
console.log(startQuiz);
console.log(quizContainer);
