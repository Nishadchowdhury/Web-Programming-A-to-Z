const kibria = {
    Id: 101,
    money: 5000,
    name:'RJ Kibria',
    treatDey: function(expence){
        this.money = this.money - expence;
        console.log("main" , this);
        return this.money;
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',
   /*  treatDey: function(expence){
        this.money = this.money - expence;
        return this.money;
    } */
}
kibria.treatDey(100);

const heroTreatday = kibria.treatDey.bind(heroBalam);
heroTreatday(500)

/* 



৩. এটা হচ্ছে কোন একটা object এর মধ্যে ব্যেবহার হয়েছে এমন কোন function কোন কথাও থেকে ব্যেবহার করা ।
সে জন্য সে object bind করতে হবে । 

working Process কোন একটা object এর মধ্যে যদি কোন method থাকে সে method এর defult  হিসাবে this উসেজ করবে সেই object কে । 
কিন্তু চাইলে অন্য একটা object কে অইটার this হিসাবে সেট করে দিতে পারি । 
সেটার জন্য parent object কে bind করে বলে দিতে হবে যে এইটার সাথে ব্যেবহার কর । 

const aName = parentObjectNmae.methodName.bind() 
এখানে bind() এর ভেতরে যদি কিছু না দি তবে সে by default this কে ব্যেবহার করবে , (এখানে this মানে হল যে object এর ভেতরে function টা আছে সেটা )

আর যদি binf() এর মধ্যে অন্য কোন object কে parameter হাসবে দি তবে , এই object তাকে use করবে যদিও সে অন্য object এর mathod 


৪.
৫.

*/