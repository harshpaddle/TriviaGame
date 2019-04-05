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

var qBank = [q1, q2, q3];
var timeRemaining = 15;
var rights = 0;
var wrongs = 0;

// $(".new-game").on("click", newGame);

function newGame() {
  qBank = [q1, q2, q3];
  timeRemaining = 15;
  rights = 0;
  wrongs = 0;
  $(".time").text(timeRemaining);
  $(".corrects").text(rights);
  $(".wrongs").text(wrongs);
  setInterval(timeLeft, 1000)
  nextQuestion(qBank);
}

function timeLeft() {
  timeRemaining--;
  if (timeRemaining === 0) {
    timeRemaining = 15;
    wrongs++;
    if (qBank.length > 0) {
      nextQuestion(qBank);
    }
  }
  $(".time").text(timeRemaining);
  $(".time").text(timeRemaining);
  $(".corrects").text(rights);
  $(".wrongs").text(wrongs);
}





function nextQuestion(array) {
  if (array.length === 0) {
    gameOver();
    return false;
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
  if (rights > wrongs) {
    $("#q").text("Well done, you got a good fg%")
  }
  if (wrongs > rights) {
    $("#q").text("Damn son, you shot bricks.. Click on the new game to try again")
  }
  alert("Game Over");
  clearInterval(timeRemaining)
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}


$(".new-game").on("click", newGame);

// for (var i = 1; i < 5; i++) {
//   $(".op" + i).on("click", function () {
//     console.log($(this));
//     console.log($(".op" + i).attr("data-answer"))
//     console.log($(".op" + i).text());
//     if ((".op" + i).text === ($(".op" + i).attr("data-answer"))) {
//       rights++;
//       nextQuestion(qBank);
//     } 
    
//     if ((".op" + i).text !== ($(".op" + i).attr("data-answer"))) {
//       wrongs++;
//       nextQuestion(qBank);
//     };
//     timeRemaining = 15;
//   })
// }

$(".op1").on("click", function () {
  console.log($(this));
  console.log($(".op1").attr("data-answer"))
  console.log($(".op1").text());
  if ((".op1").text === ($(".op1").attr("data-answer"))) {
    rights++;
    nextQuestion(qBank);
  }

  if ((".op1").text !== ($(".op1").attr("data-answer"))) {
    wrongs++;
    nextQuestion(qBank);
  };
  timeRemaining = 15;
})

$(".op2").on("click", function () {
  console.log($(this));
  console.log($(".op2").attr("data-answer"))
  console.log($(".op2").text());
  if ((".op2").text === ($(".op2").attr("data-answer"))) {
    rights++;
    nextQuestion(qBank);
  }

  if ((".op2").text !== ($(".op2").attr("data-answer"))) {
    wrongs++;
    nextQuestion(qBank);
  };
  timeRemaining = 15;
})

$(".op3").on("click", function () {
  console.log($(this));
  console.log($(".op3").attr("data-answer"))
  console.log($(".op3").text());
  if ((".op3").text === ($(".op3").attr("data-answer"))) {
    rights++;
    nextQuestion(qBank);
  }

  if ((".op3").text !== ($(".op3").attr("data-answer"))) {
    wrongs++;
    nextQuestion(qBank);
  };
  timeRemaining = 15;
})

$(".op4").on("click", function () {
  console.log($(this));
  console.log($(".op4").attr("data-answer"))
  console.log($(".op4").text());
  if ((".op4").text === ($(".op4").attr("data-answer"))) {
    rights++;
    nextQuestion(qBank);
  }

  if ((".op4").text !== ($(".op4").attr("data-answer"))) {
    wrongs++;
    nextQuestion(qBank);
  };
  timeRemaining = 15;
})