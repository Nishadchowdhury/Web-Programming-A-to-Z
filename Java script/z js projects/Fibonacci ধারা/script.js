// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ,,,, Fibonacci এর এই নাম্বার গুলাকে যদি একটা array ধরি তবে array এর 2 নাম্বার index থেকে শুরু করতে হবে । কারন Fibonacci serice এর যে পদ টার আগে 2 টা পদ আছে সেটা থেকেই শুরু করতে হবে ।  

/*
যেকোনো সংখ্যার Fibonacci বের করতে সেটার আগের সংখ্যা এবং তার আগের সংখ্যার যোগ ফল । fibonacci এর defult value = [0, 1]
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
16th = 15th + 14th
119th = 118th + 117th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/

const fibo = [0, 1]
for(let i = 2; i<10; i++){
    fibo[i]= fibo[i-1] + fibo[i-2];
}

console.log(fibo);




// const fibo = [0, 1]
// for(let i = 2; i<=19; i++){
    
//     // nth = (n-1)th + (n-2)th
//     // ith = (i-1)th + (i-2)th
//     fibo[i] = fibo[i - 1] + fibo[i - 2];

// }
// console.log(fibo);


console.log("with function");
console.log('');





function runFibo(inputx){
    if(typeof inputx != 'number' ){
        return 'plese give a number ';
    }else if (inputx < 2) {
        return "plsese enter a positive number greater than 2";
    }
    let fibo = [0, 1];
    for(let i = 2; i < inputx; i++ ){
        fibo[i]=fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

let call = runFibo(9); // এই বক্সে নাম্বার ছাড়া অন্য কিছু দেওয়া যাবেনা । 
console.log(call);