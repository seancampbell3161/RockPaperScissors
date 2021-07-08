
function computerMove() {

    let moveSet = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random() * moveSet.length);
    return moveSet[randomNum].toLowerCase();
}

function game() {

    playerScore = 0;
    computerScore = 0;
    let isDone = false;

    while(!isDone) {

        let computerSelection = computerMove().toLowerCase();
        playerSelection = window.prompt("Choose a move");
        playerSelection = playerSelection.toLowerCase();
        
        console.log(playerSelection);
        console.log(computerSelection);

        if(playerSelection == computerSelection) {
            console.log("The game is a tie.");
        } else if(playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            console.log("You win!");
        } else if(playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            console.log("You lose!");
        } else if(playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            console.log("You win!");
        } else if(playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            console.log("You lose!");
        } else if(playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            console.log("You win!");
        } else {
            computerScore++;
            console.log("You lose!");
        }

        if(playerScore === 5 || computerScore === 5) {
            isDone = true;
        }
    }

    playerScore === 5 ? winner = "The player" : winner = "The computer";

    console.log("The game is over. " + winner + " has won!");
}

let result = game();

console.log(result);