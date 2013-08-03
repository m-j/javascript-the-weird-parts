/*
    ANSWER
    b)
        Lori
        Lori
        Rick

    EXPLANATION
    Variables in JavaScript have function scope not
    block scope as in other Java-style languages.
*/

var name = "Rick"; //[name = Rick]

function foo() {
    if (true) {
        var name = "Lori"; //[name = Rick][name = Lori]
        console.log(name);
    }

    // function scope!
    console.log(name); //[name = Rick][name = Lori]
}

foo();
console.log(name); //[name = Rick]