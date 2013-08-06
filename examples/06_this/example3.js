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

var oldGetFullNameShort = person.getFullName;
console.log(oldGetFullNameShort());

// Let's assign method to variable to make it easier to call it...
var getFullNameShort = person.getFullName.bind(person);

console.log(getFullNameShort());

/*
How does it work ?
By currying:
*/

Function.prototype.myBind = function(thisArg){
    return function(){
        this.apply(thisArg, arguments);
    }
}

// Custom solution works as well...
var myGetFullNameShort = person.getFullName.bind(person);

console.log(myGetFullNameShort());