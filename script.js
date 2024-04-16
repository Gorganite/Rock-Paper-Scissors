const choices = ["rock", "paper", "scissors"];

//The function for the computers random choices 
function getComputerChoice() {
  const decision = choices[Math.floor(Math.random() * choices.length)];
  return decision;
}

//If it is a tie
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return "It's a tie!"
}
//If it is a player win
    else if ( 
        (playerSelection === "rock" && computerSelection === "scissors")||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") 
    ) {
        return "Player Wins!";
    }
//If it is a computer win
        else {
        return "Computer Wins";
        }



function playGame(playerSelection, computerSelection) {
    const result = winnerResult(playerSelection, computerSelection);

}


getComputerChoice();
