var name = "Rick";

function foo() {
    if (true) {
        var name = "Lori";
        console.log(name);
    }
    console.log(name);
}

foo();
console.log(name);

// ??? What will be written to console?

/*
    a)
        Rick
        Lori
        undefined
    b)
        Lori
        Lori
        Rick
    c)
        Lori
        Lori
        Lori
    d)
        Rick
        Rick
        Rick
*/