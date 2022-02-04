const phones =[
    {name: 'samsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'Walton m32', price: 15000, camera: 8, storage: 8},
    {name: 'shaomi m3', price: 12000, camera: 8, storage: 16},
    {name: 'oppo a2', price: 17000, camera: 8, storage: 32},
    {name: 'nokia n95', price: 8000, camera: 8, storage: 4},
    {name: 'htc h81', price: 25000, camera: 8, storage: 16},
];

let cheapest = phones[0];
for(const phone of phones){
    // conpare price only 
   if(phone.price < cheapest.price){
       cheapest = phone;
   }
}

// an other way 
let phones = [
    {name:"Nokia pathorPhone",price:3},
    {name:"mi mix",price:20},
    {name:"Samsung note 20",price:35},
    {name:"iphone 13 pro max",price:5},
    {name:"vivo n17",price:9},
]
// find the lowest price
function leastPrice(inputX){
   let firstPrice = inputX[0];

   for(let i = 0; i < inputX.length; i++){
       let thisIslowestPrice = inputX[i]
       if(firstPrice.price > thisIslowestPrice.price ){
        firstPrice = inputX[i].price;
    }else{
           firstPrice = inputX[0].price;
       }
   }
   return firstPrice;
}

let calling = leastPrice(phones);
console.log(calling)