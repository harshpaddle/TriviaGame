var q1 = {
  question: "Who is the first NBA player to have been voted as the unanimous MVP?",
  options: ["Micheal Jordon", "Lebron James", "Derrick Rose", "Stephen Curry"],
  answer: "Stephen Curry"
}

var q2 = {
  question: "Who became the youngest player to recieve nba mvp award?",
  options: ["Micheal Jordon", "Lebron James", "Derrick Rose", "Stephen Curry"],
  answer: "Derrick Rose"
}

var q3 = {
  question: "How old was Derrick Rose when he recieved his first mvp honors?",
  options: [22, 28, 25, 26],
  answer: 22
}

var q4 = {
  question: "Who is the tallest player inducted into the Naismith Memorial Basketball Hall of Fame?",
  options: ["Kareem Abdul-Jabbar", "Dikembe Mutombo", "Shaqtus", "Yao"],
  answer: "Yao"
}

var q5 = {
  question: "Which basketball player has the most consecutive triple doubles in nba history?",
  options: ["Micheal Jordon", "Lebron James", "Russell Westbrook", "Stephen Curry"],
  answer: "Russell Westbrook"
}

var q6 = {
  question: "Who is the only player in the history to the NBA to average above 50PPG (points per game) in a season?",
  options: ["Kareem Abdul-Jabbar", "Wilt Chamberlain", "Shaqtus", "Yao"],
  answer: "Wilt Chamberlain"
}

var q7 = {
  question: "Which nba player played the role of 'Jesus ShuttlesWorth' alongside 'Denzel Washington' in Hollywood blockbuster 'He Got Game'?",
  options: ["Kobe Bryant", "Lebron James", "Ray Allen", "Klay Thompson"],
  answer: "Ray Allen"
}

var q8 = {
  question: "Who became the first former professional athlete to be nominated and to win an Oscar in any category?",
  options: ["Magic Johnson", "Kobe Bryant", "Charles Barkley", "Micheal Jordan"],
  answer: "Kobe Bryant"
}

var q9 = {
  question: "Who's the only player to score more than 100 points in a nba game?",
  options: ["Kareem Abdul-Jabbar", "Wilt Chamberlain", "Shaqtus", "Yao"],
  answer: "Wilt Chamberlain"
}

var q10 = {
  question: "Who is my favorite nba player currently active in the league?",
  options: ["Spencer Diwidie", "Stephen Curry", "Giannis Antetokompo", "Damian Lillard"],
  answer: "Damian Lillard"

};

var qBank = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var timeRemaining = 10;
var rights = 0;
var wrongs = 0;
var gameOver2 = false;

function newGame() {
  qBank = shuffle([q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]);
  timeRemaining = 10;
  rights = 0;
  wrongs = 0;
  $(".time").text(timeRemaining);
  $(".corrects").text(rights);
  $(".wrongs").text(wrongs);
  if (!gameOver2) {
    setInterval(timeLeft, 1000);
    clearInterval(timeRemaining);
  }
  $(".new-game").hide();
  gameOver2 = false;
  nextQuestion(qBank);
}

function timeLeft() {
  timeRemaining--;
  if (timeRemaining === 0) {
    timeRemaining = 10;
    wrongs++;
    if (qBank.length > 0) {
      nextQuestion(qBank);
    }
  }
  if (!gameOver2) {
    $(".time").text(timeRemaining);
  }
  $(".corrects").text(rights);
  $(".wrongs").text(wrongs);
}


function nextQuestion(array) {
  if (array.length === 0) {
    gameOver();
    // return false;
  }
  var q = array.pop();
  $("#q").text(q.question);
  var options = shuffle(q.options);
  for (var i = 0; i < q.options.length; i++) {
    var num = i + 1;
    var option = options[i];
    $(".op" + num).text(option);
    $(".op" + num).attr("data-answer", q.answer);
  }
}

function gameOver() {
  if (qBank.length === 0) {
    gameOver2 = true;
    $(".heading").text("Keep shooting")
    if (rights > wrongs) {
      $("#q").text("Well done, you've got a good fg%")
    }
    if (wrongs > rights) {
      $("#q").text("Damn son, you shot bricks.. Click on the new game to keep shooting")
    }
    alert("---Game Over--- Fg%: " + ((rights/9)*100));
    $(".time").html("00:00");
    $(".new-game").show();
    // clearTimeout(timeRemaining);
  }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}


$(".new-game").on("click", newGame);

if (gameOver2 === false) {
  $(".op1").on("click", function () {
    if ($(".op1").text() === ($(".op1").attr("data-answer"))) {
      rights++;
      $(".heading").text("Correct")
      nextQuestion(qBank);
    } else if ($(".op1").text() !== ($(".op1").attr("data-answer"))) {
      wrongs++;
      $(".heading").text("False")
      nextQuestion(qBank);
    };
    timeRemaining = 10;
  })

  $(".op2").on("click", function () {
    if ($(".op2").text() === ($(".op2").attr("data-answer"))) {
      rights++;
      $(".heading").text("Correct")
      nextQuestion(qBank);
    } else if ($(".op2").text() !== ($(".op2").attr("data-answer"))) {
      wrongs++;
      $(".heading").text("False")
      nextQuestion(qBank);
    };
    timeRemaining = 10;
  })

  $(".op3").on("click", function () {
    if ($(".op3").text() === ($(".op3").attr("data-answer"))) {
      rights++;
      $(".heading").text("Correct")
      nextQuestion(qBank);
    } else if ($(".op3").text() !== ($(".op3").attr("data-answer"))) {
      wrongs++;
      $(".heading").text("False")
      nextQuestion(qBank);
    };
    timeRemaining = 10;
  })

  $(".op4").on("click", function () {
    if ($(".op4").text() === ($(".op4").attr("data-answer"))) {
      rights++;
      $(".heading").text("Correct")
      nextQuestion(qBank);
    } else if ($(".op4").text() !== ($(".op4").attr("data-answer"))) {
      wrongs++;
      $(".heading").text("False")
      nextQuestion(qBank);
    };
    timeRemaining = 10;
  })
}


// for (var i = 1; i < 5; i++) {
//   $(".op" + i).on("click", function () {
//     console.log(i)
//     console.log($(".op" + i).attr("data-answer"))
//     console.log($(".op" + i).text());
//     if ($(".op" + i).text() === ($(".op" + i).attr("data-answer"))) {
//       rights++;
//       nextQuestion(qBank);
//     } 

//     if ($(".op" + i).text() !== ($(".op" + i).attr("data-answer"))) {
//       wrongs++;
//       nextQuestion(qBank);
//     };
//     timeRemaining = 15;
//   })
// }


// function answerChecker(buton) {
//   if $(buton.text() === $(buton).attr("data-answer")) {
//     rights++;

//   } else if $(buton.text() !== $(button).attr("datat-answer")) {
//     wrongs++;
//   }
//   nextQuestion(qBank);
// }

// $(".op1").on("click", answerChecker($(".op1")))
// $(".op2").on("click", answerChecker($(".op2")))
// $(".op3").on("click", answerChecker($(".op3")))
// $(".op4").on("click", answerChecker($(".op4")))