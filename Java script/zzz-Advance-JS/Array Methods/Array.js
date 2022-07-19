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

// splice() // used to add more element specifically arr.splice(positionForInput, ToRemoveElementsNumber, list of elements) 
//=> return removed    element. it will change main arr.
//cars.splice(1, 1, 'korola', 'sim') //=> ) ['Saab', 'korola', 'sim', 'BMW'] ,,, also we can remove elements by splice //=> arr.splice(index, n)

// concat() //=> used to merging multiple arr to single arr //=> const arr3 = arr1.concat(arr2). ti's can take multiple parameter newArr.concat(arr, arr, string) /=> it doesn't change main arr.

// slice() //=> that method will slices out a piece of an array .this can take two arguments like slice(1, 3) or no end argument like slice(3) //=> slice first 2 elements. then selects elements from the start argument, and up to (but not including) the end argument.(1 to 2) /=> it doesn't change main arr. //=> cars.slice(0, 2) //=>  ['Saab', 'Volvo'] 

var cars = ["Saab", "Volvo", "BMW"];
// sort() //=> used to sorts an array alphabetically. (cars.sort() => ['BMW', 'Saab', 'Volvo']
// reverse() //=> used to sorts an array reversely. (cars.reverse() => ['BMW', 'Volvo', 'Saab']

// -------------------Numeric short ,,, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".Because of this, the sort() method will produce incorrect result when sorting numbers. ro fix this we can providing a compare function.
var points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort(function (a, b) { return (a - b) })); //=>  [1, 5, 10, 25, 40, 100] ,,, normally
// console.log(points.sort(function (a, b) { return (b - a) })); //=>  [100, 40, 25, 10, 5, 1] ,,, reverse/descending way
// console.log(points.sort(function (a, b) { return 0.5 - Math.random() })); //=> it will sort the array randomly

// there is no methods to get highest or lowest value from an array. 
// we can sort the array normally with a compare function and take the last element or first element. ,,, but it's not the efficient way 
// the efficient way is below.
// for height value Math.max.apply(null, arr) is equivalent to Math.max(...arr).
// for lowest value Math.min.apply(null, arr) is equivalent to Math.max(...arr).

console.log(cars.toString());

// 
// 


//------------------------------ Array modification
var cars = ["Saab", "Volvo", "BMW"];

// array[index] = newValue; //=> replace element in specific indexes. 
// array[array.length] = Value; //=> add element in last indexes. 
// delete array[index] //=> it will replace element with the empty/undefined value in an array. (it will make array hole)

// console.log(delete cars[2], cars);




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
// const points = new Array(); //=> Bad
// const points = []; //=> Good

// console.log(Array.isArray(fruits));