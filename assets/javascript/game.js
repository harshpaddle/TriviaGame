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

 


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}
