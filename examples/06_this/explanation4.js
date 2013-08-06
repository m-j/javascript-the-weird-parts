/*
ANSWER
Timer will run indefinitely and display wrong results.

EXPLANATION
this of nested function points to global object.
This will be set to global object unless:
    - method is being called using dot notation
        object.method(arg1, arg2, ... argN)
    - function is being called using call or apply
        method.call(object, arg1, arg2, ... argN)
        method.apply(object, [arg1, arg2, ... argN])
 */

var countdownTimer = {
    count : 5,
    interval : 500,
    startCountdown : function(){
        var that = this; //To fix issue with this we use variable that
        var handler = setInterval(function(){
            console.log('Counting down... ' + that.count);

            that.count--;

            if(that.count < 1){
                clearInterval(handler);
            }
        }, this.interval);
    }
}

countdownTimer.startCountdown();