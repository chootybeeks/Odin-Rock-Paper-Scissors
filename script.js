//Add querySelector for each button
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//Add eventListener and console log for each button click
rock.addEventListener('click', newPlayRound);
paper.addEventListener('click', newPlayRound);
scissors.addEventListener('click', newPlayRound);

//Rewrite playRound function to accept (event) as an argument
function newPlayRound(event) {
    //Declare variables to keep track of
    let playerScore;
    let computerScore;
    let roundNumber = 0;
    let results;

    //Declare and initialize player and computer selections
    let playerSelection = event.target.getAttribute('id');
    let computerSelection = computerPlay();
    results = playRound(playerSelection, computerSelection);
    console.log(results);
    
}

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

function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;
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
    
//function game() {
//For loop will all the game to be played a pre-determined number of times, in this case 5 times.
//let numberOfGames = 5;

/*for (let i = 0; i < numberOfGames; i++) {
    
    let playerSelection = prompt("Rock, Paper, or Scissors?: ");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}*/
//If statement to determine the winner, if there is one
/*if (playerScore > computerScore) {
    console.log(`You beat the computer! Final score: ${playerScore} to ${computerScore}`);
}
else if (playerScore < computerScore) {
    console.log(`The computer beat you! Final score: ${computerScore} to ${playerScore}`);
}
else console.log(`Draw. Final score: ${playerScore} to ${computerScore}`);
}*/

//game();


//});