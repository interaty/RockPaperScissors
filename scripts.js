// Cílem hry je zadat jedno ze slov rock, paper, scissors do nějakého vkládacího pole. Necháme zvolit i počítač z již předdefinovaných možností. Tyto volby navzájem porovnáme. Na základě herní logiky následně vypíšeme do konzole odpovídající hlášky o výhře, prohře, nebo remíze. 

// Budu potřebovat nějaký interface?

//   Nyní NE. Celá hra se bude hrát v konzoli a uživatel zapíše svou volbu do prompt pole.


// Jaký je cíl? :

//   Cílem je vypsat do konzole, jestli uživatel vyhrál, prohrál, nebo se jedná o remízu.


// Pseudocode: 

//   1. vytvořit funkci která vyzve uživatele pro zadání své volby. Je potřeba zajistit, aby tyto volby byly "rock, paper, nebo scissors". 
//   2. tento vstup převést na text malými písmeny 
//   3. uložit vstup do proměnné playerSelection
//   4. vytvořit funkci getComputerChoice, která si zvolí náhodně z pole [rock, paper, scissors] jednu z voleb a uloží jej do proměnné
//   5. vytvořit funkci, která vezme dva parametry 1. userChoice, 2. computerChoice a porovná je. Na základě porovnání vypíše do konzole určitou hodnotu a navrátí jí  


// const playerSelection = prompt("Zadejte Rock, Paper nebo Scissors");

// const getUserChoice = () => {
//   const playerSelection = prompt("Zadejte Rock, Paper nebo Scissors").toLowerCase();

//   if (playerSelection === null) {
//     return null;
//   }

//   if (["rock", "paper", "scissors"].includes(playerSelection)) {
//     console.log(playerSelection);
//     return playerSelection;
//   } else {
//     alert(`Je potřeba vybrat "Rock", "Paper" nebo "Scissors!"`);
//     return getUserChoice();
//   }
// };

// const getComputerChoice = () => {
//   const gameChoices = ["rock", "paper", "scissors"];
//   const randomIndex = Math.floor(Math.random() * gameChoices.length);
//   const computerChoice = gameChoices[randomIndex];

//   return computerChoice;
// };


// const gameRound = (user, computer) => {
//   if (user === computer) {
//     return `It's a tie!`;
//   } else if(
//     (user === "rock" && computer === "scissors") ||
//     (user === "paper" && computer === "rock") ||
//     (user === "scissors" && computer === "paper")
//   ) { 
//     return `You win!`;
//   } else return `You lose!`;
// };

// const playGame = () => {
//   const playerChoice = getUserChoice();
//   const computerChoice = getComputerChoice();
//   const result = gameRound(playerChoice, computerChoice);
//   alert(`Player choice: ${playerChoice}, Computer choice: ${computerChoice} and ${result}`);
// }

// playGame();

// const playGame = () => {
//   let playerScore = 0;
//   let computerScore = 0;

//   while (playerScore < 3 && computerScore < 3) {
//     const playerChoice = getUserChoice();
//     const computerChoice = getComputerChoice();
//     const result = gameRound(playerChoice, computerChoice);

//     if (result === "You win!") {
//       playerScore++;
//     } else if (result === "You lose!") {
//       computerScore++;
//     }

//     alert(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}, Result: ${result}\nPlayer Score: ${playerScore}, Computer Score: ${computerScore}`);
//   }

//   if (playerScore === 3) {
//     alert("You win!");
//   } else {
//     alert("You lose!");
//   }
// };

// playGame();


// // Definice možných tahů
// const CHOICES = ["rock", "paper", "scissors"];

// // Získání vstupu od uživatele
// const getUserChoice = () => {
//   let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
//   return CHOICES.includes(choice) ? choice : getUserChoice();
// };

// // Generování výběru počítače
// const getComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

// // Určení výsledku kola
// const determineRoundWinner = (playerChoice, computerChoice) => {
//   if (playerChoice === computerChoice) return "It's a tie!";
//   if ((playerChoice === "rock" && computerChoice === "scissors") ||
//       (playerChoice === "paper" && computerChoice === "rock") ||
//       (playerChoice === "scissors" && computerChoice === "paper")) {
//     return "You win!";
//   }
//   return "You lose!";
// };

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