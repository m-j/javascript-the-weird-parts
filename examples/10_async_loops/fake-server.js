function create(){
    var fakeData = {
        'Gandalf' : {
            race : 'Ainur',
            class : 'mage'
        },
        'Legolas' : {
            race : 'Elf',
            class : 'archer'
        },
        'Gimli' : {
            race : 'Dwarf',
            class : 'warrior'
        },
        'Aragorn' : {
            race : 'Human',
            class : 'warrior'
        }
    }

    return {
        getDetailsForName : function(name, callback){
            var responseTime = Math.round(Math.random() * 3000);
            setTimeout(function(){
                callback(fakeData[name]);
            }, responseTime);
        }
    }
}

module.exports = create;