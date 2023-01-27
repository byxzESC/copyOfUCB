const Letter = require("./Letter");

class Word {
    constructor (word) {
        this.letters = word.split('').map(letter => new Letter(letter))
    }

    // guessLetter(userInput) {
    //     if ()
    // }

    // guessedCorrectly () {

    // }
}

module.exports = Word;
