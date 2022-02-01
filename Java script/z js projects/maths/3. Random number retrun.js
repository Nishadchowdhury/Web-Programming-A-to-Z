//random number এর ক্ষেত্রে Math.random() এটা number প্রিন্ট করবে ০ থেকে ১ এর মধ্যে যেকোনো নাম্বার । 
let output = Math.random();
console.log( "output is under 1 =", output);

//যদি random সংখ্যাটা 0 থেকে 10 এর মধ্যে চাই তাহলে Math.random()*10 করতে হবে । 

let outputTwo = Math.random()*10;
console.log(outputTwo);

// চাইলে এই random number টাকে round করতে পারি অর্থাৎ উপযুক্ত পূর্ণ সংখ্যা রুপান্তর করতে পারি ।

let final = Math.round(outputTwo)
console.log('integer value', final);

console.log('');
console.log('');
console.log('');

// চাইলে এটা কোন লুপ এর মধ্যে বায়বহার করতে পারি ।

for(let i =1; i <= 20 ; i++){
    let lol = Math.random()*6;
    let fixed = Math.ceil(lol);
    console.log(fixed);
}