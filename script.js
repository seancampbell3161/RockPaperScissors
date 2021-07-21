
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const playerScoreHolder = document.querySelector('#playerScore');
const computerScoreHolder = document.querySelector('#computerScore');
let pScore = 0;
let cScore = 0;
printScore();

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

function computerMove() {

    let moveSet = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * moveSet.length);
    return moveSet[randomNum];
}

function checkWhoWon(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        printWhoWon("tie");
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        printWhoWon("player");
        updateScore("player");      
    } else if(playerSelection === "rock" && computerSelection === "paper") {       
        printWhoWon("computer");
        updateScore("computer");
    } else if(playerSelection === "scissors" && computerSelection === "paper") {    
        printWhoWon("player");
        updateScore("player");
    } else if(playerSelection === "scissors" && computerSelection === "rock") {   
        printWhoWon("computer");
        updateScore("computer");
    } else if(playerSelection === "paper" && computerSelection === "rock") {    
        printWhoWon("player");
        updateScore("player");
    } else {    
        printWhoWon("computer");
        updateScore("computer");
    }
    printScore();
    isGameOver(pScore, cScore);
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

function updateScore(playerWon) {
    playerWon === "player" ? pScore++ : playerWon === "computer" ? cScore++ : 0;
}

function printScore() {
    playerScoreHolder.textContent = pScore;
    computerScoreHolder.textContent = cScore;
}

function isGameOver(playerScore, computerScore) {

    if(playerScore === 5 || computerScore === 5) {
        let winner = playerScore === 5 ? "The player" : "The computer";
        pScore = 0;
        cScore = 0;
        result.textContent = `The game is over. ${winner} has won the game!`;
    }
}
