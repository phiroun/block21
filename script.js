function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.getDescription = function () {
  return "This is a " + this.year + " " + this.make + " " + this.model + ".";
};

var myCar = new Car("Toyota", "Camry", 2022);
console.log(myCar.getDescription());

function ElectricCar(make, model, year, range) {
  Car.call(this, make, model, year);
  this.range = range;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.getDescription = function () {
  var carDescription = Car.prototype.getDescription.call(this);
  return carDescription + " It has a range of " + this.range + " miles.";
};

var myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(myElectricCar.getDescription());
