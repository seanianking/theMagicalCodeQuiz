// var wordsPerMillisecond = prompt("How many words per millisecond would you like to read?");

  
  var mainEl = document.getElementById("main");
  var readEl = document.getElementById("read");
  var timerEl = document.getElementById("countdown");
  var bodyEl = document.createElement("div");
  
  var i = 0;
  
  
  
  function displayQuestions() {
    mainEl.append(bodyEl);
  
    var poemInterval = setInterval(function() {
      if (i >= questions.length){
        // alert("Your Score");
      }
      {
        mainEl.textContent = questions[i].title;
        i++;
      }
  
    }, 1000);
  }
   displayQuestions()
  