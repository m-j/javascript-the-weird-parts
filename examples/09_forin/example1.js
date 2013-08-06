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
    var message = key + ' = ' + numbers[key];
    if(numbers[key] < average){
        message += ' \\/'
    }
    else {
        message += ' /\\'
    }

    console.log(message);
}

// ??? What's wrong with this code/