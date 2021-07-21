
function computerMove() {

    let moveSet = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * moveSet.length);
    return moveSet[randomNum];
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');

rock.addEventListener('click', () => {
    let playerSelection = "rock";
    let computerSelection = computerMove();
    checkWhoWon(playerSelection, computerSelection);
});

paper.addEventListener('click', () => {
    let playerSelection = "paper";
    let computerSelection = computerMove();
    checkWhoWon(playerSelection, computerSelection);
});

scissors.addEventListener('click', () => {
    let playerSelection = "scissors";
    let computerSelection = computerMove();
    checkWhoWon(playerSelection, computerSelection);
});

function checkWhoWon(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        result.textContent = "The game is a tie.";
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        //playerScore++;
        result.textContent = "You win!";
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        //computerScore++;
        result.textContent = "You lose!";
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        //playerScore++;
        result.textContent = "You win!";
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        //computerScore++;
        result.textContent = "You lose!";
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        //playerScore++;
        result.textContent = "You win!";
    } else {
        //computerScore++;
        result.textContent = "You lose!";
    }
}
