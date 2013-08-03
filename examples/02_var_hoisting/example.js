// node examples/02_var_hoisting/example.js

var name = "Carl";

function sayName(){
    console.log(name);
    var name = "Rick";
};

sayName(); //??? What will be written to console?

/*
    a) Nothing, execution error
    b) "Carl"
    c) "undefined"
    d) "Rick"
*/