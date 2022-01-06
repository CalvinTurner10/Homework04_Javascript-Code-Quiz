var timerEl = document.querySelector("#counter");
var startBTn = document.querySelector("#start");
var scoreBtn = document.querySelector("#score");

var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".answers");

var mainEl = document.querySelector("#main");
var h2El = document.querySelector("#h2");

var instructionEl = document.querySelector("#instruction");

var result = [];
var timerCount = ""
var correct = 0

var questions = ["Commonly used data types DO NOT include:", "The condition in an if / else statement is enclosed within ____. ", "Arrays in JavaScript can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables."," A very useful tool used during development and debugging for printing content to the debugger is: "];

//answers
var questions2Ans = ["alerts", "parentheses", "all of the above", "quotes", "console.log" ];

var qnum = 0

startBTn.addEventListener("click", function()
{
  timerCount = 76
  timerfunc()
  question1()
  startBTn.remove()
  scoreBtn.remove()
  instructionEl.remove()
});

scoreBtn.addEventListener("click", function (){
  location.assign(".");

});




