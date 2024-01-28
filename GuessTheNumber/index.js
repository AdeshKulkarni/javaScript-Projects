let randomNumber = parseInt(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");

const loworhi = document.querySelector(".lowOrHi");

const startover = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];

let numGuess = 1;

let playGame = true;

// user is allow for playing game
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1!");
  } else if (guess > 100) {
    alert("Please enter a number less than 100!");
  } else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      displayGuesses(guess);
      displayMessage(`Game Over! Number was ${randomNumber}`);
      endGame();
    }
    else{
        displayGuesses(guess);
        cheakGuess(guess);
    }
  }
}

function cheakGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed correct!`);
        endGame();
    }
    else {
        displayMessage(`Wrong!`);
        if (guess < randomNumber) {
            displayLow("Too Low! Try again!");
        }
        else {
            displayHigh("Too High! Try again!");
        }
    }   
}
function displayGuesses(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
    loworhi.innerHTML = `<h1>${message}</h1>`;
}


function endGame() {
   userInput.value = "";
   userInput.setAttribute("disabled", "");
   p.classList.add("button");
   p.innerHTML = `<h1 id="newGame">Start New Game</h1>`;
   startover.appendChild(p);
   playGame = false;
   newGame();
}

function newGame() {
const newGameButton = document.querySelector("#newGame");
newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100) + 1;
    prevGuess = [];
    
    numGuess =1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startover.removeChild(p);
    playGame = true;

});
}
