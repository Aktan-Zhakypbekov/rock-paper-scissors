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

let finalMessage = document.querySelector("#finalResultMessage");
let scoreHoomanDiv = document.querySelector("#scoreHooman");
let scoreCompDiv = document.querySelector("#scoreComp");
let scoreHooman = 0;
let scoreComp = 0;

let playerSelection;
let rpsIcons = document.querySelectorAll(".rpsImg");
rpsIcons.forEach((rpsIcon) => {
  rpsIcon.addEventListener("click", (event) => {
    playerSelection = rpsIcon.id;
    while (scoreHooman < 5 && scoreComp < 5) {
      game();
      if (scoreHooman > scoreComp) {
        finalMessage.innerHTML =
          "You Win! <button class='replay-button'>Replay</button> or <a href='boss2.html'>Next Boss</a>";
      } else {
        finalMessage.innerHTML =
          "You Lose. <button class='replay-button'>Replay</button>";
      }
    }
  });
});

function computerPlay() {
  let array = ["rock", "paper", "scissors"];
  return array[Math.floor(Math.random() * 3)];
}

function playRound() {
  let winner;
  let computerSelection = computerPlay();
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
  hoomanChoice.src = document.getElementById(playerSelection).src;
  let compChoice = document.querySelector("#choiceCompImg");
  compChoice.src = document.getElementById(computerSelection).src;
  return winner;
}

function game() {
  let resultOfPlayRound = playRound();
  if (resultOfPlayRound === "hooman") {
    ++scoreHooman;
    scoreHoomanDiv.textContent = scoreHooman;
  } else if (resultOfPlayRound === "comp") {
    ++scoreComp;
    scoreCompDiv.textContent = scoreComp;
  }
}
