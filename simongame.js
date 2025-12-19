/*let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("lis");

div.addEventListener("click",function(){
    console.log("div was clicked");
});
ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("li was clicked");

    });
}*/

let gameSeq=[];
let userSeq=[];
let btns = ["yellow","red","purple","green"];
let started = false;
let level=0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
    console.log("game started!");
    started=true;
    levelup();
}
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}


function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    //console.log(randIdx);
    //console.log(randColor);
    //console.log(randbtn);
    gameSeq.push(randColor);
    //console.log(gameSeq);
    gameFlash(randBtn);

    //random btn choose
    
}
function checkAns(idx){
    //console.log("curr level :",level);
    //let idx = level -1;
    if (userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
          //  levelup();
          setTimeout(levelup,1000);
        }
        //console.log("same value");
    }else{
        h2.innerHTML = `Game Over! your score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor = "white";

        },150);
        reset();
    }
}
function btnPress(){
    //console.log(this);
    //console.log("btn was pressed");
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
