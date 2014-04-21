/*
    ANSWER
    c) 40

    EXPLANATION
    JavaScript has closure mechanism.
    Inner function has access to outer funnction’s variables
    Inner function can have access even after execution of outer function is finished
    Variables kept alive by closure mechanism can be changed
    Closures are one of main strengths of the language
 */

function createCalculator(){
    var pi = 3.14; // pi variable will be accessible via closure

    return {
        circleArea: function (radius) {
            return pi * radius * radius;
        },
        changePi : function(val){
            pi = val;
        }
    };
};

var calculator = createCalculator();
calculator.changePi(10);
var area = calculator.circleArea(2);
console.log(area);