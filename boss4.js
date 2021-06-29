let theTextPlace = document.getElementById("text");
let theText = ` - You didn't think it was going to be that easy, ah, meat. I am the final boss - the Wolfman. 
Hmmm... Your smell is good. Soft. Warm. Tasty meat. Though a little skinny. But not like regular sack of bones I eat. 
Anyway, I will tear you apart.`;
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
  rpsIcon.addEventListener("click", function game(event) {
    playerSelection = rpsIcon.id;
    playRound();
    if (scoreHooman === 3 || scoreComp === 3) {
      rpsIcons.forEach((rpsIcon) => {
        rpsIcon.remove();
      });
      if (scoreHooman > scoreComp) {
        finalMessage.innerHTML = `-You won. But does it mean you'll get to your home? Don't worry I won't touch you. From now on, you will build your own path. Maybe you will find your home, or maybe, when in despair, you will become  a part of the darkwood, like us. Goodbye.`;
      } else {
        finalMessage.innerHTML = `-You lost. Just like the hundreds before you. You are my dinner.`;
      }
    }
  });
});

function computerPlay() {
  let array = ["rock", "paper", "scissors"];
  return array[Math.floor(Math.random() * 3)];
}
function replay() {
  window.location.reload();
}

let replayButton = document.querySelector("#replay-button");
replayButton.addEventListener("click", replay);

function playRound() {
  let winner;
  let computerSelection = computerPlay();
  if (playerSelection === "rock" && computerSelection === "paper") {
    scoreComp++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    scoreHooman++;
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    scoreComp += 0;
    scoreHooman += 0;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    scoreHooman++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    scoreComp++;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    scoreHooman += 0;
    scoreComp += 0;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    scoreComp++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    scoreHooman++;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    scoreHooman += 0;
    scoreComp += 0;
  }
  let hoomanChoice = document.querySelector("#choiceHoomanImg");
  hoomanChoice.src = document.getElementById(playerSelection).src;
  let compChoice = document.querySelector("#choiceCompImg");
  compChoice.src = document.getElementById(computerSelection).src;

  scoreHoomanDiv.textContent = scoreHooman;
  scoreCompDiv.textContent = scoreComp;
}
