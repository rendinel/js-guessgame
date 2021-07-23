
//we define the random number outside so it have global scope
let computerGuess;
//empty array we populate with the user value
let userGuesses = [];
//attempt count start at 0,we add one to the attempt and display in the browser inside compareGuess
let attempts = 0;

//third step we define the maxguesses at 0,then we define that in easy mode we have 10 and in hardmode we have 5 maxguesses and
// we correct the if statements that run the game if we are in the maxguess attempt we choose or it will show us a message that we have lost
let maxGuesses;
let low = 1;
let high = 100;

function updateRange() {
  const rangeOutput = document.getElementById("rangeOutput");
  rangeOutput.innerText = `${low} - ${high}`;
  rangeOutput.style.marginLeft = low + "%";
  rangeOutput.style.marginRight = 100 - high + "%";
  rangeOutput.classList.add("flash");

  const lowValue = document.getElementById("low");
  lowValue.style.flex = low + "%";
  lowValue.style.background = "#ef7b54";

  const space = document.getElementById("space");
  space.style.flex = high - low + "%";
  space.style.background = "#83E1D0";

  const highValue = document.getElementById("high");
  if (high == 100) highValue.style.flex = 0;
  highValue.style.flex = 100 - high + "%";
  highValue.style.background = "#ef7b54";
}
// fourth step we a function that display the button new game and set it to read only,we create a function that start when we click
// on the newgame button and reload the page newGame(), we make that button appear at the end of every game either the lost one and the win one
function gameEnded() {
  document.getElementById("newGameButton").style.display = "inline";
  document.getElementById("inputBox").setAttribute("readonly", "readonly"); // (attr name, attr value)
}

function newGame() {
  window.location.reload();
}
// first step, we define a function thst launch on the page load(<body onload="init()">) and hide the gamearea and the newgamebutton,
//then we create a function that hide the welcome screen and display the gamearea and launch if we click on the correspective button
function init() {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
}

function startGameView() {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
}

function easyMode() {
  maxGuesses = 10;
  startGameView();
}

function hardMode() {
  maxGuesses = 5;
  startGameView();
}
//second step we put the user guess inside UserGuess and convert into a number,we push userGuess insdide the empty array userGuesses,and set this aray to be shown inside the html
//we compare the value showing some text corresponding to the value we typed and reset the value of the type to 0 if we lose
// this function start if we change the number on the input <input type="number" id="inputBox" min="1" max="100" onchange="compareGuess()" />
function compareGuess() {
  const userGuess = Number(document.getElementById("inputBox").value);
  userGuesses.push(" " + userGuess);
  document.getElementById("guesses").innerHTML = userGuesses;
  attempts++;
  document.getElementById("attempts").innerHTML = attempts;

  if (attempts < maxGuesses) {
    if (userGuess > computerGuess) {
      if (userGuess < high) high = userGuess;
      document.getElementById("textOutput").innerHTML =
        "Your guess is too high";
      document.getElementById("inputBox").value = "";
    } else if (userGuess < computerGuess) {
      if (userGuess > low) low = userGuess;
      document.getElementById("textOutput").innerHTML = "Your guess is too low";
      document.getElementById("inputBox").value = "";
    } else {
      document.getElementById("textOutput").innerHTML =
        "Correct! You got it in " + attempts + " attempts";
      gameEnded();
    }
  } else {
    if (userGuess > computerGuess) {
      document.getElementById("textOutput").innerHTML =
        "YOU LOSE!, <br> The number was " + computerGuess;
      gameEnded();
    } else if (userGuess < computerGuess) {
      document.getElementById("textOutput").innerHTML =
        "YOU LOSE!, <br> The number was " + computerGuess;
      gameEnded();
    } else {
      document.getElementById("textOutput").innerHTML =
        "Correct! You got it in " + attempts + " attempts";
      gameEnded();
    }
  }
  updateRange();
}