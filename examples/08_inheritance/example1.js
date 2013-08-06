function Character(name, strength, dexterity, intelligence){
    this.name = name;
    this.strength = strength;
    this.healthPoints = strength * strength;
}

function Human(humansName){
    this.name = humansName;
}

Human.prototype = new Character('Human', 10);
Human.prototype.sayName = function(){
    console.log('My name is ' + this.name);
}

var arthas = new Human('Arthas');
arthas.sayName();

delete arthas.name;

arthas.sayName(); // ??? What will be printed to console now?