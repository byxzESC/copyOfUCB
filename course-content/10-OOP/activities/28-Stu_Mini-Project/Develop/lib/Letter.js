class Letter {
    constructor(letter) {
        this.letter = letter;
        this.visible = !/[0-9a-z]/i.test(letter);
    }

    toString = () => this.visible ? this.letter : '_';

    guess = (userInput) => {
        if (this.letter === userInput) {
            this.visible = true;
            return true;
        } else {
            return false;
        }
    }

    getSolution() {
        return this.letter;
    }
}
module.exports = Letter;
