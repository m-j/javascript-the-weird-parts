function Character(name, strength, dexterity, intelligence){
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.intelligence = intelligence;

    this.healthPoints = strength * strength;
    this.stamina = dexterity * strength;
    this.manaPoitns = intelligence * intelligence;
}

// All functions that have to be used with new
// should be uppercase by convention.
var troll = new Character('Troll', 20, 5, 3);
console.log(troll);

var goblin = Character('Goblin', 5, 10, 8);

/*
ANSWER
goblin variable will be undefined.

EXPLANATION
If new keywrod is skipped this will be bound to global object.
*/
console.log(goblin);

// This means that by skipping new keyword we will pollute global namespace.
console.log(global.stamina);

/*
1. It creates a new object.
2. It sets this new object's __proto__ to prototype object.
3. It executes the constructor function, with this set to created object.

More on this soon
 */
