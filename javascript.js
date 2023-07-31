function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max) ) + min;
}

function getComputerChoice(number) {
    if (number == 1) {
        return "rock";
    } else if (number == 2) {
        return "paper";
    } else if (number == 3) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        console.log("You both threw the same! It's a tie!");
        return 0.5;
    } 
    if ((playerSelection.toLowerCase() == "rock" && computerSelection == "paper") 
    || (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") 
    || (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock")) {
        console.log("You lost that round!");
        return 0;
    } 
    if ((computerSelection == "rock" && playerSelection.toLowerCase() == "paper") 
    || (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors") 
    || (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock")) {
        console.log("You won that round!");
        return 1;
    }
}

function game() {
    let userScore = 0;
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice");
        while (!(playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors")) {
            console.log("What did you throw? Try again.");
            playerSelection = prompt("Enter your choice");
        }
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