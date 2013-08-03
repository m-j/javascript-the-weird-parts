/*
ANSWER
"undefined undefined"

EXPLANATION
By calling function without dot notation, we "unbind"
this pointer from person object and bind it to global object.
*/

var person = {
    name : 'Rick',
    surname : 'Grimes',
    getFullName : function(){
        return this.name + ' ' + this.surname;
    },
    setFullName : function(fullName){
        var fullNameRegex = /(\w+)\s(\w+)/;
        var matches = fullNameRegex.exec(fullName);
        if(matches){
            this.name = matches[1];
            this.surname = matches[2];
        }
    }
}

var setFullNameShort = person.setFullName;

// Because we are not using dot notation this = global (global is like window in node.js)
setFullNameShort('Hershel Greene');

// person object still has Rick's personal details
console.log(person);

// Hershel's details will go to global object
console.log('global.name: ' + global.name)
console.log('global.surname: ' + global.surname)