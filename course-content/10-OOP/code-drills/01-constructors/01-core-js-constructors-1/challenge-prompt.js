// Defining the card constructor function
//
// -------------------- Your Code Here --------------------
function Card (num) {
    this.num = num;
    this.printCard = () => {
        console.log(this.num);
    }
}

// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------
function Deck (cards) {
    this.count = () => cards.length;
    this.shuffle = () => cards.sort(() => (Math.random() - 0.5));
}





// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------
export default class Deck { 

}



// --------------------- End Code Area --------------------
