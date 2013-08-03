/*
    ANSWER
    a) 12.56

    EXPLANATION
    JavaScript has closure mechanism.
    Inner function has access to outer funnction’s variables
    Inner function can have access even after execution of outer function is finished
    Closures are one of main strengths of the language
 */

function createCalculator(){
    var pi = 3.14; // pi variable will be accessible via closure

    return {
        circleArea: function (radius) {
            return pi * radius * radius;
        },
        circleCircumference: function (radius) {
            return 2 * pi * radius;
        }
    };
};

var calculator = createCalculator();
var area = calculator.circleArea(2);
console.log(area);