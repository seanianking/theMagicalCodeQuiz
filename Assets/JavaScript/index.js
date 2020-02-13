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
var scoreView = $('#showScores');
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
qHolderEl.on('click','.showScores', function(){
  showScores();
});

//Back button
navEl.on('click', '.back', function() {
  scoreSpaceEl.empty();
  navEl.empty();
  startEl.removeClass('hide');
  scoreView.removeClass('hide');
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

//Check for correct answer
qHolderEl.on('click','.answer', function() {
  // Create a p tag for correct/incorrect message
  var result = $('<p class="text-center message"></p>');

  // If answer chosen is correct
  if (($(event.target).attr('data-selection') === questions[currentPage].answer)) {
      result.addClass('text-success');
      result.text('Congrats, you did it!');
      qHolderEl.append(result);
      //Disable button spamming
      $(':button').prop('disabled', true);
      //wait 2.2 seconds, next question
      setTimeout(function() {
      score +=10;
      currentPage ++
      renderQuestions();
      //Reenable buttons
      $(':button').prop('disabled', false);
      },1200);

  //If answer chosen is incorrect
  } if (($(event.target).attr('data-selection') !== questions[currentPage].answer)) {
      result.addClass('text-danger');
      result.text('You done messed up!');
      qHolderEl.append(result);
      //Disable button spamming
      $(':button').prop('disabled', true);
      counter -= 5;
      //Animation for subtracting time
      animateSubtraction(counterEl);
      //wait 2.2 seconds, next question
      setTimeout(function() {
      currentPage ++
      renderQuestions();
      //Re-enable buttons
      $(':button').prop('disabled', false);
      },1200);
}
});

//Timer
function timer() {
  counterEl.text(`Time: ${counter}`);
  var timer = setInterval(function() {
      counter --
      counterEl.text(`Time: ${counter}`);
      if (counter <= 0) {
          //If time runs out game over!
          clearInterval(timer);
              qHolderEl.empty();
              var gameOver = $('<div class="text-center results"></div>');
              gameOver.text('You Just Lost');
              qHolderEl.append(gameOver);
              return;
          //If quiz finishes, stop timer
      } if (quizFinished === true) {
          clearInterval(timer);
          return;
      }
  }, 1000);
};

//Start quiz
function startQuiz () {
  //Hide start and score buttons
  startEl.addClass('hide');
  scoreView.addClass('hide');

  renderQuestions();
};

//Render  questions
function renderQuestions () {
  qHolderEl.empty();
  //If questions are done, dont try to render nonexistent questions
  scoreEl.text(`Score: ${score}`);
  if (currentPage >= totalPages) {
      endQuiz();
      return;
  }
  //Makes a title and all the questions, appends to DOM
  var createQuestion = $('<div class="title bg-primary pt-1 pb-1"></div>');
  createQuestion.text(questions[currentPage].title);
  qHolderEl.append(createQuestion);
  for (var i = 0; i < questions[currentPage].choices.length; i++) {
      var createAnswer = $('<button type="button" class="btn btn-block btn-outline-info answer"></button>');
      createAnswer.text(`${questions[currentPage].choices[i]}`);
      createAnswer.attr("data-selection", `${questions[currentPage].choices[i]}`);
      qHolderEl.append(createAnswer);
  }
};

//Animation for subtracting time
function animateSubtraction (x) {
  x.addClass('text-danger');
  x.text(`Time: ${counter} -5`);
      setTimeout(function () {
          x.removeClass('text-danger');
          x.text(`Time: ${counter}`);
      },800);
};

//End quiz
function endQuiz() {
  quizFinished = true;
  var quizResults = $('<div class="text-center results"></div>');
  //Final Score Calculation
  var finalScore = +score + +counter;
  quizResults.text(`Your Score is ${finalScore}`);
  qHolderEl.append(quizResults);
  //Create input for name
  var inputLabel = $('<p class="inputLabel></p>');
  inputLabel.text('Enter Name')
  var createInput = $('<input type="text" class="inputbtn"><');
  qHolderEl.append(inputLabel);
  qHolderEl.append(createInput);
};

//Render scoreboard
function showScores() {
  //Hide start button if not already hidden
  if (startEl.hasClass('hide') !== true) {
      startEl.addClass('hide');
  //Hide scoreboard button if not already hidden
  } if (showScoresEl.hasClass('hide') !== true) {
      showScoresEl.addClass('hide');
  //Place restart button if quiz is finished
  } if ( quizFinished === true) {
      qHolderEl.empty();
      var restartBtn = $('<button type="button" class="btn btn-lg btn-secondary restart" id="restart">');
      restartBtn.text('Restart');
      navEl.append(restartBtn);
  } else {
  //Place back button
      var backBtn = $('<button type="button" class="btn btn-lg btn-secondary back" id="back">');
      backBtn.text('Back');
      navEl.append(backBtn);
  }
  //Sorts leaderboard by highest score
  leaderboard.sort(function(a, b){
      return b.score - a.score;
  });
  //leaderboard creation
  var scoreTitle = $('<div class="scoreEl text-center mb-2 message"></div>');
  scoreTitle.text('ScoreBoard')
  scoreSpaceEl.append(scoreTitle);
  //For loop for creating leaderboards
  for (var i = 0; i < leaderboard.length; i++) {
      var scoreEntry = $('<div class="scoreEl text-center"></div>');
      scoreEntry.text(`${leaderboard[i].name}: ${leaderboard[i].score}`);
      scoreSpaceEl.append(scoreEntry);
  }
};

//When enter is pressed on name input
qHolderEl.on('keyup','input', function(e){
  if (e.which === 13) {
      e.preventDefault();
      var finalScore = +counter + +score;
      var userName = $(this).val();
      //store name and scores inside object
      var  userData = {'name':`${userName}`,'score':`${finalScore}`};
      leaderboard.push(userData);
      //Object to local storage
      localStorage.setItem('leaderboard',JSON.stringify(leaderboard));
      console.log(leaderboard);
      showScores();
      $(this).val('');
      $(this).prop('disabled', true);

  }
  return;
});