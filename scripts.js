


const choiceButtons = document.querySelectorAll(".button");
const roundStatsPlayer = document.querySelector(".round-stats__player");
const roundStatsComputer = document.querySelector(".round-stats__computer");
const roundStatsResult = document.querySelector(".round-stats__result");
const nextButton = document.querySelector(".next-button");
const gameStatsPlayer = document.querySelector(".game-stats__player");
const gameStatsComputer = document.querySelector(".game-stats__computer");
const gameStatsResult = document.querySelector(".game-stats__result");
const newGameButton = document.querySelector(".new-game-button");

const gameChoices = ["rock", "paper", "scissors"];

const game = {
  playerScore: 0,
  computerScore: 0,
  roundInProgress: false,
};


// Get player's choice
const getPlayerChoice = (button) => {
  return button.id;
};

// Get computer's choice
const getComputerChoice = () => {
  return gameChoices[Math.floor(Math.random() * 3)];
};

// Activate button
const activateButton = (button) => {
  button.disabled = false;
};

// Deactivate button
const deactivateButton = (button) => {
  button.disabled = true;
};

// Update round stats
const updateRoundStats = (player, computer, result) => {
  roundStatsPlayer.textContent = `Player selection: ${player}`;
  roundStatsComputer.textContent = `Computer selection: ${computer}`;
  roundStatsResult.textContent = `Round result: ${result}`;
};

// Clear round stats
const clearRoundStats = () => {
  roundStatsPlayer.textContent = "Player selection:";
  roundStatsComputer.textContent = "Computer selection:";
  roundStatsResult.textContent = "Round result:";
};

// Update game stats
const updateGameStats = (result) => {
  const winGameStatement = "You win the game!";
  const loseGameStatement = "You lose the game!"
  if (result === "You win!") {
    game.playerScore++;
  } else if (result === "You lose!") {
    game.computerScore++;
  }

  gameStatsPlayer.textContent = `Player score: ${game.playerScore}`;
  gameStatsComputer.textContent = `Computer score: ${game.computerScore}`;

  if(game.playerScore === 3) {
    gameStatsResult.textContent = `Game result: ${winGameStatement}`;
  } else if (game.computerScore === 3) {
    gameStatsResult.textContent = `Game result: ${loseGameStatement}`;
  }

  if (game.playerScore === 3 || game.computerScore === 3) {
    endGame();

  } else {
    game.roundInProgress = false;
    activateButton(nextButton)  
  }

};

// Play a round
const playRound = (playerChoice) => {
  if (game.roundInProgress) return;

  const computerChoice = getComputerChoice();
  const winStatement = "You win!";
  const loseStatement = "You lose!";
  const tieStatement = "It's a tie!";
  let result;

  if (playerChoice === computerChoice) {
    result = tieStatement;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = winStatement;
  } else {
    result = loseStatement;
  }

  updateRoundStats(playerChoice, computerChoice, result);
  updateGameStats(result);
  game.roundInProgress = true;
  deactivateButton(choiceButtons);
  choiceButtons.forEach(button => {
    deactivateButton(button);
  })
};

// End game
const endGame = () => {
  choiceButtons.forEach(button => {
    deactivateButton(button);
  })
  deactivateButton(nextButton);
  activateButton(newGameButton);
};

// New game
const newGame = () => {
  game.playerScore = 0;
  game.computerScore = 0;
  gameStatsPlayer.textContent = "Player score: 0";
  gameStatsComputer.textContent = "Computer score: 0";
  gameStatsResult.textContent = "Game result:";
  clearRoundStats();
  choiceButtons.forEach(button => {
    activateButton(button);
  })
  deactivateButton(nextButton);
  deactivateButton(newGameButton);
  game.roundInProgress = false;
};

// Event listeners
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(getPlayerChoice(button));
  });
});

nextButton.addEventListener("click", () => {
  clearRoundStats();
  deactivateButton(nextButton);
  choiceButtons.forEach(button => {
    activateButton(button);
  })
  game.roundInProgress = false;
});

newGameButton.addEventListener("click", () => {
  newGame();
});


