const hello = "Hello my name is ";
let name = "Kai ";
let age = "21.  ";
let pet = "Bearded Dragon ";
alert(hello + name + "and I am " + age + "I have a " + pet);

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
