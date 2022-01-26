"use strict";
//এখানে নাম্বার ২১ কে স্ট্রিং এ কনভার্ট 
console.log('num to str>>>');
let age = 21;

console.log(typeof age);

let newAge = String(age);
console.log("after number to str");

console.log(typeof newAge);

console.log('');

// null to string
console.log('null to str>>>');

let hiNull = null;

console.log(typeof (hiNull));

console.log('after null to str conv');
let hiNull1 = String(hiNull);

console.log(typeof (hiNull1));
console.log('');

//undefined to string 
console.log('undefined to str>>>');
let hiUndefined = undefined;

console.log(typeof hiUndefined);

let hiUndefined1 = String(hiUndefined);
console.log('after undfi to str conv');

console.log(typeof hiUndefined1 );

console.log('');

// string to Number

console.log('string to Number >>>');
let hiNumber = "25";
console.log(typeof hiNumber);
console.log("after string to num conv");
let hiNumber1 = Number(hiNumber);
console.log(typeof hiNumber1);
