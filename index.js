//the function to play a single round
/*function playRound() {
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

console.log(game());*/

function displayText() {
  let theTextPlace = document.getElementById("text");
  let theText = ` - Hello meat, you are now in the darkwood, a strange place that consumed the once live world. The only way for you 
  to get out of here is to play a game. It is simple, but it doesn't mean it will be easy. First, choose your character. Then,
  look at the bottom, there are four bosses - beat all of them. Remember, you are playing a challenging and unforgiving game. You will not be led by the hand. 
  Respect the woods. Be patient. Focus.`;
  let i = 0;
  let place = "";
  function typingEffect() {
    if (i < theText.length) {
      theTextPlace.textContent += theText.charAt(i);
      i++;
      setTimeout(typingEffect, 10);
    }
  }
  theTextPlace.addEventListener("click", typingEffect);
}
displayText();

let youImg = document.querySelector("#youImg");

let charImage = document.querySelectorAll(".char");
for (let i = 0; i < charImage.length; i++) {
  charImage[i].addEventListener("click", () => {
    youImg.src = charImage[i].src;
  });
}

let charImageSpecial = document.querySelector(".char-special");
charImageSpecial.addEventListener("click", () => {
  youImg.src = charImageSpecial.src;
});
