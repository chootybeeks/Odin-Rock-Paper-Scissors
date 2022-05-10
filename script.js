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

let computerScore, playerScore;
function playRound(playerSelection, computerSelection) {
//Rock beats scissors, scissors beats paper, and paper beats rock. If both are the same, then there is a draw.
if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return (`You win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`);
}
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return (`You lose! Paper covers Rock. Score: ${playerScore} to ${computerScore}`);
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return (`You lose! Scissors cuts Paper. Score: ${playerScore} to ${computerScore}`);
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return (`You win! Paper covers Rock. Score: ${playerScore} to ${computerScore}`);
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return (`You win! Scissors cuts Paper. Score: ${playerScore} to ${computerScore}`);
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return (`You lose! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`);
    }
    else {
        return (`Draw. Nobody wins. Score: ${playerScore} to ${computerScore}`);
    }
}   
    
function game() {

}

game();
