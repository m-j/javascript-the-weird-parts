/*
    ANSWER
    b) 2 params: test undefined

    EXPLANATION
    Presented code is equal to following:
*/
var foo = function(a){
    console.log("1 param: " + a);
}

var foo = function foo(a, b){
    console.log("2 params: " + a + " " + b);
}

foo("test");
/*
    We redefine foo function to second version.
    First version will never be executed.
*/
