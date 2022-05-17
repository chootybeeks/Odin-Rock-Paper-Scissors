//Add querySelector for each button
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//Add eventListener and console log for each button click
rock.addEventListener('click', newPlayRound);
paper.addEventListener('click', newPlayRound);
scissors.addEventListener('click', newPlayRound);

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
