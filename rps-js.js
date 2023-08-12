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

function getStatusMessage(status) {
    if (status == "win") {
        return `You Win! ${pChoice} beats ${cChoice}!`;
    } else if (status == "loss") {
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

// I need to figure out variable consistency--rn click dependency
//is messing everything up because the variables are outside the eventlistenr
//so they are being treated as constant vars, within the function rungame
//or some strange logic like that.
function runGame () {
    let clickTally = 0;
    let winTally = 0;
    let lossTally = 0;
    let status;
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            clickTally++;
            let playerChoice = choice.textContent;
            let computerChoice = getComputerChoice();
            status = playRound(playerChoice, computerChoice);

            if (status === 'win') {
                winTally++;
            } else if (status === 'lose') {
                loseTally++;
            }

            statusMessage = getStatusMessage(status);
            results.textContent = `${statusMessage}
            SCORE: ${winTally}-${lossTally}`;
            if (clickTally > 5) {
                endGame(winTally, lossTally);
                clickTally = 0;
            }
        });
    });
}

runGame();