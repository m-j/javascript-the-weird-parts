var helpers = require('./helpers.js');

var Inventory = function(capacity){
    this._items = [];
    this.add = function(item){
        if(this._items.length < capacity){
            this._items.push(item);
        }
    }
}

var Character = function(){
    this.name = 'Generic character';
    this.level = 1;
    this.inventory = new Inventory(5);
    this.inventory.add('robe');
    this.inventory.add('1000 GP');
}

var Wizard = function(){
    this.name = 'Wizard';
    this.castSpell = function(){
        console.log('Casting spell!');
    }
}
Wizard.prototype = new Character();

var Warrior = function(){
    this.name = 'Warrior';
    this.attackWithWeapon = function(){
        console.log('Attacking with weapon!');
    }
}
Warrior.prototype = new Character();

var warrior = new Warrior();
warrior.inventory.add('sword');
warrior.inventory.add('shield');
warrior.inventory.add('armor');

var noobWizard = new Wizard();
noobWizard.inventory.add('spell book');

var archMage = new Wizard();
archMage.level = 20;
archMage.inventory.add('spell book');
archMage.inventory.add('magic orb');
archMage.inventory.add('staff');

// ??? What will be result od following expressions:
console.log(warrior.inventory._items);
console.log("");

console.log(noobWizard.inventory._items);
console.log("");

console.log(archMage.inventory._items);
console.log("");

exports.Wizard = Wizard;
exports.Inventory = Inventory;
exports.Character = Character;