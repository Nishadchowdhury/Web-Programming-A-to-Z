function converter(inputValue){
    if(inputValue % 2 == 0){
        return "even";
    }
    return "Odd";
}
const number = 130;
var finalResust = converter(number);
console.log( "the Number is",finalResust);

// true flase check . 

function converterPro(InputValuePro){
    if((InputValuePro % 2) != 0){
        return false;
    }return true;
}

var numberPro = 129;
var finalResultPro = converterPro(numberPro);
console.log( 'your Number is', finalResultPro);