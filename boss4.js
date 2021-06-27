let theTextPlace = document.getElementById("text");
let theText = ` - You didn't think it was going to be that easy, ah, meat. I am the final boss - the Wolfman. 
Hmmm... Your smell is good. Soft. Warm. Tasty meat. Though a little skinny. But not like regular sack of bones I eat. 
Anyway, I will tear you apart.`;
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
