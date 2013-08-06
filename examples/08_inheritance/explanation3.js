var example3 = require('./example3.js');
var Wizard = example3.Wizard;
var Inventory = example3.Inventory;
var Character = example3.Character;
console.log('----------------');
console.log();

/*
ANSWER
noobWizard nad archMage have the same inventory items.

EXPLANATION
This happens because they have the same inventory objects
*/

var wizard1 = new Wizard();
var wizard2 = new Wizard();

console.log('Evaluating Wizard');
console.log('Are wizards equal? ' + (wizard1 === wizard2));
console.log("Are wizard's inventories equal? " + (wizard1.inventory === wizard2.inventory));

/*
This issue is caused by fact that Wizard always uses inventory from it's prototype.
Since prototypical inheritance is object based not class based this causes that reference
to the only Inventory object is shared among all Wizard instances.

To fix that problem it's enough to apply parent's constructor in child's prototype.
*/

var FixedWizard = function(){
    this.name = 'FixedWizard';
    this.castSpell = function(){
        console.log('Casting spell!');
    }

    Character.apply(this, arguments);
}
FixedWizard.prototype = new Character();

var fixedWizard1 = new FixedWizard();
var fixedWizard2 = new FixedWizard();

console.log('Evaluating FixedWizard');
console.log('Are wizards equal? ' + (fixedWizard1 === fixedWizard2));
console.log("Are wizard's inventories equal? " + (fixedWizard1.inventory === fixedWizard2.inventory));
