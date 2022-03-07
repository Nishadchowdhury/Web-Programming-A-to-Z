/* 
const bank = owner => {
    balance = 0;

    return amount => {
        
    // balance = balance + amount; (same line)
    balance += amount;
    return balance;
     }
}

const MofijBank = bank('Mofij');
console.log(MofijBank(100));
console.log(MofijBank(200));
console.log(MofijBank(600));
console.log(MofijBank(50));
console.log(MofijBank.balance);
console.log(MofijBank(0));
 */


const bank = owner => {
    balance = 0;

    return {
        deposit: amount => {
            balance += amount;
            return balance;
             },
        withDraw: amount => {
            balance -= amount;
            return balance;
             },
    }
}

const MofijBank = bank('Mofij');
console.log(MofijBank.deposit(100));
console.log(MofijBank.deposit(300));
console.log(MofijBank.deposit(50));
console.log(MofijBank.balance);
console.log(MofijBank.withDraw(20));

/* 
    এখানে 18 নাম্বার লাইনে balance কে log করেছি , কিন্তু তা undefind দেখাচ্ছে । কারন closure data কে secure রাখে ।  
    
    আবার কখনো কোন function থেকে multiple return নিতে চাইলে ,
    17nl এর function টার মত একটা object কে return করতে হবে । 
    আর এই object এর ভেতর টার property গুলাকে আবার nested function হিসাবে বব্যেবহার করা যাবে এবং return ও নেয়া যাবে । 

    closure এর ব্যেবহার করা হয় অখন , যখন কোন একটা function এর ভেতরে আরেকটা function  কে call করা হয় অথবা return করা হয় তখন (just like nl27)। 


*/