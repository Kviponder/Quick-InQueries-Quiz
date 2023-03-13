const quizContainer = document.getElementById('quizContainer')

let quizQuestions = [
    {
        question: 'What is JavaScript primarily used for?',
        options:['Creating dynamic websites', 'Designing user interfaces', 'Building databases', 'Writing server-side code'],
        answer: 'Creating dynamic websites',
    },
    {
        question: 'Which of the following is a JavaScript data type?',
        options:['Integer', 'Float', 'Boolean', 'Character'],
        answer: 'Boolean',
    },
    {
        question: 'What is the result of the following expression: "2" + 2?',
        options:['"4"', '"22"', '4', '0',],
        answer: '"22"',
    },
    {
        question: 'What does the keyword "this" refer to in JavaScript?',
        options:['The current function', 'The global object', 'The object that the function is a method of', 'The object that the function was called on',],
        answer: 'The object that the function was called on',
    },
    {
        question: 'WWhich of the following statements is true about JavaScript functions?',
        options:['They must always return a value', 'They can only be declared using the "function" keyword', 'They can be passed as arguments to other functions', 'They cannot access variables declared outside of the function',],
        answer: 'They can be passed as arguments to other functions',
    },
    {
        question: 'Which of the following methods can be used to add an element to the end of an array?',
        options:['push()', 'unshift()', 'pop()', 'shift()',],
        answer: 'push()',
    }
]



/*  Consider below when you start building the timer, this example is for a timer that ends after the selected items are complete or after 15 minutes maybe itll help.    
Ref below:
            https://codepen.io/adammatz/pen/bwGqKr


function delayedAlert() {
    timeoutID = window.setTimeout(slowAlert, 1000);
    }
  
  function slowAlert() {
      var x;
      if (alert("Your time is up! Please press okay to submit your quiz into the administrator!") == true) {
          x = alert("");
      } else {
          x = alert("Please go to the front desk and wait for further instructions. Thank you!");
      }
      document.getElementById("demo").innerHTML = x;
  }
  

  this ref could probably be all you need :
        https://codepen.io/adammatz/pen/bwGqKr */
