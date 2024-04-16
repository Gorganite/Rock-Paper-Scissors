const choices = ["rock", "paper", "scissors"]

//The function for the computer's random choices
function getComputerChoice() {
  const decision = choices[Math.floor(Math.random() * choices.length)]
  return decision
}

// Function to determine the winner
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!"
  }
  // If it's a player win
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) {
    return "Player"
  }
  // If it's a computer win
  else {
    return "Computer"
  }
}

// Function to play a round
function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection)
  if (result === "Tie!") {
    return "It's a Tie!"
  } else if (result === "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}

//5 round game
function playGame(){
  console.log("Welcome!")
  for (let i = 0; i < 5; i++) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult); 
  }
}

playGame()