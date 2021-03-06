//global variable declarations
let userSelection
let computerSelection
let winner
let userScore = 0
let computerScore = 0

//Create h1 elements to display the userChoice and computerChoice
const userChoiceDisplayElement = document.createElement('h1');
const computerChoiceDisplayElement = document.createElement('h1')

//Create element to display the result of the round
const resultDisplayElement = document.createElement('h1')

//Create elements to display userScore and computerScore
const computerScoreDisplayElement = document.createElement('h1')
const userScoreDisplayElement = document.createElement('h1')

//Create parent element to append the previous elements to
const gamePlay = document.getElementById('game')
gamePlay.append(userChoiceDisplayElement, computerChoiceDisplayElement, resultDisplayElement, computerScoreDisplayElement, userScoreDisplayElement)

//The array of choices that the computer and user will choose from
const choicesArray = ['rock','paper','scissors']

//Function that contains all that will happen when the user clicks a button
const clickEvents = (event) => {
    userSelection = event.target.id 
    userChoiceDisplayElement.textContent = `You chose: ${userSelection}!`

    computerSelection = choicesArray[Math.floor(Math.random() * 3)]
    computerChoiceDisplayElement.textContent = `The computer chose: ${computerSelection}!`

    checkWinner()
    game()
}

//For each loop to create the three clickable buttons
choicesArray.forEach(choice => {
    const choiceButton = document.createElement('button')
    choiceButton.id = choice
    choiceButton.textContent = choice
    choiceButton.addEventListener('click', clickEvents)
    gamePlay.appendChild(choiceButton)
})

const checkWinner = () => {
    switch (userSelection + computerSelection) {
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            resultDisplayElement.textContent = 'You Lose the Round!'
            computerScore++
            break
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
            userScore++
            resultDisplayElement.textContent = 'You Win the Round!'
            break
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            resultDisplayElement.textContent = 'This Round is a Draw!'
            break
    }
}

const game = () => {
    computerScoreDisplayElement.textContent = `CPU: ${computerScore}`
    userScoreDisplayElement.textContent = `You: ${userScore}`

    if (userScore === 5 || computerScore === 5) {
            if (computerScore > userScore) {
            resultDisplayElement.textContent = 'You lost the game!'
        }
        else if (userScore > computerScore) {
            resultDisplayElement.textContent = 'You won the game!'
        }
        else {
            resultDisplayElement.textContent = 'The game is a draw!'
        }
    }
}
