/*
    ANSWER
    getLegth is created 1000 000 times but it does not have to be.

    EXPLANATION
    Objects in typical object oriented languages like C++ share
    methods. This is not always true in JavaScript. If method
    is created in constructor, then it will not be shared among
    instances.
*/

var Vector = function(x,y){
    this.x = x;
    this.y = y;
    this.getLegth = function(){
        Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

var vector1 = new Vector(1,1);
var vector2 = new Vector(2,2);

console.log('Vector.getLength shared? ' + (vector1.getLegth === vector2.getLegth));

/*
    It can be improved by adding methods to prototype,
    so they are created only once
*/

var EffecientVector = function(x,y){
    this.x = x;
    this.y = y;
}
EffecientVector.prototype.getLegth = function(){
    Math.sqrt(this.x * this.x + this.y * this.y);
}

var effecientVector1 = new EffecientVector(5,5);
var effecientVector2 = new EffecientVector(10,10);
console.log('EffectienVector.getLength shared? ' + (effecientVector1.getLegth === effecientVector2.getLegth));