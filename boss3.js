let theTextPlace = document.getElementById("text");
let theText = ` - ???? ??????food??? ????????????? ??????meat????? ??????eat?????? ????? ???? ? ??mush????? ???rooms???
????? ???? ????? ??mush ???? ? ??ruuuums????? ??????? ??????? ??????? ????????? ??????? ????? [unintelligble]`;
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
        finalMessage.innerHTML = `-NHhhoouu...???my??? m??eat??? Go to the <a href='boss2.html' style='color:white'>next boss</a> or`;
      } else {
        finalMessage.innerHTML = `-???Eat??? ???eat???? ???eat?? ??him??`;
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
