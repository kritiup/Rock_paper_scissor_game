let userScore = 0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompchoice = ()  => {
    const options = ["rock","paper","scissors"];
    const randId = Math.floor(Math.random()*3);
    return options[randId];
}
const drawGame= () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw.";
    msg.style.backgroundColor = "Black" ;
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        console.log("You win");
        msg.innerText = `You win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You lose")
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    //generate computer choice
    const compChoice = genCompchoice();
    console.log("Computer choice =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper"? false : true;
        }else if(userChoice==="scissors"){
            userWin = compChoice==="scissor"? false : true;
        }else{
            userWin = compChoice=== "rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userId =choice.getAttribute("id");
        playGame(userId);
    });
});
