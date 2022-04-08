// user clicks button to start quiz
var points = function(){
    totalPoints = totalPoints + 10;
    
  }
  
  //timer function
  var timerEl = document.querySelector(".timer");
  var startEl = document.getElementById("start-btn").addEventListener("click",countdown);
  
  function countdown(){
    var timeLeft = 75;
    
    var timeInterval = setInterval(function(){
      timeLeft--;
      timerEl.textContent = "Time: " +timeLeft;
      
      if (timeLeft === 0) {
        clearInterval(timeInerval);
        sendMessage();
      }
    }, 1000);
  }
  
  function sendMessage(){
    alert("Time's up!");
  }

  