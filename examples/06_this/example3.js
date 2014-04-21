/*
If we really want to use function detached from object
we can use bind.
*/

var person = {
    name : 'Rick',
    surname : 'Grimes',
    getFullName : function(){
        return this.name + ' ' + this.surname;
    }
}

var getFullName = person.getFullName;
console.log(getFullName());

// Let's assign method to variable to make it easier to call it...
var getFullNameBind = person.getFullName.bind(person);

console.log(getFullNameBind());

/*
How does it work ?
By currying:
*/

Function.prototype.myBind = function(thisArg){
    var that = this;

    return function(){
        return that.apply(thisArg);
    }
}

// Custom solution works as well...
var myGetFullNameBind = person.getFullName.myBind(person);

console.log(myGetFullNameBind());