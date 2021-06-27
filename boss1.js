let theTextPlace = document.getElementById("text");
let theText = ` - ...guest... A guest, at last. Let me introduce myself - I am The Musician, the most talented
dweller of the woods. Now, will you play with me? Please, play with me!
If you win I will let you go. If you lose, I will make my violin strings from your guts!`;
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
