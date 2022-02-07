//নির্দিষ্ট কোন ডাটা এর কারনে কোন array এর মধ্যে থাকা object কে  ভিভিন্ন ভাবে filter করা যায় ।
/*  const products = [
    {name: 'iphone 14', price: 70000} ,
    {name: 'samsung galaxy 14', price: 60000}, 
    {name: 'dell laptop', price: 50000} ,
    {name: 'lenovo yoga', price: 55000} ,
    {name: 'asus afsus 14', price: 35000}, 
    {name: 'smart watch samsung', price: 7000}, 
    {name: 'apple watch', price: 20000} ,
    {name: 'plus one phone 4', price: 27000} ,
]
 */
/* function searchProducts(products, searchText){
    for(const product of products){
        console.log(product);
    }
    
}
searchProducts(products); 
*/


//Array এর মধ্যে থাকা object এর কোন proparty কে যদি পেতে চাই তবে console.log(product.propartyName); অথবা return product.propartyName; দিতে হবে ।

/* function searchProducts(products, searchText){
    for(const product of products){
        console.log(product.name);
    }

}  */


/* *********************************************************************************************************************************** */

// return product.propartyName; কোন condition এর উপর ভিত্তি করে , যেমন নামের মধ্যে আলাদা করে কোন নির্দিষ্ট word থাকলে শুধু মাত্র সেই সব কয়টা property কে-ই retrun  পেতে চাই তবে নিচের মত করতে হবে । 

/* const products = [
    {name: 'iphone 14', price: 70000} ,
    {name: 'samsung galaxy 14', price: 60000}, 
    {name: 'dell laptop', price: 50000} ,
    {name: 'lenovo yoga laptop', price: 55000} ,
    {name: 'asus afsus laptop', price: 35000}, 
    {name: 'smart watch samsung', price: 7000}, 
    {name: 'apple watch', price: 20000} ,
    {name: 'plus one phone 4', price: 27000} ,
]


function searchProducts(products, searchText){
    for(const product of products){
        if(product.name.includes('laptop')){
        console.log(product.name);
    
        }
    }

}
searchProducts(products);  */



/* উপরের নিয়মটা একদম সঠিক নিয়ম নয় বা কিছু অসুবিদা সম্পন্ন নিয়ম , সে জন্য নিছের নিয়েমে উপরের কাজ টা করাই ভাল নিয়ম ।
 কারন হল উপরে আমরা যখন  function কে call করছি তখন একটা parameter use  করছি তাই বাকি searchText নামের parameter টা খালি পরে আছে এবং আমরা ভুল ভাবে সরাসরি একটা hard text , function এর মধ্যে দিয়ে দিছি যা পরবর্তীতে পরবর্তীতে পরিবর্তন করা সম্ভব নয় সে জন্য আমরা ঐ হার্ড  hard text সরাসরি function এর মধ্যে না দিয়ে সেটকে  call করার সময় parameter এর মধ্যে store করে দিয়ে সঠিক ও dynsmic নিয়মে করা হল ।  */

/* 
 const products = [
    {name: 'iphone 14', price: 70000} ,
    {name: 'samsung galaxy 14', price: 60000}, 
    {name: 'dell laptop', price: 50000} ,
    {name: 'lenovo yoga laptop', price: 55000} ,
    {name: 'asus afsus laptop', price: 35000}, 
    {name: 'smart watch samsung', price: 7000}, 
    {name: 'apple watch', price: 20000} ,
    {name: 'plus one phone 4', price: 27000} ,
]


function searchProducts(products, searchText){
    for(const product of products){
        if(product.name.includes(searchText)){
        console.log(product.name);
    
        }
    }

}
searchProducts(products, 'laptop'); */






// উপরের নিয়মে filtering  করার পর সেই output  গুলাকে কোন array  এর মধ্যে store করা হল নিচে ।


const products = [
    {name: 'iphone 14', price: 70000} ,
    {name: 'samsung galaxy 14', price: 60000}, 
    {name: 'dell laptop', price: 50000} ,
    {name: 'lenovo yoga laptop', price: 55000} ,
    {name: 'asus afsus laptop', price: 35000}, 
    {name: 'smart watch samsung', price: 7000}, 
    {name: 'apple watch', price: 20000} ,
    {name: 'plus one phone 4', price: 27000} ,
]


function searchProducts(products, searchText){
    let unique =[];
    for(const product of products){
        if(product.name.includes(searchText)){
        unique.push(product);
    
        }
    }
    return unique;
}
let call =searchProducts(products, 'phone');
console.log(call);