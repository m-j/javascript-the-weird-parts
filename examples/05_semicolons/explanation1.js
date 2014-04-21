/*
    ANSWER
    b) undefined

    EXPLANATION
    JavaScript implicitly inserts semicolons at the end of line when possible.
*/

function createPerson(name){
    return
    {
        name: name
    }
}

console.log(createPerson('Rick Grimes'))

/*
There are three basic rules of semicolon insertion:

    - When, as the program is parsed from left to right, a token (called the offending token) is encountered
    that is not allowed by any production of the grammar, then a semicolon
    is automatically inserted before the offending token if one or more of the following conditions is true:
        • The offending token is separated from the previous token by at least one LineTerminator.
        • The offending token is }.

    - When, as the program is parsed from left to right, the end of the input stream of tokens
    is encountered and the parser is unable to parse the input token stream as a single complete ECMAScript Program, then a semicolon is automatically inserted at the end of the input stream.

    - When, as the program is parsed from left to right,
    a token is encountered that is allowed by some production of the grammar, but the production is a restricted production and the token would be the first token for a terminal or nonterminal immediately following the annotation “[no LineTerminator here]” within the restricted production (and therefore such a token is called a restricted token), and the restricted token is separated from the previous token by at least one LineTerminator, then a semicolon is automatically inserted before the restricted token.
*/