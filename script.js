
function computerMove() {

    let moveSet = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * moveSet.length);
    return moveSet[randomNum];
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const playerScoreHolder = document.querySelector('#playerScore');
const computerScoreHolder = document.querySelector('#computerScore');
const pScore = 0;
const cScore = 0;

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
        printWhoWon("tie");
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        pScore++;
        printWhoWon("player");      
    } else if(playerSelection === "rock" && computerSelection === "paper") {       
        printWhoWon("computer");
    } else if(playerSelection === "scissors" && computerSelection === "paper") {    
        printWhoWon("player");
    } else if(playerSelection === "scissors" && computerSelection === "rock") {   
        printWhoWon("computer");
    } else if(playerSelection === "paper" && computerSelection === "rock") {    
        printWhoWon("player");
    } else {    
        printWhoWon("computer");
    }
}

function printWhoWon(playerWon) {
    if(playerWon === "player") {
        result.textContent = "You win!";
    } else if (playerWon === "tie") {
        result.textContent = "The game is a tie.";
    } else {
        result.textContent = "You lose!";
    }
}
