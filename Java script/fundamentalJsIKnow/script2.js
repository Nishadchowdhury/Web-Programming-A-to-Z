
// const [fisrtMovie, secondMovie] = student.movie;
// console.log(fisrtMovie , secondMovie);


// 2.object destructuring

const {name , age} = {name: 'alu', age: 14 }

const {name2 , age2 } = { id:12, name: 'alu', age: 14 }

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification:{
        height:66,
        weight:67,
        address: 'kumarKhali',
        drink: 'water',
        watch:{
            color:'black',
            price:500,
            brand: 'gramin'
        }
    }
}

const {machine , ide} = employee;

const {weight, address} = employee.specification;

const {brand} = employee.specification.watch;


//---------------------------------JSON



const student = {
    name: 'Nishad',
    age: 22,
    movie: ['Frozen','Dhakar mastan']
};

const products = [
    {name: 'laptop', price: 3200, brand: 'len' , color:'silver' },
    {name: 'phone', price: 7000, brand: 'HTC' , color:'golden' },
    {name: 'watch', price: 3000, brand: 'casio' , color:'yellow' },
    {name: 'sunglass', price: 300, brand: 'ray' , color:'black' },
    {name: 'camera', price: 9000, brand: 'canon' , color:'gray' },
];

const newProdouct = {name: 'webcam' , price: 700, brand: 'Lal' };

// add new product 
// const withNewProduct = [...products , newProdouct ]

// const withNewProduct = [products[0],products[1],products[3],products[4]]
const withNewProduct = products.filter(p => p.name !== 'phone');

// console.log(withNewProduct);

let myVar = 5;

if(myVar){
    myVar = myVar * 100;
}else{
    myVar=0;
}

let myMoney = 50;
if(!myMoney){

}

const money = 800;
let food;
if(money > 100){
    food = 'biriyani';
}else{
    food = 'cha biscut';
}

// ternary
let food1 = money>100? 'biryani' : 'cha Biscuit';

// console.log(food1);

let drink =( money > 100 && myVar > 100)? 'coke' : 'cha Biscuit';

// console.log(drink);

//conv text to string
const num1 = 52;
console.log(num1);

const numStr = num1+'';
// console.log(numStr);

//str to num (+num)

let isActive = false ;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

// isActive ? showUser() : hideUser() ;

isActive && showUser(); //use && if the left side is true then right side will be executed 

// use || if the left side is false then right side will be executed 
isActive || hideUser()

// toggle boolean 
isActive = !isActive;

if(0){
    console.log('true');
}else{
    console.log(false);
}

