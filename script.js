// Constructor function for Car
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add a method to the Car prototype called getMakeModel()
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// Constructor function for SportsCar, inheriting from Car
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to set make and model
  Car.call(this, make, model);
  
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Add a method to the SportsCar prototype called getTopSpeed()
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
