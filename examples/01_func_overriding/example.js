// node examples/01_func_overriding/example.js

function foo(a){
    console.log("1 param: " + a);
}

function foo(a, b){
    console.log("2 params: " + a + " " + b);
}

foo("test"); // ??? What will be the result?

/*
    a) Nothing, execution error
    b) „2 params: test undefined”
    c) „1 param: test”
 */