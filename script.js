let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newgamebtn=document.querySelector("#newbtn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".messge-hide");
let turnO=true;


const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    
turnO=true;

enabledBox();
msgcontainer.classList.add("hide");
};
const disabledBox=()=>{          //ye function jitne ke baad dobara button click n ho uska hai
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledBox=()=>{      //ye function reset or new play ka hai
    for(let box of boxes){
        box.disabled=false;
         box.innerText="";
    }
}
boxes.forEach((box) => {
box.addEventListener("click",() => {
   if(turnO){
    box.innerText="O";
    turnO=false;
   }else{
    box.innerText="X";
    turnO=true;
    box.style.color="green";
    
   }
   box.disabled=true;
  

  checkWinner();
  
});
});
    
const showWinner=(winner) => {
msg.innerText=`congrates,winner is ${winner}`;
msgcontainer.classList.remove("hide");
disabledBox();
};


const checkWinner = () =>{
for( let pattern of winPattern){
//     console.log(boxes[pattern[0]].innerText,
//  boxes[pattern[1]].innerText,
//      boxes[pattern[2]].innerText);

   let pos1val=boxes[pattern[0]].innerText; 
   let pos2val=boxes[pattern[1]].innerText; 
   let pos3val=boxes[pattern[2]].innerText; 
   if(pos1val != ""&& pos2val != ""&& pos3val != ""){
if(pos1val===pos2val&&pos2val===pos3val){
   showWinner(pos1val);
 
}

}
}
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
