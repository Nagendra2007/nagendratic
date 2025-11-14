let userX;
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
document.addEventListener('gesturechange', function (e) {
    e.preventDefault();
});
document.addEventListener('gestureend', function (e) {
    e.preventDefault();
})
let symbol = document.querySelector('#icon');
let turnO = true;
let boxes = document.querySelectorAll('.box');
let sound = document.querySelector('#sound');

function iconToggle(e) {
  const box = e.currentTarget;
   let icon = document.createElement("i");
   box.append(icon);
   if(turnO){
   icon.classList.add("fa-solid","fa-xmark");
   box.removeEventListener('click', iconToggle);
   box.style.color="rgba(35, 8, 243, 1)";
   symbol.classList.remove("fa-solid","fa-xmark");
   symbol.classList.add("fa-regular","fa-circle");
   symbol.style.color="rgba(74, 119, 245,0.9)";
   symbol.style.color="rgba(255,123,0,1)"
    console.log(box.getAttribute("id"));
    sound.currentTime=0;
    sound.play();
   turnO=false;
   }
   else {
   icon.classList.add("fa-regular","fa-circle");
   box.removeEventListener('click', iconToggle);
   box.style.color="rgba(255, 123, 0, 1)"
   symbol.classList.remove("fa-regular","fa-circle");
   symbol.classList.add("fa-solid","fa-xmark");
   symbol.style.color="rgba(74, 119, 245,0.9)";
   console.log(box.getAttribute("id"));
    sound.currentTime=0;
    sound.play()
   turnO=true;
   }
}

boxes.forEach(box => box.addEventListener('click', iconToggle));
