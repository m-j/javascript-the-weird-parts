var Vehicle = function () {
    this.speed = 0;
    this.acceleration = 1.0;

    this.accelerate = function () {
        this.speed += this.acceleration;
    }

    this.status = function(){
        if (this.speed > 0) {
            console.log("Moving with %s speed", this.speed);
        }
        else {
            console.log("Not moving");
        }
    }
}

var MotorVehicle = function () {
    this.isEngineStarted = false;

    this.startEngine = function () {
        this.isEngineStarted = true;
    }

    this.accelerate = function () {
        if (this.isEngineStarted) {
            this.speed += this.acceleration;
        }
    }
}

MotorVehicle.prototype = new Vehicle();

var Car = function () {
    this.acceleration = 50.0;
}

Car.prototype = new MotorVehicle();

var Bike = function () {
    this.acceleration = 5.0;
}

Bike.prototype = new Vehicle();

var car = new Car();
var bike = new Bike();

car.accelerate();
car.status();
//Not moving

car.startEngine();
car.accelerate();
car.status();
//Moving with 50 speed

bike.accelerate();
bike.status();
//Moving with 5 speed

// How does it work?

exports.Car = Car;
exports.Vehicle = Vehicle;
exports.MotorVehicle = MotorVehicle;