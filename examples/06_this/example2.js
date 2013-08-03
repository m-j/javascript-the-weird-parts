var person = {
    name : 'Rick',
    surname : 'Grimes',
    getFullName : function(){
        return this.name + ' ' + this.surname;
    }
}

// Let's assign method to variable to make it easier to call it...
var getFullNameShort = person.getFullName;

console.log(getFullNameShort());
// What will be printed to console now?