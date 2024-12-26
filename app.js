

// Simon PLay GAme BY JS 

let gameseq=[];
let userseq=[];

let started = false;

let btns = ["yellow","green","red","purple"];
let level =0;

let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started ");
        started =true;
       levelUp();
    }
});

function levelUp(){
    userseq = [];
    console.log(userseq);
    level++;
    h2.innerText= `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    //   console.log(randIdx);
    //   console.log(randColor);
    //   console.log(randBtn);
      gameseq.push(randColor);
      console.log(gameseq);
      console.log(userseq);
     gameflash(randBtn);
}
// function for flashing the button

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
      btn.classList.remove("gameflash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },250);
}

// fucntion for button press

function btnPress(){
    let btn = this;
     userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor); 
    
    checkans(userseq.length-1);
}

// accessing all the buttons
let allbtns = document.querySelectorAll(".btn");

for(Btn of allbtns){
     Btn.addEventListener("click", btnPress);
}

// function for  Answer checking 
function checkans(idx){

    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            console.log("Leveled Up");
            setTimeout(levelUp,1000);
        }
    }
        else{
            h2.innerHTML=`Game Over ! Your Score was <b> ${level} </b> <br> Press Any Other Key To Restart.`;
            document.querySelector("body").style.backgroundColor="red";
           setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
           },150);
            reset();

        }
}

function reset(){
       started =false;
       gameseq=[];
       userseq=[];
       level=0;
}

