//return pseudorandom integer in range of num
function randomInt(num) {
    return Math.floor(num * Math.random());
}

//return computer's choice of rock, paper, or scissors
function getComputerChoice() {
    let numChoi = randomInt(3);
    if (numChoi == 0) return "Rock"
    else if (numChoi == 1) return "Paper"
    else return "Scissors";
}

//plays a round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "draw";
    } else if (
        (playerSelection == "Rock" && computerSelection == "Paper")
        || (playerSelection == "Paper" && computerSelection == "Scissors")
        || (playerSelection == "Scissors" && computerSelection == "Rock")
    ) {
        return "loss";
    } else {
        return "win";
    }
}

function getPlayerChoice() {
    let choice = prompt("Pick Rock, Paper, or Scissors");
    if (!(choice.toLowerCase() == "rock"
    || choice.toLowerCase() == "paper"
    || choice.toLowerCase() == "scissors")) 
    {
        alert("Invalid choice!");
        return getPlayerChoice();
    } else {
        //standardizes player input
        choice = (choice[0].toUpperCase() + 
            choice.slice(1).toLowerCase());

        return choice;
    }

}

function getStatusMessage(statusCurr, pChoice, cChoice) {
    if (statusCurr == "win") {
        return `You Win! ${pChoice} beats ${cChoice}!`;
    } else if (statusCurr == "loss") {
        return `You Lose! ${cChoice} beats ${pChoice}!`;
    } else {
        return "It's a draw!";
    }
}

//plays a five round game of rock-paper-scissors
function endGame(winTally, lossTally) {
    if (winTally == lossTally) {
        results.textContent = `You drew ${winTally}-${lossTally}! \
            Better luck next time!`;
    } else if (winTally > lossTally) {
        results.textContent = `Well done! You won ${winTally}-${lossTally}!`;
    } else {
        results.textContent = `Shame! You lost ${winTally}-${lossTally}`;
    }
}




const choices = document.querySelectorAll('.choice');
const results = document.querySelector('#results')

function runGame () {
    let clickTally = 0;
    let winTally = 0;
    let lossTally = 0;
    let statusGame;

    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            clickTally++;
            let playerChoice = choice.textContent;
            let computerChoice = getComputerChoice();
            statusGame = playRound(playerChoice, computerChoice);

            if (statusGame === 'win') {
                winTally++;
            } else if (statusGame === 'loss') {
                lossTally++;
            }

            if (clickTally == 5) {
                endGame(winTally, lossTally);
                clickTally = 0;
                winTally = 0;
                lossTally = 0;
            } else {
            statusMessage = getStatusMessage(statusGame, playerChoice,
                computerChoice);
            results.textContent = `${statusMessage}
            SCORE: ${winTally}-${lossTally}`;
            }
        });
    });
}

runGame();