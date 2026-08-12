let playerScore = 0;
let computerScore = 0;

// create Element
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const rockBtn = document.querySelector("#rockBtn");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

// get Computer chioce
function computerchoice() {
  const choice = ["paper", "rock", "scissors"];
  const randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}


// function every each round game
function playRound(playerSelection) {
  // if who get 5 scores the game over
  if (computerScore === 5 || playerScore === 5) return;

  const computerSelection = computerchoice();
  let roundResult = "";

  if (playerSelection === computerSelection) {
    roundResult = "it's tie, both you made the same chioce";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    roundResult = `you win! you ${playerSelection} and computer ${computerSelection}`;
  } else {
    computerScore++;
    roundResult = `computer win! computer ${computerSelection} and you ${playerSelection}`;
  }

  resultsDiv.textContent = roundResult;
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  checkWinner();

}
function checkWinner() {
  if (computerScore === 5) {
    resultsDiv.textContent = "Game over, The computer reached 5 points first";
    resultsDiv.classList.add("final-winner");
  } else if (playerScore === 5) {
    resultsDiv.textContent =
    "congratulations! you are the first winner to reach 5 points first";
    resultsDiv.classList.add("final-winner");
  }
}

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
