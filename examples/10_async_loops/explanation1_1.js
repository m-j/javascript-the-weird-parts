/*
ANSWER
Call to fake server is asynchronous and always last key (Gimli) will be used.

To solve this problem anonymous immediate function can be used:
*/

var fakeServer = require('./fake-server.js')();

var characters = {
    'Gandalf' : {},
    'Legolas' : {},
    'Gimli' : {}
};

function addDetailsToCharacters(){
    for(name in characters){
        if(characters.hasOwnProperty(name)){
            (function(){
                var localName = name;

                fakeServer.getDetailsForName(name, function(details){
                    characters[localName].race = details.race;
                    characters[localName].class = details.class;

                    console.log(characters);
                    console.log();
                });
            })();
        }
    }
}

addDetailsToCharacters();