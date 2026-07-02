let userScore = 0;
let compScore = 0;

let you = document.querySelector("#you");
let comp = document.querySelector("#comp");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msgContainer");
let choices = document.querySelectorAll(".choice");
// let choice = document.querySelector(".choices");

//this fun checks users choice and send it to playGame
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
});

//this fun generates computer choices
const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let rndindx = Math.floor(Math.random() * 3);
    return options[rndindx];
};

//this is fun where we check the winner
const playGame = (userchoice) => {
    //computer choice
    let compChoice = genCompChoice();
    // rock - scissor > user
    // rock - paper > comp
    // paper - scissor > comp
    // paper - rock > user
    // scissor - paper > user
    // scissor - rock > comp
    if (userchoice === compChoice) {
        msg.innerText = "Game Was Draw. Play again";
        msgContainer.style.backgroundColor = "rgb(30, 23, 75)";
    }
    else if (userchoice == "rock" && compChoice == "scissor" ||
        userchoice == "paper" && compChoice == "rock" ||
        userchoice === "scissor" && compChoice === "paper") {
        userScore++;
        you.innerText = userScore;
        msg.innerText = "You Win!🥳🏆";
        msgContainer.style.backgroundColor = "green";
    } else {
        compScore++;
        comp.innerText = compScore;
        msg.innerText = "You Lose.😞";
        msgContainer.style.backgroundColor = "red";
    }
};