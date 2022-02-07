//যেমন কোন loop  এর কাজ হল একই কাজ বার আবার করা , 
//তো কোন  function কে loop এর মত ব্যেবহার করা যায় সে জন্য function কোন কে তার ভেতর থেকে কল করা লাগে .

/* function consoleNumber(i){
    console.log(i);
    consoleNumber(i); 
}
consoleNumber(1); 
 */

/* উপরের ক্ষেত্রে এর ভেতর থেকে কল করা করা হয়েছে , এখানে যেহেতু প্রতিবার একই সংখ্যা দিয়ে পুনরায় কল করা হচ্ছে সেহেতু এটা প্রতিবার-ই একই ভ্যেলু i  এর মধ্যে স্টোর করবে । এবং এটার মধ্যে যেহেতু কোন ব্রেক condition নেই সেহেতু এটা একটা  infinite recursion  এর মধ্যে পড়ে যাবে । */

/* 
function consoleNumber(i){
    if(i == 5){
        return;
    }
    console.log(i);
    consoleNumber(++i); 
}
consoleNumber(1); 
 */

/* এবার i কে কল করার আগেই তার মান বারিয়ে দিচ্ছ == তাই প্রতিটা iteration i এর value পরিবর্তন হচ্ছে ।
এবং যেহেতু একটা condition দেওয়া হয়ছে সেহেতু যখন i এর মান বেড়ে 5 এর সমান হয় তখন-ই return করে দেয় এবং function এর iteration  এখানেই শেষ হয়ে যায় । */

//loop এর function ব্যেবহার করে ।

/* let sum = 0;
for(let i = 5; i>=1; i--){
    sum = sum + i;
}
console.log(sum); */

//convert to function 
/* function sum(i){
    console.log(i);
    if(i==1){
        return 1;
    }
   return i + sum(--i) ; 
}
console.log(sum(5)); */

