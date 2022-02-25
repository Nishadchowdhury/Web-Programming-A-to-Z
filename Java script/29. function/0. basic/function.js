// function declareatin
function bringSingara(money){
    console.log("singarar jonno dise", money);
    console.log('singara den');
    var singaraPrice= 10;
    var singaraQuantity= taka / singaraPrice;
    return singaraQuantity;
} 
var taka = 250;
// call the function 
var singara = bringSingara(taka);
console.log( 'ei nao tomar ' + singara + ' ta singara .');


//Normal function 
function add(num1, num2){
    return num1 + num2;
}
//function in a variable 
const aFunction = function Name(num1 , num2){
    return num1 + num2;
}
//anonymous function 
const aFunction = function (num1, num2){
    return num1 + num2;
}

//arrow function (এই function টা একদম variable এর মত করে declare করতে হয় ।)
const add = (num1 , num2)      =>       num1 + num2;
//           perameters   (arrow sing) (return);
// let's call a arrow function 
const sum = add(22 , 270);
console.log(sum);
//arrow function এর perameter ১ টা হলে সেটাকে perameter এর ভেতর রাখতে হয়না । 
// perameter না থাকলে তবে perameter দিতে হবে ।

// arrow function এর ভেতরের কাজ অনেক বেশি হলে সে গুলাকে { ব্র্যাকেট } এর মধ্যে রাখতে হয় ,
// এবং retrun করতে হয় (যদি দরকার হয়)। 
// যেমন 
const lol = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5 ;
    return output;
}
const call = ok(12, 5);
console.log(call);

// addEventListener কে arrow function এর সাহায্যে ব্যেবহার করা)