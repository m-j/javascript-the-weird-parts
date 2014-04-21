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
console.log(area); // ??? What will be printed to console?

/*
    a) 12.56
    b) undefined
    c) 40
    d) NaN
 */