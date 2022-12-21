// logs this object
console.log(this);

// function named helloThis, and it logs a message
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// child is an object
var child = {
  // child object with a property of age and value of 10
  age: 10,
  // child object's method named ageTenYears and value of a function
  ageTenYears: function () {
    // this function will log out child object's property and add 10 to it
    console.log(this.age + 10);
  },
};

var investor = {
  name: 'Cash Saver',

  // an object named investment 
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },


  },
};
