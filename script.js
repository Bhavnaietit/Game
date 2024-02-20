let userScore=0;
let compScore=0;
const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScr=document.querySelector("#user-score");
const compScr =document.querySelector("#comp-score");


const drawGame=() =>{

    console.log("Game was draw.");
    msg.innerText ="game was Draw. Play again !!";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}

const showWinner = (userWin, userChoice,compChoice) => {
    if(userScore != 5 && compScore != 5){
if(userWin){
    // console.log("you win !");
    msg.innerText =`You Win ! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userScore++;
    userScr.innerText =userScore;
    console.log("user-score:",userScore);
} else if(userChoice === compChoice){
    drawGame();
} else {
    // console.log("you Lose !");
    msg.innerText =`You Lose ! computer ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";
    compScore++;
    compScr.innerText=compScore;
    console.log("comp-score",compScore);
}
} else {
        console.log("Game is over !");
        let win =0;
        if(userScore >= 5 ){
            win= userScore;
        msg.innerText=`Game is over !  you are Winner with Score-${win}`;
        msg.style.backgroundColor="blue";
        msg.style.color="white";

        } else if(compScore >= 5){
            win= compScore;
            msg.innerText=`Game is over !  Computer is Winner with Score-${win}`;
            msg.style.backgroundColor="blue";
            msg.style.color="white";
        }

     }
}

const genCompChoice = () =>{
    const options =["stone" ,"paper","scissors"];
    // Math.floor(Math.random(*)3)
    const randInx =Math.floor(Math.random() * 3);
    return options[randInx];

}

const playGame= (userChoice) =>{
    console.log("user choice =",userChoice);
    // generate computer choise
    let compChoice =genCompChoice();
    console.log("computer choice =",compChoice);
    let  userWin=false;
    if(userChoice === compChoice){
        //Draw game
        showWinner(userWin,userChoice,compChoice);
    } else {
        userWin=true;
        if(userChoice === "stone"){
            // paper ,  scissors
            userWin = compChoice==="paper"? false : true;
        } else if (userChoice==="paper"){
            // scissors, stone
            userWin = compChoice==="scissors"? false : true;
        } else{
            // paper,rock
            userWin = compChoice ==="stone"? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    console.log(choice);
    let userChoice=choice.getAttribute("id");
    choice.addEventListener("click" , () =>{
        // console.log("choise was clicked",userChoice);
        playGame(userChoice);
    });
});