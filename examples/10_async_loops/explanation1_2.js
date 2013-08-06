var fakeServer = require('./fake-server.js')();

/*
 Possibly simpler solution is to use forEach instead of for in loop:
 */

var characters = {
    'Gandalf' : {},
    'Legolas' : {},
    'Gimli' : {}
};

function addDetailsToCharacters(){
    var names = Object.keys(characters);

    names.forEach(function(name){
        fakeServer.getDetailsForName(name, function(details){
            characters[name].race = details.race;
            characters[name].class = details.class;

            console.log(characters);
            console.log();
        });
    });
}

addDetailsToCharacters();