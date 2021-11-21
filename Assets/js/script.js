var quizStatus = true
var questionNumber = 0;
var answerNumber = 0;
var score = 0;
var highScore = 50;
var finalAnswerCheck = 0
var checkTimes = 1
var viewHighScoresBtnEl = document.getElementById('view-high-scores');
var startQuizßtnEl = document.getElementById('start-quiz');
var answer1BtnEl = document.getElementById('answer');
var answer2BtnEl = document.getElementById(' answer');
var answer3BtnEl = document.getElementById('answer3');
var answer4BtnEl = document.getElementById('answer4');
var submitScoreEl = document.getElementById('submitScore');
var questionsEl = document.getElementById(' questions');
var mainDivEl = document.getElementById('mainDiv');
var htmlTimeLeft = document.getElementById('timeLeft');
var answerCorrectWrong = docuntent.getElementById('answerCorrectwrong');
var questionDisplayEl = document.createElement("questionDisplay");
var finalScoreDisplayEl = document.createElement("finalScoreDisplay");
var enterInitialsEl = document.createElement("enterInitials");
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea");
var button1234 = document.createElement("button");
var timeLeft = 60;

var questionsObject = {


    correct: {
        0: "Commonly used datatypes DO NOT include?",
        1: "The condition statement if/else is enclosed with the following:",
        2: "Arrays can be used to store the following",
        3: "A very useful tool to debug arrays is:",
        4: "Strings must be enclosed with:"
    }

},
var answers0bject = {
    answers: {
        0 : {
            0: "Strings",
            1: "Boolean",
            2: "Alerts",
            3: "Numbers"},
        1: {
            0: "Parentheses",
            1: "Curly Brackets",
            2: "Quotes",
            3: "Square Brackets"},
        2: {
            0: "Javascript",
            1: "Terminal/bash",
            2: "For loops",
            3: "Console. log"},
        3: {
            0: "Commas",
            1: "Curly brackets",
            2: "Quotes",
            3: "Parentheses"},
        4: {
            0: "Number of strings",
            1: "Other arrays",
            2: "Booleans",
            3: "All of the above"},
    }
};