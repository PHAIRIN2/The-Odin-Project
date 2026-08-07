function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice:");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let cleanedHumanChoice = humanChoice.toLowerCase();

  if (cleanedHumanChoice === "rock" && 
    computerChoice === "scissors") {
    return "You win!";
  } else if (cleanedHumanChoice === "paper" && 
    computerChoice === "rock") {
      return "You win!"
    } else if (cleanedHumanChoice === "scissors" &&
      computerChoice === "paper") {
        return "You win!"
      } else if (computerChoice === "rock" && humanChoice === "scissors") {
        return "You lose."; 
      } else if (computerChoice === "paper" &&
        humanChoice === "rock") {
          return "You lose.";
        } else if (computerChoice === "scissors" && 
          humanChoice === "paper") {
            return "You lose"
          }
}

function playGame() {

  for (let round = 1; round <= 5; round++) {
    console.log(`---Round ${round}---`);
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(); 
    
    const result = playRound(humanSelection, computerSelection);
    console.log(result)
  }
}
