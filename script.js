function computerPlay() {
    //This variable contains the maximum value that the randomNumber will generate.
    const max = 9;
    
    let computerSelection;
    let randomNumber;
    //Generate a random number between 1 and max (9)
    randomNumber = Math.floor(Math.random() * max) + 1;
    
    //If the random number is 1 - 3, the guess is Rock
    if (randomNumber < 4) {
        return computerSelection = "rock";
    }
    //If the random number is 4 - 6, the guess is Paper
    else if (randomNumber >= 4 || randomNumber <= 6) {
    return computerSelection = "paper";
    }
    //If the random number is 7 - 9. the guess is Scissors
    else if (randomNumber > 6 || randomNumber <= 9) {
    return computerSelection = "scissors";
    }
    }

function userPlay() {
let playerSelection = prompt("Rock, Paper, or Scissors?: ").toLowerCase();
return playerSelection;
}

function playRound(playerSelection, computerSelection) {
//Rock beats scissors, scissors beats paper, and paper beats rock. If both are the same, then there is a draw.
let result;
if (playerSelection === computerSelection) {
return result = ("Draw. Nobody wins.");
}

if (playerSelection == "rock" && computerSelection == "paper") {
return result = ("You Lose! Paper beats Rock");
}

if (playerSelection == "paper" && computerSelection == "scissors") {
return result = ("You Lose! Scissors beats Paper");
}

if (playerSelection == "scissors" && computerSelection == "rock") {
return result = ("You Lose! Rock beats Scissors");
}

if (playerSelection == "scissors" && computerSelection == "paper") {
return result = ("You Win! Scissors beats Paper");
}

if (playerSelection == "paper" && computerSelection == "rock") {
return result = ("You Win! Paper beats Rock");
}

if (playerSelection == "rock" && computerSelection == "scissors") {
return result = ("You Win! Rock beats Scissors");
}
}   
    
    
