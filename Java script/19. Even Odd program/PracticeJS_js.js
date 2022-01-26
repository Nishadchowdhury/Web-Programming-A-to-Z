"use strict";

let numS =  +(prompt ("Inter a number as you like:-"));
console.log(numS);
console.log(typeof numS );

let red = numS % 2;

console.log(red);

if (red == 0) {
    alert(numS + " Even Number");
}else{
    alert(numS + " odd Number");
}