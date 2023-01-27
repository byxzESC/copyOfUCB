// TODO: Import the parent class
const vehicle = require('./vehicle')
// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends vehicle{
  constructor(id, color, passengers, numberOfWheels = 4, sound = 'beep') {
    super(id, numberOfWheels, sound);
    this.color = color;
    this.passengers = passengers;
  }

  useHorn = () => console.log(this.sound);
  checkPassengers = () => {
    if (this.passengers.length < 4) {
      console.log(`There are ${this.passengers.length - 4} left`);
    } else {
      console.log("This car only seats 4 people. You have too many passengers!" );
    }
  }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
