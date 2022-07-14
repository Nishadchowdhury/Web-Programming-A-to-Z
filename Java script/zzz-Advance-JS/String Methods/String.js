// >>>>>>>>>>>>>>>>>>>>>>>>> All String Method returns a new string >>>>>>>>>>>>>>>>>>>>>>>>>
// Strings are immutable: Strings cannot be changed, only replaced.


var t = "ABCDE, FGHIJ, KLMNOP, QRSTUV, WXYZ";

//--------------------length
let length = t.length;
// console.log(length);

//--------------------slice(start, end)
// console.log(t.slice(2, 4)); //=> CD not CDE
// console.log(t.slice(-8, -2)); //=> UV, WX (counting from the end)
// console.log(t.slice(-8)); //=> UV, WXYZ

//--------------------substring(start, end)
// slice and substring are the same but substring cannot take negative value.


//--------------------substr(start, length)
// console.log(t.substr(2, 2)); //=> CD => first value of index second value for the length of the extracted part.


var t = "ABCDE, FGHIJ, KLMNOP, QRSTUV, WXYZ";
//--------------------replace()  replaces a specified value with another value in a string (it will replace the first matches) (case sensitive) .
// const newStr = t.replace('FGHIJ', 'AEIOU')
// console.log(newStr); //=> ABCDE, AEIOU, KLMNOP, QRSTUV, WXYZ.


var t = "www.nishadchowdhury.netlify.app";
// console.log(t.toUpperCase()); //=> WWW.NISHADCHOWDHURY.NETLIFY.APP

var t = "www.NishadChowdhury.Netlify.App";
// console.log(t.toLocaleLowerCase()); //=> www.nishadchowdhury.netlify.app


var t = "ABCDE, FGHIJ, KLMNOP, QRSTUV, WXYZ";
var t2 = "Send 50tk";
// console.log(t.concat(' ', '121201863912983 ', t2)); //=> ABCDE, FGHIJ, KLMNOP, QRSTUV, WXYZ 121201863912983 Send 50tk 

var t = "                        ABCDE, FGHIJ, KLMNOP, QRSTUV, WXYZ   ";
// console.log(t.trim()); //=> ABCDE, FGHIJ, KLMNOP, QRSTUV, WXYZ          (method removes whitespace from both sides of a string)


var t = "100";
// var t = t.padStart(4, "x");
// console.log(t); //=> x100 padStart(newStrLength, theStrValue);
var t = t.padStart(7, "x");
// console.log(t); //=> xxxx100  
//-------------------------------------padEnd()


var t = "ABCDE, FGHIJ, KLMNOP, QRSTUV, WXYZ";
// console.log(t[2]); console.log(t.charAt(2)); both are same.

// console.log(t.charCodeAt(6)); //=> method returns the unicode of the character at a specified index in a string
// (UTF-16 code (an integer between 0 and 65535))


var t = "ABCDE, FGHIJ";
// console.log(t.split(',')); //=> ['ABCDE', ' FGHIJ'] ,,,, split(" value ")

var t = "ABCDE";
// console.log(t.split('')); //=> ['A', 'B', 'C', 'D', 'E'] ,,,, split(" withoutValue ") 

var t = "ABCDE, EfGh";
// console.log(t.split()); //=> ['ABCDE, EfGh'] ,,,, split(" withoutValue ")