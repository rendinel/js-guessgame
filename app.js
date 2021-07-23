//we define the random number outside so it have global scope
let computerGuess;
//empty array we populate with the user value
let userGuesses = [];
//attempt count start at 0,we add one to the attempt and display in the browser inside compareGuess
let attempts = 0;
// first step, we define a function thst launch on the page load(<body onload="init()">) and hide the gamearea and the newgamebutton,
//then we create a function that hide the welcome screen and display the gamearea and launch if we click on the correspective button
function init() {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  console.log(computerGuess);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
}

function startGameView() {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
}

function easyMode() {
  startGameView();
}

function hardMode() {
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
  document.getElementById('attempts').innerHTML = attempts;
  if (userGuess > computerGuess) {
    document.getElementById("textOutput").innerHTML = "Your guess is too high";
    document.getElementById("inputBox").value = "";
  } else if (userGuess < computerGuess) {
    document.getElementById("textOutput").innerHTML = "Your guess is too low";
    document.getElementById("inputBox").value = "";
  } else {
    document.getElementById("textOutput").innerHTML = "Correct! You got it in " + attempts + " atttempts";
  }
}