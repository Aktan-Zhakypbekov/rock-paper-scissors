let theTextPlace = document.getElementById("text");
let theText = ` - ...guest... A guest, at last. Let me introduce myself - I am The Musician, the most talented
dweller of the woods. Now, will you play with me? Please, play with me!
If you win I will let you go. If you lose, I will make my violin strings from your guts!`;
let i = 0;
function typingEffect() {
  if (i < theText.length) {
    theTextPlace.textContent += theText.charAt(i);
    i++;
    setTimeout(typingEffect, 10);
  }
}
theTextPlace.addEventListener("click", typingEffect);

//the function to play a single round
function playRound() {
  //user makes a choice
  function userPlay() {
    let choice = prompt("Enter your choice: ");
    //let rpsIcon = document.querySelectorAll(".rpsImg");
    //for (let i = 0; i < rpsIcon.length; i++) {
    //  rpsIcon[i].addEventListener("click", () => {
    //    choice = rpsIcon[i].id;
    //  });
    return choice;
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
    winner = "comp";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    winner = "hooman";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    winner = "tie";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    winner = "hooman";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    winner = "comp";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    winner = "tie";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    winner = "comp";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    winner = "hooman";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    winner = "tie";
  }
  let hoomanChoice = document.querySelector("#choiceHoomanImg");
  hoomanChoice.src = document.getElementById(playerSelection + "-img").src;
  let compChoice = document.querySelector("#choiceCompImg");
  compChoice.src = document.getElementById(computerSelection + "-img").src;
  return winner;
}

function game() {
  let finalMessage = document.querySelector("#finalResultMessage");
  let scoreHooman = 0;
  let scoreComp = 0;
  let scoreHoomanDiv = document.querySelector("#scoreHooman");
  let scoreCompDiv = document.querySelector("#scoreComp");
  while (scoreHooman < 1 && scoreComp < 1) {
    let resultOfPlayRound = playRound();
    if (resultOfPlayRound === "hooman") {
      ++scoreHooman;
      scoreHoomanDiv.textContent = scoreHooman;
    } else if (resultOfPlayRound === "comp") {
      ++scoreComp;
      scoreCompDiv.textContent = scoreComp;
    } else {
      scoreHooman += 0;
      scoreComp += 0;
    }
  }
  if (scoreHooman > scoreComp) {
    finalMessage.textContent =
      "You Win The Game! The score is " + scoreHooman + " : " + scoreComp;
  } else {
    finalMessage.textContent =
      "You Lose The Game! The score is " + scoreHooman + " : " + scoreComp;
  }
}
game();
