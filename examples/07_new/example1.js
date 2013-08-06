function Character(name, strength, dexterity, intelligence){
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.intelligence = intelligence;

    this.healthPoints = strength * strength;
    this.stamina = dexterity * strength;
    this.manaPoitns = intelligence * intelligence;
}

var troll = new Character('Troll', 20, 5, 3);
console.log(troll);

// ??? What's going to happen if we omit new keyword?
var goblin = Character('Goblin', 5, 10, 8);
console.log(goblin);