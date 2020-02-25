/*this is our pseudocode
while our word has not been guessed {
    the game will set our guess counter to 15;
    the game will randomly select a word from the wordBank;
    the player will begin to pick a letter;
    if {
        letters guess is correct;
    } then {
        the letter will be entered on the board;
        the guess counter will go down;
    } else if {
        the letters guessed is incorrect:
    } then {
        alert the player;
        the letter entered will go to the bottom;
        the guess counter will go down;
    };

    if { the guess counter goes to 0
    } then {
        game over;
    }
};
*/

//Hangman game 
// 1 create useable letters and words

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wordBank = ["technology", "books", "entertainment", "learning", "intellect"];

//How can we add these letters and words to our wordboard?
//How do we generate a board that randomly selects a word from our wordbank?
//create letters guessed vs letters correct

//this will randomly select the word from our wordBank
var board = wordBank[Math.floor(Math.random() * wordBank.length)];

//this will determine the letters needed for our board
var correct = [];
for (var i = 0; i < board.length; i++) {
    correct[i] = "_";
}    

//this will add any underscores needed based on the random word chosen from our word bank
var remainingLetters = board.length;

while (remainingLetters > 0) {

    //this will add any blank spaces for letters unguessed
    alert(correct.join(" "));
    
    var guesses = ("guess a letter");
    if (guesses === null) {
        break;
    } else if (guesses.length !== 1) {
        alert("please select a letter");
    } else {
        for (var j = 0; j < board.length; j++) {
            if(board[j] === guesses) {
                correct[j] = guesses;
                remainingLetters--;
            }
        }
    }
};
alert(correct.join(" "));
alert("congrats");

