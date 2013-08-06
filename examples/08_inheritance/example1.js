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

boromir.sayName();

delete boromir.name;

boromir.sayName(); // ??? What will be printed to console now?