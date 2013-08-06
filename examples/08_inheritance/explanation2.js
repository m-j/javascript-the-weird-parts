var Parent = function(){
    this.name = 'Al Bundy';
}

var Child = function(){
    this.name = 'Bud Bundy';
}
Child.prototype = new Parent();

var child = new Child();

console.log(child.name);
console.log(child);

delete child.name;

console.log(child.name)
//Child got it's name deleted so node will look up into __proto__
console.log(child);
