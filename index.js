//the function to play a single round
function playRound() {
  //user makes a choice
  function userPlay() {
    let choice = prompt("Make a choice (Rock, Paper, Scissor): ");
    return choice.toLowerCase();
  }
  //computer makes a choice
  function computerPlay() {
    let array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * 3)];
  }
  //initialize necessary variables
  let result;
  let winner;
  let playerSelection = userPlay();
  let computerSelection = computerPlay();
  //compare the choices
  if (playerSelection === "rock" && computerSelection === "paper") {
    result = "You chose Rock, Computer chose Paper. You Lose. Paper beats Rock";
    winner = "comp";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result =
      "You chose Rock, Computer chose Scissors. You Win. Rock beats Scissors";
    winner = "hooman";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    result = "You chose Rock, Computer also chose Rock. It is a Tie";
    winner = "tie";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "You chose Paper. Computer chose Rock. You Win. Paper beats Rock";
    winner = "hooman";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result =
      "You chose Paper. Computer chose Scissors. You Lose. Scissors beats Paper";
    winner = "comp";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    result = "You chose Paper, Computer also chose Paper. It is a Tie";
    winner = "tie";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result =
      "You chose Scissors, Computer chose Rock. You Lose. Rock beats Scissors";
    winner = "comp";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result =
      "You chose Scissors, Computer chose Paper. You Win. Scissors beats Paper";
    winner = "hooman";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    result = "You chose Scissors, Computer chose Scissors. It is a Tie";
    winner = "tie";
  }
  console.log(result);
  return winner;
}

function game() {
  let scoreHooman = 0;
  let scoreComp = 0;
  let result;
  while (scoreHooman < 5 && scoreComp < 5) {
    let resultOfPlayRound = playRound();
    if (resultOfPlayRound === "hooman") {
      ++scoreHooman;
    } else if (resultOfPlayRound === "comp") {
      ++scoreComp;
    } else {
      scoreHooman += 0;
      scoreComp += 0;
    }
  }
  if (scoreHooman > scoreComp) {
    result =
      "You Win The Game! The score is " + scoreHooman + " : " + scoreComp;
  } else {
    result =
      "You Lose The Game! The score is " + scoreHooman + " : " + scoreComp;
  }
  return result;
}

console.log(game());
