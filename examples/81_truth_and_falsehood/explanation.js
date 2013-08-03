/*
ANSWER
    c) 10

EXPLANATION
*/

log = function(lineNumber, msg){
    console.log(lineNumber + ': ' + msg);
}

log(0,  (!(![]) + !"") * 5  );
log(1,  (!(![]) + !"")      );
log(2,  !""                 );
log(3,  !(![])              );
log(4,  true + true         );
log(5,  ![]                 );

/*
False values:
    0
    NaN
    ""
    false
    Null
    undefined

Negation of false expression gives true
true + true == 2

*/