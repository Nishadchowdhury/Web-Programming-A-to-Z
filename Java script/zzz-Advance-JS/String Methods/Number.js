// >>>>>>>>>>>>>>>>>>>>>>>>> There is All about Numbers >>>>>>>>>>>>>>>>>>>>>>>>>
var n1 = 0.2;
var n2 = 0.1;
// console.log(n1 + n2); //=> 0.30000000000000004 (there is some problem with floating point in js that's why we have to multiply and Divide by 10)
// console.log((n1 * 10 + n2 * 10) / 10);

// console.log('ok janu ' + 20 + 25); //=> ok janu 2025 (number with string = string ,,, js read code left to right that's why string concat with 20 first)
// console.log(20 + 25 + ' ok janu '); //=> 45 ok janu 


//___________________________________ Numeric Number 
var n1 = "100";
var n2 = "10";
// console.log(n1 + n2); //=>  10010 (string + string = NewString)

// (when js can't addition with tow different value, js try to convert those value to number. if js will success then the return will be the result of the calculation.)
// console.log(n1 - n2); //=> 90
// console.log(n1 * n2); //=> 1000
// console.log(n1 / n2); //=> 10




//___________________________________ Number Method //=> return(string)
var num = 10
var numD = 10.16078

// isNaN() //=> (check, is the value is not a number or else?)
// NaN === Not a Number
// Infinity === is a value that contain the largest number of js supports (typeOf infinity => number)
// let numObject = new Number(123);
// console.log(55 + NaN); //=> NaN (it's does't contain a value but NaN is Number type data that's it make any number to NaN)
// toString() //=> used to convert a number to string.
// toExponential() //=> num.toExponential(2) //=> 2.00e+0 (used to convert a big number of text to a tiny number of text) //=> return(string)
// toFixed() //=> //=> numD.toFixed(8) //=> 10.16078000 (we can specified the number of decimal numbers) without param => no decimal.
// toPrecision() //=> numD.toPrecision(8) //=> 10.160780 (it will return the decimal number with the specified length) without param => full num.
// valueOf() //=> (to get the value of object type number).
// Number() //=> Number(true) //=> 1 [Number(' 1.9 ') => 1.9, (' 1,9 ')=> NaN, (' 1 9') => NaN ] ,,, (used to conv js variable to number).
// parseInt() //=> (used to conv a number to a integer) ,,, [parseInt('12 37 87') => 12, parseInt('12.3 taka') => 12 ].

// Number.isSafeInteger() //=> (used to check is it a actual number or string type number)
var num = 100000000
// Number.toLocaleString() //=> num.toLocaleString() //=> 100,000,000 (return a number as a string using local language formate)


//___________________________________ Number Property //=> return(number)
// MAX_VALUE //=> (i will return a height number of js can understand)
// MIN_VALUE //=> (i will return a lowest number of js can understand)
// POSITIVE_INFINITY //=> (returns positive infinity)
// NEGATIVE_INFINITY //=> (returns negative infinity)
// NaN //=> (returns NaN)




// ----------------------------------------------Hexadecimal
// there are so meany type of number [
//     'decimal (base = 10)', //=> 0 1 2 3 4 5 6 7 8 9
//     'binary (base = 2)', //=> 0 1
//     'octal (base = 8)', //=> 0 1 2 3 4 5 6 7
//     'Hexadecimal (base = 16)', //=>  0 1 2 3 4 5 6 7 8 9 A B C D E F
// ]

// decimal to binary 0
// console.log(348 % 2, 348 / 2); //=> 001110101 the real/true binary will be the revers way of the number like 001110101 = 101011100
// (octal , hexadecimal are same way)

// console.log(1 % 16, 1 / 16); //=> 1251 (the real hexadecimal will be 1512 => 15c [10 =A, 11=B, 12=C] )


