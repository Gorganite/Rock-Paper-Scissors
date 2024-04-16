const choices = ["Rock", "Paper", "Scissors"];

//The function for the computer's random choices
function getComputerChoice() {
  const decision = choices[Math.floor(Math.random() * choices.length)];
  return decision;
}

// Function to determine the winner
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  }
  // If it's a player win
  else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")) {
    return "Player";
  }
  // If it's a computer win
  else {
    return "Computer";
  }
}

// Function to play a round
function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result === "Tie!") {
    return "It's a Tie!";
  } else if (result === "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
