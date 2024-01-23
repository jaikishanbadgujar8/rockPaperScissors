let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".img1");
let msgButton = document.querySelector("#playmove");
const userScoreId = document.querySelector("#user-score");
const compScoreId = document.querySelector("#comp-score");
// show winner function prints win or lose
let showWinner =(userWin, compChoice, userChoice) =>{
     if(userWin){
          userScore++;
          userScoreId.innerText = userScore;
          msgButton.innerText =`You Win! ${userChoice} Beats ${compChoice} `;
          msgButton.style.backgroundColor = "green";
     }else{
          compScore++;
          compScoreId.innerText =compScore;
          userScoreId.innerText = userScore;
          msgButton.innerText =`You Lose! ${compChoice} Beats ${userChoice}`;
          msgButton.style.backgroundColor = "red";
     }
}
//random generating function which generates no between 0 to 3
let genChoice = () => {
    let options = ["rock", "paper","scissor"];
    let randomNum = Math.floor(Math.random()*3);
    return options[randomNum];
} 
// play game function
let playGame = (userChoice) => {
// computer choice
    let compChoice = genChoice();

    if(userChoice === compChoice){
     msgButton.innerText ="Game Was Draw! Play Again";
     msgButton.style.backgroundColor = "rgb(50 32 73)";
    }else{
     let userWin = true;
     
     if(userChoice === "rock"){
          // paper, scissor
          userWin = compChoice ==="paper" ? false:true;
     }else if(userChoice === "paper"){
          // rock, scissor
          userWin = compChoice ==="scissor" ?false:true;
     }else {
          //rock, paper
          userWin = compChoice ==="rock" ?false:true;
     }
     showWinner(userWin, compChoice, userChoice);
    }
    
   

}
// main code user choice
choices.forEach ((choice) =>{
     choice.addEventListener("click", () => {
       const userChoice = choice.getAttribute("id");
         playGame(userChoice);

     });
});