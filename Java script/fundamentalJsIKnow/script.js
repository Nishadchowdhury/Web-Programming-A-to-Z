// 1. vairibale diclare 
const name = 'some';
let names = 'some';

//2.  condition: > , < , == , <= , >= , != , === , !==
// multiplae condition &&  , || 

3.
if(name){
    
}else if(!names){

}else{

}
// 4. array(index = 0     1      2   ) 
//length = element ? 
const array = ['kola', 'dim', 'dud'];

// array[1] = 10;

// array.push(16)

//5 for loop  
for(let i = 0 ; i < array.length ; i++){
    // console.log(array[i]);
}
//6 object

/* const student = {
    name: 'Nishad',
    age: 22,
    movie: ['Frozen' , 'Dhakar mastan']
};

 */
const myNmae= 'name';

// console.log(myNmae);
// console.log(student['age']);
// console.log(student[myNmae]);



/* --------------------- 1. tamplate string ----------------------- */
const about = `template string:- My name is ${student['name']} age of ${student.age} , my second favMovie ${student.movie[1]} `;
// console.log(about);

// 2. arrow function 
const func = () =>  55 ;
// console.log(func());

const addSistyFive = (takeN) => takeN + 65;
const isEven = takeN => takeN % 2 == 0 ; 
const addThree = (x, y , z) => x+y+z ;
const doMath = (num1 , num2) => {
    const sum = num1 + num2;
    return sum;
} 

// 3. spread operator 


const array2 =[...array , 'cream'];

array.push(120)
array.push(120)
array.push(120)

// console.log(array2);


//array of object
const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo' , color:'silver' },
    {name: 'phone', price: 7000, brand: 'iPhone' , color:'golden' },
    {name: 'watch', price: 3000, brand: 'casio' , color:'yellow' },
    {name: 'sunglass', price: 300, brand: 'ribon' , color:'black' },
    {name: 'camera', price: 9000, brand: 'canon' , color:'gray' },
]

const brandNmaes = products.map(product => product.brand)
// console.log(brandNmaes);
const prices = products.map(product => product.price)
// console.log(prices);

// products.forEach( product =>  console.log(product.color) )

products.forEach(product => {

    })

//3. filter 
const cheap = products.filter(product => product.price <= 5000);

// console.log(cheap);

const specificName = products.filter(product => product.name.toLowerCase().includes('n'));
// console.log(specificName);

//find 
const onlyMatchName = products.find(p => p.name.toLowerCase().includes('n'));
// console.log(onlyMatchName);



// Destructuring 

// 1.array destructuring

const numbers = [42, 65];

// const x = numbers[0];
// const y = numbers[1];
// console.log(x,y)

const [x,y] = numbers;

function boxify(num1, num2){
    const nums = [ num1, num2];
    return nums;
}

console.log(boxify(x, y))


