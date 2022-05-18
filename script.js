//game() will contain all logic in the game
function game() {
    let playerPoints = 0
    let computerPoints = 0
    let roundNumber = 0;

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
        
            //Call winner function to check who wins
            winner(this.innerText, computerPlay)
            
            //call gameEnd when roundNumber > 5
            if (roundNumber === 5) {
                gameEnd(playerChoices,currentRound)
            }
        })
    })
}
    function winner(player, computer) {
        const result = document.querySelector('.winner')
        const playerPointBoard = document.querySelector('.player-points')
        const computerPointBoard = document.querySelector('.compuer-points')

        //player = player.toLowerCase()
        //computer = computer.toLowerCase()

        if (player === computer) {
            result.textContent = 'Tie'
        }
        else if (player == 'rock') {
            if (computer == 'scissors') {
                result.textContent = 'You win, rock beats scissors'
                playerPoints++
                playerPointBoard.textContent = playerPoints
            }
            else {
                result.textContent = 'You lose, paper covers rock'
                computerPoints++
                computerPointBoard.textContent = computerPoints
            }
        }
        else if (player == 'paper') {
            if (computer == 'rock') {
                result.textContent = 'You win, paper covers rock'
                playerPoints++
                playerPointBoard.textContent = playerPoints
            }
            else {
                result.textContent = 'You lose, scissors cuts paper'
                computerPoints++
                computerPointBoard.textContent = computerPoints
            }
        }
        else if (player == 'scissors') {
            if (computer == 'paper') {
                result.textContent = 'You win, scissors cuts paper'
                playerPoints++
                playerPointBoard.textContent = playerPoints
            }
            else {
                result.textContent = 'You lose, rock beats scissors'
                computerPoints++
                computerPointBoard.textContent = computerPoints
            }
        }
    }

    function gameEnd(playerChoices, roundNumber) {
        const choosePlay = document.querySelector('.play')
        const winner = document.querySelector('.winner')
        const retryButton = document.querySelector('.retry')

        playerChoices.forEach(choice => {
            choice.style.display = 'none'
        })

        choosePlay.innerText = 'Game finished!'
        roundNumber.style.display = 'none'
        
        if (playerPoints > computerPoints) {
            winner.innerText = 'You Won!'
        }
        else if (playerPoints < computerPoints) {
            winner.innerText = 'You Lost!'
        }
        else {
            winner.innerText = 'Draw.'
        }

        retryButton.innerText = 'Try Again?'
        retryButton.style.display = 'flex'
        retryButton.addEventListener('click', () => {
            window.location.reload()
        })
    }
    playRound()
}

game()
