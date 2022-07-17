// >>>>>>>>>>>>>>>>>>>>>>>>> All Array Method >>>>>>>>>>>>>>>>>>>>>>>>>
var cars = ["Saab", "Volvo", "BMW"];

//-----------------------Array Methods
// Array.isArray(arr) //=> to check is this a array or not (typeof will return array and object  both are object)
// instanceof //=> used to check is it an the given constructor or not (true / false) console.log(cars instanceof Array) //=> true

// push() //=> to add more element as last element in an array. (also can be use ,,,  cars[cars.length] = 'gaddi' ) returns the new length.
// pop() //=> to remove last element from an array. and it will return the last removed element.

// shift() // return the first removed element // to remove first element from an array. all element's index will be decrease by 1.
// unshift() //=> modified length // to add first element from an array. and all element's index will be increase by 1. 

// toString() // conv arr to string cars.toString() //=> Saab,Volvo,BMW 
// join() //  conv arr to string cars.join(' /') //=> Saab /Volvo /BMW
// 
// console.log(cars.unshift('lol'))
// 
// 
// 
// 


//------------------------------ Array modification
var cars = ["Saab", "Volvo", "BMW"];

// array[index] = newValue; //=> replace element in specific indexes. 
// array[array.length] = Value; //=> add element in last indexes. 
// delete array[index] //=> it will replace element with the empty/undefined value in an array. (it)

console.log(delete cars[10], cars);




var cars = ["Saab", "Volvo", "BMW"];

function logF(name) {
    console.log(name);
}

// cars.map(logF) // automatically 

//----------------------Associative Arrays (it's support arrays with named indexes)  !!! it's really a bad practice
// (those index will be the name not the Position as length)
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes.  
// If you use named indexes, JavaScript will redefine the array to an object.

var fruits = ['Aam', 'Jam', 'kola', 'lichi']

fruits.jackfruit = 'kathal' //=> ['Aam', 'Jam', 'kola', 'lichi', jackfruit: 'kathal']
fruits['orange'] = 'Komola' //=> ['Aam', 'Jam', 'kola', 'lichi', jackfruit: 'kathal', orange: 'Komola']
fruits[fruits.length] = 'lol';
// console.log(fruits.indexOf('lol')); //=> 4

// console.log(fruits);

// !!!!!!!!!!!!!!!!! incase of associative array, array methods will not work properly. !!!!!!!!!!!!!!!!!!!!
// console.log(fruits.length); //=> 4 ,,, (4 is not true)
// fruits.forEach(logF) //=> 'Aam', 'Jam', 'kola', 'lichi' ,,, (it will escape named indexes)




// -------------------------To avoid (new arr() & associative array) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const points = new Array(); //=> Good
// const points = []; //=> Bad

// console.log(Array.isArray(fruits));
