//game() will contain all logic in the game
function game() {
    let playerScore;
    let computerScore;
    let roundNumber;
}

//playRound() with event listeners
function playRound() {
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

//Arrays for playerOptions and computerOptions
const playerChoices = [rockButton, paperButton, scissorsButton];
const computerChoices = ['rock', 'paper', 'scissors'];

playerChoices.forEach(choice => {
    choice.addEventListener('click', () => {
        const currentRound = document.querySelector('.round-counter')
        roundNumber++
        currentRound.innerText = `Rounds Left ${5 - roundNumber}`

        //Choose a random number between 0 and 2
        const randomNumber = Math.floor(Math.random() * 3)
        const computerPlay = computerChoices[randomNumber]
    })
})
}



