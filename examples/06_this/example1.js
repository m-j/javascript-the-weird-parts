var person = {
    name : 'Rick',
    surname : 'Grimes',
    getFullName : function(){
        return this.name + ' ' + this.surname;
    }
}

console.log(person.getFullName());

// What will be printed to console here?