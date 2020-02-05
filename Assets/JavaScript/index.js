//some Questions gathered from or inspired by from the w3schools JavaScript Quiz at https://www.w3schools.com/quiztest/quiztest.asp?qtest=JavaScript

var questions = [
    {
      title: "Inside which HTML element do you put the JavaScript",
      choices: ["<script>","<br>","h1","javascript"],
      answer: "<script>"
  },
  {
    title: "How would you write 'Hello World' in an alert box",
    choices: ["alertBox('Hello World')","prompt('Hello World')","msg('Hello World')","alert('Hello World')"],
    answer: "alert('Hello World')"
  },
  {
    title: "Which symbol do you use to put a comment in JavaScript",
    choices: ["||","&&","//","{}"],
    answer: "//"
  },
  {
    title: "What syntax would you use to call myFunction?",
    choices: ["myFunction<>","myFunction{}","myFunction[]","myFunction()"],
    answer: "myFunction()"
  },
  {
    title: "Which operator is used to assign a value to a variable?",
    choices: ["*","=","%","+"],
    answer: "="
  }
  
  ];
  //Checks local storage for existing leaderboard
if (localStorage.getItem('leaderboard') != null) {
  leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
} else {
var leaderboard = [];
}

//Dom elements
var qHolderEl = $('#question-holder');
var startEl = $('#start');
var counterEl = $('#counterEl');
var navEl = $('#nav-btns');
var scoreEl = $('#scoreEl');
var viewScoresEl = $('#viewScores');
var scoreSpaceEl = $('#scoreSpace');
var counter = (questions.length) * 15
var score = 0;
var currentPage = 0;
var totalPages = questions.length;
var quizFinished = false;

//Navigation buttons
//Start button
startEl.click(function() {
  timer();
  startQuiz();
});

//View Scores button
qHolderEl.on('click','.viewScores', function(){
  renderScores();
});

//Back button
navEl.on('click', '.back', function() {
  scoreSpaceEl.empty();
  navEl.empty();
  startEl.removeClass('hide');
  viewScoresEl.removeClass('hide');
});

//Restart button
navEl.on('click', '.restart', function () {
  currentPage = 0;
  counter = (questions.length) * 15;
  quizFinished = false;
  scoreSpaceEl.empty();
  navEl.empty();
  timer();
  startQuiz();
});