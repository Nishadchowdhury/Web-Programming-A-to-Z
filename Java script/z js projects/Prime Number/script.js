
//এদেরকে ১ এবং সেই সংখ্যা ব্যাতিত অন্য কোনো সংখ্যা দিয়ে নিঃশেষে ভাগ করা সম্ভব না 

function primeNumber(inputX){
    if(inputX % 1 == 0 && inputX % inputX == 0 && inputX % 2 != 0){
        return("it's a prime number ");
        
    }else{
        return("it's not a prime number");
        
    }
}
let inp =999983 ;
let call = primeNumber(inp);
console.log(call);

console.log(inp % 2);