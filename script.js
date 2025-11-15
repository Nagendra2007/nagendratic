
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
document.addEventListener('gesturechange', function (e) {
    e.preventDefault();
});
document.addEventListener('gestureend', function (e) {
    e.preventDefault();
})
let line = document.querySelector('#winline');
line.style.backgroundColor="blue";
let symbol = document.querySelector('#icon');
let turnO = true;
let boxes = document.querySelectorAll('.box');
let sound = document.querySelector('#sound');
let message = document.querySelector('.msg')
let mesg = document.querySelector('.mesage');
let winSound = document.querySelector('#win');
let check = false;

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
    box.innerText="X";
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
    sound.play();
    box.innerText="O";
   turnO=true;
   }
  checkWinner();
}

boxes.forEach(box => box.addEventListener('click', iconToggle));
let winningPatterns =  [[0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6] ]
let checkWinner = () =>{
     for(pattern of winningPatterns){
         let idx0= boxes[pattern[0]].getAttribute("id");
         let idx1 = boxes[pattern[1]].getAttribute("id");
         let idx2 = boxes[pattern[2]].getAttribute("id");
         let pos1 = boxes[pattern[0]].innerText;
         let pos2 = boxes[pattern[1]].innerText;
         let pos3 = boxes[pattern[2]].innerText;
         if(pos1 !="" && pos2 != "" && pos3 != "" ){
                 if(pos1===pos2 && pos2==pos3 && pos1==="X"){
                    message.innerText="Player X has Won thme";
                    mesg.style.background="#00ff7b26";
                    for(box of boxes){
                        box.removeEventListener('click', iconToggle);
                    }
                     drawWinLine(winningPatterns.indexOf(pattern));
                     winSound.currentTime=0;
                     winSound.play();
                     check = true;
                 }
                 else if (pos1===pos2 && pos2==pos3 && pos1==="O"){
                  
                    message.innerText="Player O has Won the Game";
                    mesg.style.background="#00ff7b26"
                    for(box of boxes){
                        box.removeEventListener('click', iconToggle);
                    }
                     drawWinLine(winningPatterns.indexOf(pattern));
                     winSound.currentTime=0;
                     winSound.play();
                     check=true;
                 }
                 else if(boxes[0].innerText !=="" && 
                         boxes[1].innerText !=="" && 
                         boxes[2].innerText !=="" && 
                         boxes[3].innerText !=="" && 
                         boxes[4].innerText !=="" && 
                         boxes[5].innerText !=="" && 
                         boxes[6].innerText !=="" && 
                         boxes[7].innerText !=="" &&
                          !check){
                            message.innerText = "Match has drawn";
                         }
                 
         }
     }


}
let drawWinLine = (pattern) =>{
    if(pattern===0){
        line.style.transform="translateY(-110px)";
        line.style.display="flex";
      
    }
    if(pattern===1){
        line.style.display="flex";
       
    }
    if(pattern===2){
        line.style.transform="translateY(110px)";
        line.style.display="flex";
    }
    if(pattern===3){
        line.style.display="flex";
        line.style.transform="rotate(90deg) translateY(110px)";
   
    }
    if(pattern===4){
        line.style.display="flex";
        line.style.transform="rotate(90deg)";
       
    }
    if(pattern===5){
        line.style.display="flex";
        line.style.transform="rotate(90deg) translateY(-110px)";
      
    }
    if(pattern===6){
        line.style.display="flex";
        line.style.transform="rotate(45deg)";
    
    }
    if(pattern===7){
        line.style.display="flex";
        line.style.transform="rotate(-45deg)";
 
    }
}
          
