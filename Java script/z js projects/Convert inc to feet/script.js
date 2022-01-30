function ConvertTool(IncVlaue){
    var feet = IncVlaue / 12;
    return feet;
}

var dadaInches = 120;
var feet = ConvertTool(dadaInches);
console.log( "dada eta feet e hoy ", feet, 'feet .');


var dadiInches = 145;
var feet = ConvertTool(dadiInches);
console.log( "dadi eta feet e hoy ", feet.toFixed(+2), 'feet .');