var Parent = function(){

}

var Child = function(){

}
Child.prototype = new Parent();

var SomeObject = function(){

}

var child = new Child();
var someObject = new SomeObject();

console.log ('child instanceof Parent: ' + (child instanceof Parent));
console.log('child instanceof Child: ' + (child instanceof Child));
console.log('someObject instanceof Parent: ' + (someObject instanceof Parent));

/*
instanceof operator goes up through inheritance chain and checks if
some object is child of given constructor.
*/