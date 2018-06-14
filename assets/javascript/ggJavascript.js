
window.onload = function () {

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var letters = "abcdefghijklmnopqrstuvwxyz"
    var guesses = " ";
    var letterGuessed = 'a';

    // show variables
    updateHTML();


    // this function will run every time we press a key
    document.onkeyup = function (event) {


        // store the key that was just pressed
        var keyPressed = event.key;

        // check if key pressed was a letter
        if (keyPressed.length === 1 && letters.includes(keyPressed)) {


            // if guessed the correct letter
            if (keyPressed == letterGuessed) {
                wins++;

                // reset game
                var guessesLeft = 9;
                pickRandLetter();
            }
            else {

                guessesLeft--;
                guesses += keyPressed;
                guesses += "";

            }
            // update html
            updateHTML();
        }


    }
}

// makes the html show the values of our js file
function updateHTML() {
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = guesses;
}

// TODO: make it pick random letter
function pickRandLetter() {
    return 'f';
}