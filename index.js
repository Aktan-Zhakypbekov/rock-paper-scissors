let theTextPlace = document.getElementById("text");
let theText = ` - Hello meat, you are now in the darkwood, a strange place that consumed the once live world. The only way for you 
    to get out of here is to play a game. It is simple, but it doesn't mean it will be easy. First, choose your character. Then,
    look at the bottom, there are four bosses - beat all of them. Remember, you are playing a challenging and unforgiving game. You will not be led by the hand. 
    Respect the woods. Be patient. Focus.`;
let i = 0;
function typingEffect() {
  if (i < theText.length) {
    theTextPlace.textContent += theText.charAt(i);
    i++;
    setTimeout(typingEffect, 10);
  }
}
theTextPlace.addEventListener("click", typingEffect);

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
