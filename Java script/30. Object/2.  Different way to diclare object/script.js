// 1. Using Object Literal 
const student = { name: 'sakib al Hasan' , job: 'cricketer'};
// 2. constructor
const person = new Object();


const human = Object.create(student);
// console.log(human.job);


// creating object from class

class People {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus' , 12)
// console.log(peop);



//function
function Manush(name){
    this.name = name;
}

const man = new Manush('kader');
console.log(man);