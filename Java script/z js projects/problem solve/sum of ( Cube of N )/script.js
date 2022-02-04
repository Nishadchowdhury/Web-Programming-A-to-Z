// function sum(n){
//     var l =(n*(n+1)/2);
//     l = l*l;
//     return l;
// }

// var ans = sum(12);

// console.log(ans);

/* way 2 of admin support of PH  */

function cubeSum(number){
    let result = 0;
    for(let i =1; i <= number; i++){
        result=result+i*i*i;
    }
    return result ;
}
var red = cubeSum(12);
console.log(red);