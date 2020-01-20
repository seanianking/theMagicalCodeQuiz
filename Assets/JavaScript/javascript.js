//Variables
  var questionDisplay = document.getElementById("question-display");
  var timerEl = document.getElementById("timer");
  var quizContainer = document.getElementById("quiz-container");
  var scoreHeading = document.getElementById("score-heading");
  var scoreDisplay = document.getElementById("score-display");
  var submitBtn = document.getElementById("submit-btn");

  var questionIndex = 0;
  var currentQuestion = questions[questionIndex];
  var score = 0;
  var interval;
  
  //Event Listeners

  submitBtn.addEventListener("click");
