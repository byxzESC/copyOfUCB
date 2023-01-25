// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
      // TODO: Add logic here to return a single letter grade
      let response;
      if (inRange(input, 90, 100)) {
        response = 'A'
      } else if (inRange(input, 80, 89)) {
        response = 'B'
      } else if (inRange(input, 80, 89)) {
        response = 'C'
      } else if (inRange(input, 80, 89)) {
        response = 'D'
      } else if (inRange(input, 80, 89)) {
        response = 'F'
      }
      return response;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // TODO: Add logic here to return range as a string
      let response;
      if (input === 'A') {
        response = '90 - 100'
      } else if (input === 'B') {
        response = '89 - 80'
      } else if (input === 'C') {
        response = '79 - 70'
      } else if (input === 'D') {
        response = '69 - 60'
      } else if (input === 'F') {
        response = '59 - 0'
      }
      return response;
    }
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
