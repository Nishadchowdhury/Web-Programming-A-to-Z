// >>>>>>>>>>>>>>>>>>>>>>>>> All String Method returns a new string >>>>>>>>>>>>>>>>>>>>>>>>>
// Strings are immutable: Strings cannot be changed, only replaced.

// charAt(x) //=> it's work like arr[index]
// concat(v1,v2..) //=> to concat to string together
// charCodeAt(x) //=> returns the unicode of the character UTF-16
// fromCharcode(c1,c2) //=> returns the unicode of an array the characters

// replace(regexp/substr, replacetext) //=> replace string with a string.
// search(regexp) //=> search string with the help of regexp
// slice(start, [end]) //=> to slice a string 
// split(delimiter, [limit]) //=>  divide a string into a array. 
// substr(start, [length]) //=> first value of index second value for the length of the extracted part.
// substring(from, [to]) //=> same as substr but can't take negative value.
// toLowerCase() //=> make string lowercase
// toUpperCase() //=> make string uppercase
// repeat() //=> it's used to repeat string 
// valueOf() //=> to get value from an object type string
// trim() //=> method removes whitespace from both sides of a string


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
// console.log(t.split()); //=> ['ABCDE, EfGh'] ,,,, split(empty")

// console.log(t.repeat(2)); //=> ABCDE, EfGhABCDE, EfGh it's used to repeat string 





//-------------------------------string search------------------------------- (case sensitive)
// String indexOf() //=> it used tom get the index of a character.
// String lastIndexOf() //=> it used tom get the index of a character in a reverse way.
// String startsWith() //=> it used to check is is start with the specific value or not startWith('srt', startPoint)
// String endsWith() //=> it's works like startWith but reverse way. 
// String search() //=>  it's used to search a specific string with the help of regexp 
// String includes() //=> used to check is there the specific word exist or not (true of false)

var t = "Please locate where 'locate' occurs!";
// String indexOf() 
// console.log(t.indexOf('e')); //=> 2 ,,,, fist later's index 
// console.log(t.indexOf('locate')); //=> 7 ,,,, fist word's index 


// methods searches backwards, if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
// ---------------String lastIndexOf()
// ---------------String endsWith()

// console.log(t.lastIndexOf('e')); //=> 26 ,,,, last later's index 

// String ----------------search() => it's can take regexp.
// console.log(t.search('locate'));


// console.log(t.match(/e/g));  //=> return all the matches as an array ['e', 'e', 'e', 'e', 'e', 'e'].

// String includes() //=> returns true or false (used to check is there the specific word exist or not)
// console.log(t.includes('lo', 16)); //=> true (theValue , startingPoint)

// let text = "Hello world, welcome to the universe.";

// text.startsWith("world")    // Returns false
// let text = "Hello world, welcome to the universe.";

// text.startsWith("world", 5)    // Returns false
// let text = "Hello world, welcome to the universe.";

// text.startsWith("world", 6)    // Returns true

// console.log(t.startsWith('lo', 7)); //=> true


// String ------------------------endsWith()

// console.log(t.endsWith('te', 13)); //=> true  (string.endsWith(searchValue, length))