/*
    ANSWER
    c) "undefined"

    EXPLANATION
    All var statements are hoisted to beginning of function.
    Presented code could be transleted into following:
*/

var name = "Carl";

function sayName(){
    var name; // var statement is hoisted
    console.log(name);
    name = "Rick";
};

sayName();