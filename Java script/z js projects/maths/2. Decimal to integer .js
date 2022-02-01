// কোন ভগ্নাংশ সংখাকে পূর্ণ সংখ্যাতে রুপান্তর করার ৩ টা উপায় আছে , 

// ১_ পূর্ণ সংখ্যা করার ক্ষেত্রে উপরে নিতে হলে অর্থাৎ 2.101 , 2.567 , 2.990 = 3 করতে চাই তবে Math.ceil(x); করতে হবে । 

let n = 2.678;
let converted = Math.ceil(n);
console.log("outPut of Math.ceil ", converted); 
console.log("");

// ২_ পূর্ণ সংখ্যা করার ক্ষেত্রে উপরে নিতে হলে অর্থাৎ 2.101 , 2.567 , 2.990 = 2 করতে চাই তবে Math.ceil(x); করতে হবে । 

let l   = 2.678;
let converted_l = Math.floor(l);
console.log("outPut of Math.floor ", converted_l);

console.log("");
// ৩_ পূর্ণ সংখ্যা করার ক্ষেত্রে উপরে নিতে হলে অর্থাৎ 2.101 , 2.567 , 2.990 = 2 করতে চাই তবে Math.ceil(x); করতে হবে । 

let m   = 2.478;
let M   = 2.678;
let converted_m = Math.round(m);
console.log("");
console.log("outPut of Math.round work to make high for .5 =",converted_m);
let converted_M = Math.round(M);
console.log("outPut of Math.round work to make low for .49999999999 =",converted_M);