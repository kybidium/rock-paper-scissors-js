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

//plays a five round game of rock-paper-scissors
function game() {
    let winTally = 0;
    let lossTally = 0;
    for (let i = 0; i<5; i++) {
        let pChoice = getPlayerChoice();
        let cChoice = getComputerChoice();

        if (pChoice != undefined) {
            let status = playRound(pChoice, cChoice);
            
            if (status == "win") {
                winTally++;
                alert(`You Win! ${pChoice} beats ${cChoice}!`);
            } else if (status == "loss") {
                alert(`You Lose! ${cChoice} beats ${pChoice}!`);
                lossTally++;
            } else {
                alert("It's a draw!");
            }
        } else {
        return;
        }
    }

    if (winTally == lossTally) {
        alert(`You drew ${winTally}-${lossTally}! \
            Better luck next time!`);
    } else if (winTally > lossTally) {
        alert(`Well done! You won ${winTally}-${lossTally}!`);
    } else {
        alert(`Shame! You lost ${winTally}-${lossTally}`);
    }
}

game();