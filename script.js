const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const decision = choices[Math.floor(Math.random() * choices.length)];
  return decision;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result === "Tie!") {
    console.log("It's a Tie!");
  } else if (result === "Player") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

function getPlayerChoice() {
  while (true) {
    const choice = prompt("Please choose Rock, Paper, or Scissors");
    if (choice === null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (choices.includes(choiceInLower)) {
      return choiceInLower;
    } else {
      console.log("Invalid choice. Please choose again.");
    }
  }
}

function playGame() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Welcome!");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    const roundWinner = checkWinner(playerSelection, computerSelection);
    if (roundWinner === "Player") {
      scorePlayer++;
    } else if (roundWinner === "Computer") {
      scoreComputer++;
    }
  }
  console.log("Game Over");
  if (scorePlayer > scoreComputer) {
    console.log("Player wins the game!");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
