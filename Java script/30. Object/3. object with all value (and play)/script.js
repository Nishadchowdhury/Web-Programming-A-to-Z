const student = {
    id: 101,
    money: 5000,
    name:'Rj kibria',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', ' math 101', 'calculas'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics',
        favFoods:{
            yogurt: `Bagura's`,
            biriyani:['kacchhi', 'haji'],
        },
    },
    takeExam: function(){
        console.log(this.subjects[0], ' takeing exam');
    },
    treatDey: function(expense){
        this.money = this.money  - expense;
        return this.money;
    },
}
const remaining1 = student.treatDey(900);
console.log(remaining1);
const remaining2 = student.treatDey(500);
console.log(remaining2);




    /* object এর function property কে , বলে method . 
    mrthod এর ভেতর থেকে object এর কোন property কে acces নিতে হলে । .this লিখতে হয় । 
    এটার মধ্যে থেকে return করা যায় ,
    এটা যেহেতু একটা function তাই এটাকে call করতে হয় ।

    object এর ভেতর থেকে কোন property কে access করতে হলে । 
    this. লিখতে হত , this মানে হল এই object টা , এই খান থেকে নিবা । 




    after img4

    আবার চাইলে parameter ও নিয়া যাবে । 

    */

    /* 
    object এর বাহির থেকে  কোন property কে access করতে হলে । 
    this. লিখতে হয়না । সরাসরি নেওয়া যায় ।  

    */

