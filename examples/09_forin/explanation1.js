/*
ANSWER
It takes into account findAverage method which comes from prototype.

EXPLANATION
for-in loop loops through keys of all properties of object.
By default it also loops through keys coming from prototype.
*/

Array.prototype.findAverage = function(){
    var length = this.length;
    var average = 0;
    for(var i = 0; i < length; i++){
        var value = this[i];
        average += value;
    }
    return average / length;
}

var numbers = [1, 34, 5, 17, 2, 3, 90];

var average = numbers.findAverage();

for(key in numbers) {
    // Described issue can be fixed bu checking if object hasOwnProperty
    if(!numbers.hasOwnProperty(key)){
        continue;
    }

    var message = key + ' = ' + numbers[key];
    if(numbers[key] < average){
        message += ' \\/'
    }
    else {
        message += ' /\\'
    }

    console.log(message);
}
