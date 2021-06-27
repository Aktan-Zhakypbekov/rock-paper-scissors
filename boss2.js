let theTextPlace = document.getElementById("text");
let theText = ` - Welcome to the woods, stranger. We are The Three - the ears, eyes, and the mouth of the woods. 
In order to past us you need to play the game. If you win you go. 
If you lose, we will flay you alive and make a cloth from your skin.`;
let i = 0;
function typingEffect() {
  if (i < theText.length) {
    theTextPlace.textContent += theText.charAt(i);
    i++;
    setTimeout(typingEffect, 10);
  }
}
theTextPlace.addEventListener("click", typingEffect);
