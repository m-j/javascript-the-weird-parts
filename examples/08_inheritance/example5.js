var Vector = function(x,y){
    this.x = x;
    this.y = y;
    this.getLegth = function(){
        Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

var vectorsList = [];

for(var i = 0; i < 1000; i++){
    for(var j = 0; j < 1000; j++){
        vectorsList.push(new Vector(i,j));
    }
}

// ??? What is memory inefficient here?