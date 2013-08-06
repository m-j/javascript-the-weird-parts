var fakeServer = require('./fake-server.js')();

var characters = {
    'Gandalf' : {},
    'Legolas' : {},
    'Gimli' : {}
};

function addDetailsToCharacters(){
    for(name in characters){
        if(characters.hasOwnProperty(name)){
            fakeServer.getDetailsForName(name, function(details){
                characters[name].race = details.race;
                characters[name].class = details.class;

                console.log(characters);
                console.log();
            });
        }
    }
}

addDetailsToCharacters();

// ??? What's wrong with this code?