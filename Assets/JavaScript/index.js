//some Questions gathered from or inspired by from the w3schools JavaScript Quiz at https://www.w3schools.com/quiztest/quiztest.asp?qtest=JavaScript

let questions = [
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
    title: "Which operator is used to assign a value to a letiable?",
    choices: ["*","=","%","+"],
    answer: "="
  }
  
  ];
  //Checks local storage for existing leaderboard
if (localStorage.getItem('leaderboard') != null) {
  leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
} else {
let leaderboard = [];
}

//Dom elements
let qHolderEl = $('#question-holder');
let startEl = $('#start');
let counterEl = $('#counterEl');
let navEl = $('#nav-btns');
let scoreEl = $('#scoreEl');
let viewScoresEl = $('#viewScores');
let scoreSpaceEl = $('#scoreSpace');
let counter = (questions.length) * 15
let score = 0;
let currentPage = 0;
let totalPages = questions.length;
let quizFinished = false;

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

//Check for correct answer
qHolderEl.on('click','.answer', function() {
  // Create a p tag for correct/incorrect message
  var result = $('<p class="text-center message"></p>');
  // If answer chosen is correct
  if (($(event.target).attr('data-selection') === questions[currentPage].answer)) {
      result.addClass('text-success');
      result.text('Correct!');
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
      result.text('Incorrect!');
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