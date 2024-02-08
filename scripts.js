// Definice možných tahů
const CHOICES = ["rock", "paper", "scissors"];

// Získání vstupu od uživatele
const getUserChoice = () => {
  let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
  return CHOICES.includes(choice) ? choice : getUserChoice();
};

// Generování výběru počítače
const getComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

// Určení výsledku kola
const determineRoundWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return "It's a tie!";
  if ((playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")) {
    return "You win!";
  }
  return "You lose!";
};

// Hra
const playGame = () => {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 3 && computerScore < 3) {
    const playerChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    const result = determineRoundWinner(playerChoice, computerChoice);

    if (result === "You win!") {
      playerScore++;
    } else if (result === "You lose!") {
      computerScore++;
    }

    alert(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}, Result: ${result}\nPlayer Score: ${playerScore}, Computer Score: ${computerScore}`);
  }

  alert(playerScore === 3 ? "You win the game!" : "You lose the game!");
};

// Spuštění hry
playGame();