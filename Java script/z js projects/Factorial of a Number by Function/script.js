// 3  এর factorial মানে হল  (4! = 4 X 3 X 2 X 1) 
function factorialFun(number){
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}

var inputN = 7;
var firstFactorial = factorialFun(inputN);
console.log('factorial of 7 is', firstFactorial);

var inputN = 10;
var firstFactorial = factorialFun(inputN);
console.log('factorial of 7 is', firstFactorial);