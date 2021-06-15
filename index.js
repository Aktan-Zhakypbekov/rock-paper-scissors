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
  let result;
  let countUser = 0;
  let countComp = 0;
  while (countComp < 5 && countUser < 5) {
    //compare the choices
    let playerSelection = userPlay();
    let computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "paper") {
      result =
        "You chose Rock, Computer chose Paper. You Lose. Paper beats Rock";
      ++countComp;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      result =
        "You chose Rock, Computer chose Scissors. You Win. Rock beats Scissors";
      ++countUser;
    } else if (playerSelection === "rock" && computerSelection === "rock") {
      result = "You chose Rock, Computer also chose Rock. It is a Tie";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      result =
        "You chose Paper. Computer chose Rock. You Win. Paper beats Rock";
      ++countUser;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      result =
        "You chose Paper. Computer chose Scissors. You Lose. Scissors beats Paper";
      ++countComp;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
      result = "You chose Paper, Computer also chose Paper. It is a Tie";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      result =
        "You chose Scissors, Computer chose Rock. You Lose. Rock beats Scissors";
      ++countComp;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      result =
        "You chose Scissors, Computer chose Paper. You Win. Scissors beats Paper";
      ++countUser;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "scissors"
    ) {
      result = "You chose Scissors, Computer chose Scissors. It is a Tie";
    }
    console.log(result);
    console.log("computer score: " + countComp + ". user score: " + countUser);
  }
  if (countUser === countComp) {
    console.log("it is a tie. score: " + countUser + " : " + countComp);
  } else if (countUser > countComp) {
    console.log("The hooman wins. score: " + countUser + " : " + countComp);
  } else {
    console.log("the computer wins.score: " + countUser + " : " + countComp);
  }
}
playRound();
