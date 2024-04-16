const choices = ["rock", "paper", "scissors"];

//The function for the computers random choices 
function getComputerChoice() {
  const decision = choices[Math.floor(Math.random() * choices.length)];
  return decision;
}

//If it is a tie
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return "Tie!"
}
//If it is a player win
    else if {
        (playerSelection === "rock" && computerSelection === "scissors")||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") 
 } {
        return "Player";
    }
//If it is a computer win
        else {
        return "Computer";
        }


//function which declares the results
function playGame(playerSelection, computerSelection) {
    const result = winnerResult(playerSelection, computerSelection);
    if (result === "Tie") {
        return "It's a Tie!"
    }
    else if (result === "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`

    }
}

else {
    return `You Lose... : ${computerSelection} beats ${playerSelection}`
}


getComputerChoice();
