
window.onload = function () {

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var userGuesses = " ";
    var letterGuessed = " ";

    // show variables
    document.getElementById("wins").innerHTML = String(wins);
    document.getElementById("losses").innerHTML = String(losses);
    document.getElementById("guessesRemaining").innerHTML = String(guessesLeft);
    document.getElementById("guessesSoFar").innerHTML = String(userGuesses);
    
    // pick random letter
    letterGuessed = pickRandLetter();
    console.log("My Guess: "+ letterGuessed);

    
    // this function will run every time we press a key
    document.onkeyup = function (event) {

        // store the key that was just pressed
        var keyPressed = event.key;

        // check if key pressed was a letter
        if (keyPressed.length === 1 && letters.includes(keyPressed)) {

            console.log("-- Key is letter");

            // if guessed the correct letter
            if (keyPressed == letterGuessed) {

                console.log("---- Correct");

                wins++; // you win!
               
               
                // reset guesses
                guessesLeft = 9;

                // clear old guesses
                userGuesses = "";

                // pick new letter to guess
                letterGuessed = pickRandLetter();
                console.log("My Guess: "+ letterGuessed);

            }
            else {

                console.log("---- Wrong");


                // check if users already picked the letter
                if(keyPressed){

                }
               
                // recude guesses remaining
                guessesLeft -= 1;
                
                 // show incorect guesses
                 userGuesses += keyPressed;
                 userGuesses += " ";

                 // if out of guesses
                if(guessesLeft < 1){

                    losses++; // you lose!

                    // reset guesses
                    guessesLeft = 9;

                    // clear old guesses
                    userGuesses = "";

                    // new guess
                    letterGuessed = pickRandLetter();
                    console.log("My Guess: "+ letterGuessed);

                }
               

            }
            
        }

        // show variables
        document.getElementById("wins").innerHTML = String(wins);
        document.getElementById("losses").innerHTML = String(losses);
        document.getElementById("guessesRemaining").innerHTML = String(guessesLeft);
        document.getElementById("guessesSoFar").innerHTML = String(userGuesses);
    }
}


function pickRandLetter() {
    var aphaChars = "abcdefghijklmnopqrstuvwxyz"
    
    var randind = Math.floor(Math.random()*26);

    var output = aphaChars[randind];
   
    return output;

}