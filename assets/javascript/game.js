var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesArray = [];
var guessesArrayObject 

var winsNumber = document.getElementById("wins-number");
var lossesNumber = document.getElementById("losses-number");
var guessesNumber = document.getElementById("guesses-number");
var guessesArrayObject = document.getElementById("guesses-text");

document.onkeyup = function(event) {

  var userGuess = event.key;

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

      if (userGuess === computerGuess) {
        wins++;
        guesses = 9;
        guessesArray = []
      } 

      else {
        guesses--;
        guessesArray.push(userGuess);
        console.log(guessesArray)
      }

      if (guesses === 0) {
        losses++;
        guesses = 9;
        guessesArray = [];
      }

  winsNumber.textContent = wins;
  lossesNumber.textContent = losses;
  guessesNumber.textContent = guesses;
  guessesArrayObject.textContent = guessesArray;
}

};
