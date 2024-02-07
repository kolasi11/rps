function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 2);
    if (computerChoice === 0) {
        return "rock";
    }
    else if (computerChoice === 1) {
        return "paper";
    }
    return "scissor";
}

function getPlayerChoice() {
    var playerChoice = prompt("Please Choose Rock, Paper, or Scissor: ");
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    }
    else if ( playerSelection === "rock") { 
        if (computerSelection === "paper") {
            return "lose";
        }
        return "win";
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissor") {
            return "lose";
        }
        return "win";
    }
    else if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            return "lose";
        }
        return "win";
    }
}

function playGame () {
    let playerScore = 0;
    let computerScore = 0
    let i = 0;

    while (i < 5) {
        let computerSelection = getComputerChoice().toLowerCase();
        let playerSelection = getPlayerChoice().toLowerCase();
        let result = playRound(playerSelection, computerSelection);

        if (result === "win") {
            console.log("You win!! " + playerSelection + " beats " + computerSelection);
            playerScore++;
        }

        else if (result === "draw") {
            console.log("Match tied!! Both chose " + playerSelection);
        }

        else {
            console.log("You lose!! " + computerSelection + " beats " + playerSelection);
            computerScore++;
        }
        console.log("Score \n You: " + playerScore + "\n Computer: " + computerScore);
        i++;
    }

    if ( playerScore === computerScore ) {
        console.log("Match tied!!");
    }
    else if (playerScore > computerScore) {
        console.log("You win!!");
    }
    else {
        console.log("You lose");
    }

    console.log("Final Score \n You: " + playerScore + "\n Computer: " + computerScore);
}

playGame();