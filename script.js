function computerPlay() {
    //This variable contains the maximum value that the randomNumber will generate.
    const max = 3;
    
    let computerSelection;
    let randomNumber;
    //Generate a random number between 1 and max (3)
    randomNumber = Math.floor(Math.random() * max) + 1;
    
    //If the random number is 1 computerSelection is Rock
    if (randomNumber == 1) {
        return computerSelection = "rock";
    }
    //If the random number is 2 computerSelection is Paper
    else if (randomNumber == 2) {
    return computerSelection = "paper";
    }
    //If the random number 3 computerSelection is Scissors
    else if (randomNumber == 3) {
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
    
    
