// 4  এর factorial মানে হল  (4! = 4 X 3 X 2 X 1) 


/*    let workingN = 1;
    let number = 7;
    for(let i = 1; i <= number; i++){
        workingN = workingN * i;
        console.log(workingN);
    }
*/

// reverce way to minus 

function redMinus(number){
    let facto = 1;
    let i = number;
    while(i >= 1){
        facto = facto * i ;
        i--;
    }
    return facto;
}

const result = redMinus(7);
console.log(result);