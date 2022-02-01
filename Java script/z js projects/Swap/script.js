//swap এর সাহায্যে কোন এক variable এর ডাটা অন্য variable এ স্থানান্তর করার কাজ করা হয় । 
let A = 5;
let B = 7;
console.log(A,B);
console.log('');
// এখন A এর মধ্যে যে ডাটা store করা আছে সেটা B এর মধ্যে স্থানান্তর করতে হবে । সেটা অনেক ভাবেই করা যায় ।

//*********************** 1. way one .
console.log("way one");
let temporary = A;
    A = B
    B = temporary;
console.log(A, B);
console.log("");
//*********************** 2. way one .
// destructuring

let first = 50;
let second = 70;
console.log("second way cheak"); 
console.log('before swap',first,second);
[first,second]=[second,first];
console.log('after swap',first,second);