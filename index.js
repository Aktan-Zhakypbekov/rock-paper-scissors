//user makes a choice
let choice = prompt("Make a choice (Rock, Paper, Scissor): ");
let userChoice = choice.toLowerCase();

//computer makes a choice
let array = ["rock", "paper", "scissors"];
let computerChoice = array[Math.floor(Math.random() * 3)];

//initialize variables to count
let result;
let countUser = 0;
let countComp = 0;

//compare the choices
if (userChoice === "rock" && computerChoice === "paper") {
  result = "You chose Rock, Computer chose Paper. You Lose. Paper beats Rock";
  ++countComp;
} else if (userChoice === "rock" && computerChoice === "scissors") {
  result =
    "You chose Rock, Computer chose Scissors. You Win. Rock beats Scissors";
  ++countUser;
} else if (userChoice === "rock" && computerChoice === "rock") {
  result = "You chose Rock, Computer also chose Rock. It is a Tie";
} else if (userChoice === "paper" && computerChoice === "rock") {
  result = "You chose Paper. Computer chose Rock. You Win. Paper beats Rock";
  ++countUser;
} else if (userChoice === "paper" && computerChoice === "scissors") {
  result =
    "You chose Paper. Computer chose Scissors. You Lose. Scissors beats Paper";
  ++countComp;
} else if (userChoice === "paper" && computerChoice === "paper") {
  result = "You chose Paper, Computer also chose Paper. It is a Tie";
} else if (userChoice === "scissors" && computerChoice === "rock") {
  result =
    "You chose Scissors, Computer chose Rock. You Lose. Rock beats Scissors";
  ++countComp;
} else if (userChoice === "scissors" && computerChoice === "paper") {
  result =
    "You chose Scissors, Computer chose Paper. You Win. Scissors beats Paper";
  ++countUser;
} else if (userChoice === "scissors" && computerChoice === "scissors") {
  result = "You chose Scissors, Computer chose Scissors. It is a Tie";
}

console.log(result);
console.log("user: " + countUser + ". computer: " + countComp);
