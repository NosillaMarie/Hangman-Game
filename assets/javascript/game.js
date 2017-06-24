//our global variables other variables used
var count = 0;
var remainingGuesses = 18;


//Array of words for hangman
var hangArray = ["sheriff", "outlaw", "jail", "robber", "gunslinger, wanted"];


//empty arrays to hold letters that are guessed
var answerToGuess = [];
var badGuess = [];


var theWord = hangArray[Math.floor(Math.random() * hangArray.length)];


//computer displays word with underscores 
function startUp() {
    for (var i = 0; i < theWord.length; i++) {

        // answerToGuess[i] = "_";
        answerToGuess.push("_");
    }

    var n = answerToGuess.join(" ");
    document.getElementById("answer").innerHTML = n;
}

startUp();
//computer take key pressed
document.onkeyup = function (event) {

    var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();

    document.getElementById("letter").innerHTML = guessedLetter;


    if (guessedLetter.length > 0) {
//        console.log("guessedLetter.lenght > 0"); 
        for (var j = 0; j < theWord.length; j++) {
            console.log("j:" + j); 
            if (theWord[j] === guessedLetter) {
//                console.log("theWord[j] == guessedLetter"); 
                answerToGuess[j] = guessedLetter;
                    if (win()) {
                    }
            }
            if (guessedLetter !== theWord[j]) {
                if (badGuess.indexOf(guessedLetter) === -1) {
                badGuess.push(guessedLetter);
                remainingGuesses--;
                document.getElementById("logged-guess").innerHTML = badGuess;  
                }
            }
            if (remainingGuesses === 0) {
                var confirmAgain = confirm("Game Over! Would you like to play again?");
                console.log(confirmAgain);
                if (confirmAgain === true) {
                    location.reload();
                }
            }
        }
    }
    document.getElementById("counter").innerHTML = "Guesses: " + remainingGuesses;
    document.getElementById("answer").innerHTML = answerToGuess.join(" ");
};

function win() {
    var checkUserWord = answerToGuess.join("");
    var checkCompWord = theWord;
    if (checkUserWord === checkCompWord) {
        alert("You Win!");
        location.reload();
    }
};




