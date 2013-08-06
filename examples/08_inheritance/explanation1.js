var helpers = require('./helpers.js');

/*
 ANSWER
 'Human'

 EXPLANATION
 To explain this we have to understand how prototype
 chain works.
 */

function Character(name, strength){
    this.name = name;
    this.strength = strength;
    this.healthPoints = strength * strength;
}
Character.prototype.walk = function(){
    console.log('Walking...');
}

function Human(humansName){
    this.name = humansName;
}

Human.prototype = new Character('Generic human', 10);
Human.prototype.sayName = function(){
    console.log('My name is ' + this.name);
}

var boromir = new Human('Boromir');

console.log("Boromir\'s own properties:")
console.log(boromir);
console.log('')

console.log('Boromir\'s flattened object:')
console.log(helpers.flattenObject(boromir));
console.log('')

console.log('Boromir\'s __proto__')
console.log(boromir.__proto__)
console.log('')

console.log('Boromir\'s __proto__.__proto__')
console.log(boromir.__proto__.__proto__)
console.log('')