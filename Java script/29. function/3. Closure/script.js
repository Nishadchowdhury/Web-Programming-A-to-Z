/* function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

let clock1 = stopWatch();
let clock2 = stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());

console.log(clock2() , 'c2');
console.log(clock2() , 'c2');
  */
function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32);