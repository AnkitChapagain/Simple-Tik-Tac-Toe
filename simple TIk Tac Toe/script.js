const cellElements = document.querySelectorAll(".board .cell");
const final=document.querySelector(".reset");
const text=document.querySelector(".reset h1");
const btn=document.querySelector(".reset button");
const body=document.querySelector(".board");

const player0 = "O";
const playerX = "X"; 
const winning_condition =  [ 
[0, 1, 2], //  row
[3, 4, 5], 
[6, 7, 8], 
[0, 3, 6], // column
[1, 4, 7], 
[2, 5, 8], 
[0, 4, 8], // diagonal 
[2, 4, 6]  
];


let changeTurn = true; 

cellElements.forEach((cell) => {
  cell.onclick = () => {
    let currentClass = changeTurn ? player0 : playerX; 
    cell.classList.add("disable");
    cell.innerHTML = currentClass;
   
    if (checkWinner(currentClass)) {
      //console.log(currentClass+"Winner2");
      final.classList.remove("inactive");
      text.innerHTML= currentClass +"  won the game";
      body.classList.add("inactive");
    }
    if(checkDraw()){
     // console.log("draw")
     final.classList.remove("inactive");
      text.innerHTML= " Game is draw ";
      body.classList.add("inactive");
    }
    swapKancha(); 
   
  };
});

function swapKancha() { 
  changeTurn = !changeTurn; 
}

function checkWinner() {
  for (let i = 0; i < winning_condition.length; i++) {
    const [a, b, c] = winning_condition[i];

    if (cellElements[a].innerHTML && (cellElements[a].innerHTML=== cellElements[b].innerHTML) && (cellElements[b].innerHTML === cellElements[c].innerHTML)) {
      return true;
    }
  }
 
}
function checkDraw() {
  for (let i = 0; i < cellElements.length; i++) {
    if (cellElements[i].innerHTML === '') {
      return false;
    }
  }if(!checkWinner())
  return true;
}
btn.onclick=()=>{
  location.reload()
}