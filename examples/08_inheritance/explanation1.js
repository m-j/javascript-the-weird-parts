var helpers = require('./helpers.js');
var example1 = require('./example1.js');

console.log('----------------');
console.log();

/*
    EXPLANATION
    To explain this we have to understand how prototype
    chain works. Take a look at images:
    inheritance_example.png and car_vehicle_in_mem.png.

    inheritance_example.png shows UML diagram of hierarchy created here.

    car_vehicle_in_mem.png shows how objects look in memory including hidden
    __proto__ properties.

    Let's print car related objects:
 */

car = new example1.Car();

console.log();
console.log();

console.log('car:');
console.log(car);
console.log();

console.log('car.__proto__ :');
console.log(car.__proto__);
console.log();

console.log('car.__proto__.__proto__ :');
console.log(car.__proto__.__proto__);
console.log();

console.log('car.__proto__.__proto__.__proto__ :');
console.log(car.__proto__.__proto__.__proto__);
console.log();

console.log("That how it looks 'flattened':")
console.log(helpers.flattenObject(car));

/*
    Having this knowledge let's take a look how call to car.status() is executed:
        1. Node looks for status in car object but there is none
        2. It looks into car.__proto__ (new MotorVehicle()) but there is nothing either
        3. Finally it looks into car.__proto__.__proto__ (new Vehicle()) where it finds status method
        4. In status method body there is reference to this.speed this is equal to car at this moment
        5. But car has no speed property so history repeats and node goes up in inheritance chain until
            it reaches car.__proto__.__proto__

    It looks different for car.accelerate()
        1. Node goes up in inheritance chain and executes car.__proto__.__proto__
        2. This method has reference to this.acceleration
        3. this.acceleration exists on car so this value is used
*/