console.log("Script Running");

const winnerDiv = document.querySelector("#winner");
const restartButton = document.querySelector("#restart-button"); // Assuming you have a restart button

let horses = {
  blue: {
    position: 1,
    button: document.querySelector("#blue-button"),
    horse: document.querySelector("#blue-horse")
  },
  pink: {
    position: 1,
    button: document.querySelector("#pink-button"),
    horse: document.querySelector("#pink-horse")
  },
  brown: {
    position: 1,
    button: document.querySelector("#brown-button"),
    horse: document.querySelector("#brown-horse")
  }
};

console.log(horses);

// Check for a winner
const checkWinner = (position, color) => {
  console.log(`Checking winner: ${color} at position ${position}`);
  if (position === 5) {
    winnerDiv.innerHTML = `${color} is the Winner!`;
    console.log(`${color} has won!`);
    Object.values(horses).forEach(horse => horse.button.disabled = true);
    restartButton.style.display = "block";
  }
};

const changePosition = (horse, position) => {
  if (position <= 5) {
    horse.style.setProperty('grid-column', position);
  }
};

const advance = (e) => {
  const color = e.target.dataset.color; // Use data attribute for color
  horses[color].position += 1;
  changePosition(horses[color].horse, horses[color].position);
  horses[color].horse.alt = `${color} horse at position ${horses[color].position} out of 5`;
  checkWinner(horses[color].position, color);
};

const restartGame = () => {
  Object.values(horses).forEach(horse => {
    horse.position = 1;
    horse.button.disabled = false;
    changePosition(horse.horse, horse.position);
  });
  winnerDiv.innerHTML = "";
  restartButton.style.display = "none";
};

// Event Listeners
Object.values(horses).forEach(horse => {
  horse.button.addEventListener("click", advance);
});

// Restart button event listener
restartButton.addEventListener("click", restartGame);
