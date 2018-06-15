
window.onload = function () {

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var letters = "abcdefghijklmnopqrstuvwxyz";

    var hangWord; // stores the partial word with guessed letters
    var userGuesses = " ";
    var wordGuessed = "";

    // pick random letter
    wordGuessed = randWord();
    console.log("My Guess: " + wordGuessed);

    // show the word, but with each letter hidden
    hangWord = "";
    for (var i in wordGuessed) {

        if (userGuesses.includes(wordGuessed[i])) {
            hangWord += wordGuessed[i]
        }
        else {
            hangWord += '_';
        }

        // add a space
        hangWord += " ";
    }


    document.getElementById("partialWord").innerHTML = String(hangWord); // show partial word

    // this function will run every time we press a key
    document.onkeyup = function (event) {

        // store the key that was just pressed
        var keyPressed = event.key;

        // check if key pressed was a letter
        if (keyPressed.length === 1 && letters.includes(keyPressed)) {

            console.log("-- " + keyPressed + " is a letter");

            // check if users pressed a new letter 
            if (!userGuesses.includes(keyPressed)) {

                // recude guesses remaining
                guessesLeft -= 1;

                userGuesses += keyPressed + " "; // update user guesses

                // show the word, but with each letter hidden
                hangWord = "";
                for (var i in wordGuessed) {

                    if (userGuesses.includes(wordGuessed[i])) {
                        hangWord += wordGuessed[i]
                    }
                    else {
                        hangWord += '_';
                    }

                    // add a space
                    hangWord += " ";
                }

                // checks if the user has guessed every letter of the word correct.
                // -- if the word does not have any letters missing
                if (!hangWord.includes('_')) {

                    wins++; // you win!

                    // show last guess
                    document.getElementById("lastGuess").innerHTML = String(wordGuessed);

                    // reset guesses
                    guessesLeft = 9;

                    // clear old guesses
                    userGuesses = "";

                    // new guess
                    wordGuessed = randWord();
                    console.log("My Guess: " + wordGuessed);

                    // show the word, but with each letter hidden
                    hangWord = "";
                    for (var i in wordGuessed) {

                        if (userGuesses.includes(wordGuessed[i])) {
                            hangWord += wordGuessed[i]
                        }
                        else {
                            hangWord += '_';
                        }

                        // add a space
                        hangWord += " ";
                    }

                }


                // if out of guesses
                if (guessesLeft < 1) {

                    losses++; // you lose!

                    // show last guess
                    document.getElementById("lastGuess").innerHTML = String(wordGuessed);

                    // reset guesses
                    guessesLeft = 9;

                    // clear old guesses
                    userGuesses = "";

                    // new guess
                    wordGuessed = randWord();
                    console.log("My Guess: " + wordGuessed);

                    // show the word, but with each letter hidden
                    hangWord = "";
                    for (var i in wordGuessed) {

                        if (userGuesses.includes(wordGuessed[i])) {
                            hangWord += wordGuessed[i]
                        }
                        else {
                            hangWord += '_';
                        }

                        // add a space
                        hangWord += " ";
                    }


                }

            }

        }

        // print results
        document.getElementById("wins").innerHTML = String(wins);
        document.getElementById("losses").innerHTML = String(losses);
        document.getElementById("guessesRemaining").innerHTML = String(guessesLeft);
        document.getElementById("guessesSoFar").innerHTML = String(userGuesses);
        document.getElementById("partialWord").innerHTML = String(hangWord);
    } // end onkeyup



    function randWord() {
        var words = ["size", "submit", "cent", "awkward","bagpipes","banjo","crypt","dwarves","fishhook",
        "fjord", "haiku", "oxygen", "pajama","yacht", "boxcar",
        "cobweb", "cycle", "absurd", "buffalo", "facking",
        "abyss","blizzard", "jelly","injury", "jigsaw","jogging",
        "kayak", "kazoo", "icebox", "keyhole", "microwave"
        ];

        var output = words[Math.floor(Math.random() * words.length)];
        return output;

    }

} // end window.onload






