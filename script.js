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

function winner(player, computer) {
    const result = document.querySelector('.winner')
    const playerPoints = document.querySelector('player-points')
    const computerPoints = document.querySelector('compuer-points')

    if (player === computer) {
        result.textContent = 'Tie'
    }
    else if (player == 'rock') {
        if (computer == 'scissors') {
            result.textContent = 'You win, rock beats scissors'
            playerPoints++
            playerPoints.textContent = playerPoints
        }
        else {
            result.textContent = 'You lose, paper covers rock'
            computerPoints++
            computerPoints.textContent = computerPoints
        }
    }
    else if (player == 'paper') {
        if (computer == 'rock') {
            result.textContent = 'You win, paper covers rock'
            playerPoints++
            playerPoints.textContent = playerPoints
        }
        else {
            result.textContent = 'You lose, scissors cuts paper'
            computerPoints++
            computerPoints.textContent = computerPoints
        }
    }
    else if (player == 'scissors') {
        if (computer == 'paper') {
            result.textContent = 'You win, scissors cuts paper'
            playerPoints++
            playerPoints.textContent = playerPoints
        }
        else {
            result.textContent = 'You lose, rock beats scissors'
            computerPoints++
            computerPoints.textContent = computerPoints
        }
    }
}

