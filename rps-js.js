//return pseudorandom integer in range of num
function randomInt(num) {
    return Math.floor(num * Math.random());
}

//return computer's choice of rock, paper, or scissors
function getComputerChoice() {
    let num_choi = randomInt(3);
    if (num_choi == 0) return "Rock"
    else if (num_choi == 1) return "Paper"
    else return "Scissors";
}

//plays a round of the game
function playRound(playerSelection, computerSelection) {
    //standardizes choice names
    playerSelection = (playerSelection[0].toUpperCase() + 
        playerSelection.slice(1).toLowerCase());

    if (playerSelection == computerSelection) {
        return "It's a draw!"
    } else if (
        (playerSelection == "Rock" && computerSelection == "Paper")
        || (playerSelection == "Paper" && computerSelection == "Scissors")
        || (playerSelection == "Scissors" && computerSelection == "Rock")
    ) {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));