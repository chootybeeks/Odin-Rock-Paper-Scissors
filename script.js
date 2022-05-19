//Create h1 elements to display the userChoice and computerChoice
const userChoiceDisplayElement = document.createElement('h1');
const computerChoiceDisplayElement = document.createElement('h1')

//Create element to display the result of the round
const resultDisplayElement = document.createElement('h1')

//Create parent element to append the previous elements to
const gamePlay = document.getElementById('game')
gamePlay.append(userChoiceDisplayElement, computerChoiceDisplayElement, resultDisplayElement)

//The array of choices that the computer and user will choose from
const choicesArray = ['rock','paper','scissors']

//For each loop to create the three clickable buttons
choicesArray.forEach(choice => {
    const choiceButton = document.createElement('button')
    choiceButton.id = choicesArray[choice]
    choiceButton.textContent = choicesArray[choice]
    choiceButton.addEventListener('click', clickEvents)
})