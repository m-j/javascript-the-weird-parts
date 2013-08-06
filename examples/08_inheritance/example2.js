var Parent = function(){
    this.name = 'Al Bundy';
}

var Child = function(){
    this.name = 'Bud Bundy';
}
Child.prototype = new Parent();

var child = new Child();

// ??? Given knowledge presented in previous example
// what will be displayed to console by following code?

console.log(child.name);

delete child.name;

console.log(child.name)
