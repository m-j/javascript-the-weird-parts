function createCalculator(){
    var pi = 3.14;

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
console.log(area); // ??? What will be printed to console?

/*
    a) 12.56
    b) undefined
    c) NaN
 */