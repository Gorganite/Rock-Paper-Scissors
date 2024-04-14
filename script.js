const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const decision = choices[Math.floor(Math.random() * choices.length)];
}
getComputerChoice();
