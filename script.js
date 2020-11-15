// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, chA, chB, correct = 0;

var questions = [
  {
      question: "JavaScript is NOT one of the three fundamental programming languages of the modern web?",
      a: "True",
      b: "False",
      answer: "B"
    },
  {
      question: "Alerts, prompts, and confirms create a link in the browser when run.",
      a: "True",
      b: "False",
      answer: "B"
    },
  {
      question: "For loops can be used to run repeated blocks of code over a set period.",
      a: "True",
      b: "False",
      answer: "A"
    },
  {
      question: "console.log displays discreetly to the debugger.",
      a: "False",
      b: "True",
      answer: "B"
    }
  ];
  
function getElementById(x){
  return document.getElementById(x);
}
// render question on page
function renderQuestion(){
  test = getElementById("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2> "+correct+" of "+questions.length+" questions correct</h2>";
    getElementById("test_status").innerHTML = "Quiz completed";
    // resets the variable so we can restart the test
    pos = 0;
    correct = 0;
    // after test is done, it stops the render function
    return false;
  }
  getElementById("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  // display the question
  test.innerHTML = "<h3>"+question+"</h3>";
  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // loop through the array
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // if question correct
  if(choice == questions[pos].answer){
    //value goes up
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // renderQuestion to get next question
  renderQuestion();
}
// event listener gets renderQuestion on page
window.addEventListener("load", renderQuestion);


//timer
document.addEventListener('DOMContentLoaded', () => {
  const timeleftDisplay = document.querySelector('#time-left')
  const startBtn = document.querySelector('#start-button')
  let timeLeft = 10
  
  function countDown(){
    setInterval(function(){
      if(timeLeft <= 0 ) {
        clearInterval(timeLeft = 0)
      }
      timeLeftDisplay.innerHTML = timeleft
      timeLeft -=1
    }, 1000)
    }
    startBtn.addEventListener('click',countDown)
})