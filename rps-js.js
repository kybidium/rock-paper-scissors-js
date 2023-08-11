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

//plays a five round game of rock-paper-scissors

function getPlayerChoice() {
    let choice = prompt("Pick Rock, Paper, or Scissors");
    if (!(choice.toLowerCase() == "rock"
    || choice.toLowerCase() == "paper"
    || choice.toLowerCase() == "scissors")) 
    {
        alert("Invalid choice!");
        getPlayerChoice();
    } else {
        //standardizes player input
        choice = (choice[0].toUpperCase() + 
            choice.slice(1).toLowerCase());

        return choice;
    }

}

function game() {
    let win_tally = 0;
    let loss_tally = 0;
    for (let i = 0; i<5; i++) {
        let p_choice = getPlayerChoice();
        let c_choice = getComputerChoice();

        if (p_choice != undefined) {
            let status = playRound(p_choice, c_choice);
            
            if (status == "win") {
                win_tally++;
                alert(`You Win! ${p_choice} beats ${c_choice}!`);
            } else if (status == "loss") {
                alert(`You Lose! ${c_choice} beats ${p_choice}!`);
                loss_tally++;
            } else {
                alert("It's a draw!");
            }
        } else {
        return;
        }
    }

    if (win_tally == loss_tally) {
        alert(`You drew ${win_tally}-${loss_tally}! \
            Better luck next time!`);
    } else if (win_tally > loss_tally) {
        alert(`Well done! You won ${win_tally}-${loss_tally}!`);
    } else {
        alert(`Shame! You lost ${win_tally}-${loss_tally}`);
    }
}

game();