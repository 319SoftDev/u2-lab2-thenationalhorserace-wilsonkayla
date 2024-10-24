console.log("Script Running");



const winnerDiv = document.querySelector("#winner");


let blue_position = 1;
let pink_position = 1;
let brown_position = 1;

// Query Selectors Here
const horses = {
  blue:{
    position: 1,
    button: document.querySelector("#bllue-button"),
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

// OnClick Functions Here
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  checkWinner(blue_position, "Blue"); // Check for winner
};

const advancePink = (e) => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  checkWinner(pink_position, "Pink"); // Check for winner
};

const advanceBrown = (e) => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  checkWinner(brown_position, "Brown"); // Check for winner
};

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

const restartGame =() => {
  Object.values(horses).forEach(horse=> {
    horse.position = 1;
    horse.button.disabled = false;
    changePosition(horse.horse ,horse.position);
  });
  winnerDiv.innerHTML="";
  restartGame.style.display= "none";
}
const changePosition = (horse, position) => {
  if (position <= 5) {
    horse.style.setProperty('grid-column', position);
  }
};
// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);
restartButton.addEventListener("click",restartGame);