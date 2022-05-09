function computerPlay() {
    //This variable contains the maximum value that the randomNumber will generate.
    const max = 9;
    
    let computerSelection;
    let randomNumber;
    //Generate a random number between 1 and max (9)
    randomNumber = Math.floor(Math.random() * max) + 1;
    
    //If the random number is 1 - 3, the guess is Rock
    if (randomNumber < 4) {
        return computerSelection = "Rock";
    }
    //If the random number is 4 - 6, the guess is Paper
    else if (randomNumber >= 4 || randomNumber <= 6) {
    return computerSelection = "Paper";
    }
    //If the random number is 7 - 9. the guess is Scissors
    else if (randomNumber > 6 || randomNumber <= 9) {
    return computerSelection = "Scissors";
    }
    }

function userPlay() {
    let playerSelection = prompt("Rock, Paper, or Scissors?: ").toLowerCase();
    return playerSelection;
}