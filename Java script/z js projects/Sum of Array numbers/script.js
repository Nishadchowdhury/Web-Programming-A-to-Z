// sum of all the element of the array . এই array এর মধ্যে থাকা elements গুলার যোগ-ফল বের করতে হবে । 
let def = 0;
const numbers = [44, 23, 34, 32, 54, 5, 78];
for(let i = 0; i < numbers.length; i++){
    def = def+numbers[i];
}
console.log(def);

// do with function 

function sumOfAll(numberAll){
    let defTwo = 0;
    for(let j = 0; j < numberAll.length;j++ ){
        defTwo = defTwo+numberAll[j];
    }
    return defTwo;
}

let numberAll = [300, 50, 100, 200];

let theFinalValue = sumOfAll(numberAll);

console.log(theFinalValue);


