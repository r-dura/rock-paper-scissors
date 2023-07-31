function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max) ) + min;
}

function getComputerChoice(number) {
    if (number == 1) {
        return "Rock";
    } else if (number == 2) {
        return "Paper";
    } else if (number == 3) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log("You both threw the same! It's a tie!");
        return 0.5;
    } 
    if ((playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") 
    || (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") 
    || (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock")) {
        console.log("You lost that round!");
        return 0;
    } 
    if ((computerSelection.toLowerCase() == "rock" && playerSelection.toLowerCase() == "paper") 
    || (computerSelection.toLowerCase() == "paper" && playerSelection.toLowerCase() == "scissors") 
    || (computerSelection.toLowerCase() == "scissors" && playerSelection.toLowerCase() == "rock")) {
        console.log("You won that round!");
        return 1;
    }
}

function game() {
    let userScore = 0;
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice");
        const computerSelection = getComputerChoice(getRndInteger(1,3));
        userScore += playRound(playerSelection, computerSelection);
    }
    if (userScore < 2.5) {
        return "You lost the game!";
    } else if (userScore > 2.5) {
        return "You won the game!";
    } else if (userScore == 2.5) {
        return "Tie game!"
    }
}

console.log(game());