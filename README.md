# Odin-Rock-Paper-Scissors

This is my first JavaScript program for The Odin Project. This program pits the user against the computer in 5 rounds of Rock-Paper-Scissors, and outputs the winner of the match to the console.

This was overall a pretty simple program, though I did run into some issues with my first version of the code and I had to go back and rewrite a couple functions as I ran into errors that I had to fix. Nonetheless, here is the algorithm that I created for this program.

Create function computerPlay()
    Choose random number 1 - 3 to determine rock, paper, or scissors for the computer
    return the computerSelection as a string

Declare global variables computerScore and playerScore
    Initialize both to 0

Create function playRound()
    Function accepts the paramaters computerSelection and playerSelection
    Use if statements and the rules of Rock-Paper-Scissors to determine the winner
        if computer wins, add one to computerScore
        if player wins, add one to playerScore
        else, it's a tie, do not update either score
    return a string naming the winner, and the current score for that round

Create function game()
Declare variable numberOfGames and initialize it to 5
Using numberOfGames to control the number of loops, create for loop
    The variable playerSelection is a prompt to the user to input a string: rock, paper, or scissors
    Use toLowerCase() method to make user input case-insensitive
    Print to the console the playRound() function with playerSelection and computerSelection arguments
Use if statement to determine the overall winner
    if player wins, output winning message and the final score
    else if computer wins, output losing message and the final score
    else, output that the game was a draw and the final score

Call game() function to run the game upon opening the webpage