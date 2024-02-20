let boxes = document.querySelectorAll(".box");
let resertBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



// let p1 ,p2 = 0;
// let arr=[X,O];

let turnO = true; //pX, pO,

const WinPatterns = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[3, 4, 5],
	[6, 7, 8],
];


const resetGame =() =>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disabledBtns = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText =`Conguratulations !! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtns();
};

boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        // console.log("box was clicked");
        if(turnO==true){
            box.innerText="O";
        turnO=false;
    } else {
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
    });
});

const checkWinner = () =>{
    for(pattern of WinPatterns){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);

            let pos1Val =boxes[pattern[0]].innerText;
            let pos2Val =boxes[pattern[1]].innerText;
            let pos3Val =boxes[pattern[2]].innerText;
        

            if(pos1Val != "" && pos2Val !="" && pos3Val !=""){

            if(pos1Val === pos2Val  && pos2Val === pos3Val){
                // console.log("Winner !! ",pos1Val);
                showWinner(pos1Val);
           }
            }
    
        //     if(box[0]=== box[1]===box[2]){
        //         console.log("box was clicked");
        //    }
        
    }
};

newGameBtn.addEventListener("click" , resetGame);
resertBtn.addEventListener("click", resetGame)
