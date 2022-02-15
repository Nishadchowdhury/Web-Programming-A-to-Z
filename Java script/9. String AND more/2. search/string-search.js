const porducts = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'Dell yellow laptop black camera',
    '1x59 lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'Dell purple color phone with Laptop'
];

const searching = 'laptop';

//index of

/* 
const output = [];
for(const product of porducts){
    if(product.indexOf(searching) != -1){
        output.push(product);
    }
}
 */

//এভাবে seacrching এর কাজ করা যায় কিন্তু কোন প্রোডাক্ট এর মধ্যে যদি একটা অক্ষর uppercase হয় তবে সেটা result এ আসবে না । 

/* 
the result , 
এখানে 'purple color phone with Laptop' এটা আসার কোথা ছিল কিন্তু এটা আসে নাই তার কারন হল এখানে laptop word এর মধ্যে l টা capital . 
[
'Dell hardcore i29 200GB laptop',
'yellow laptop black camera',
'1x59 lenovo commercial yoga laptop',
'LG supernova laptop'
]
 */

// তাই এখানে যাকে আমারা পাচ্ছি সেটাকে lowercase করতে হবে । আবার যাকে পাবো তাকেও lowercase করতে হবে । 
// product.toLowerCase().indexOf(searching.toLowerCase()) like this


/* 
const output = [];
for(const product of porducts){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}
 */

//seaching এর কাজটা আরও একটা ভাবে করা সে জন্য include দিয়ে খুজতে হবে । 
// .include , true আর false নিয়ে কাজ করে । সে দেখে যে product এর মধ্যে searching এর মধ্যে থাকা word টা আছে কিনা । 
// যদি থাকে তবে ture retrun করে এবং সে condition টা true হয় । 

/* 
const output = [];
for(const product of porducts){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product);
    }
}
 */

// .startsWith এটাও true , false নিয়ে কাজ করে । এটা দেখে যে ঐ string টা dell দিয়ে শুরু হইছে কিনা । 

/* const searching2 = 'Dell ';
const output2 = [];
for(const product of porducts){
    if(product.toLowerCase().startsWith(searching2.toLowerCase())){
        output2.push(product);
    }
}
console.log(output2);
 */


const searching2 = 'top';
const output2 = [];
for(const product of porducts){
    if(product.toLowerCase().endsWith(searching2.toLowerCase())){
        output2.push(product);
    }
}
console.log(output2);


// .sendsWith এটাও true , false নিয়ে কাজ করে । এটা দেখে যে ঐ string টা xyz দিয়ে শেষ হইছে কিনা । 


/* 
অর্থাৎ কোন string এর মধ্যে কিছু আছে কিনা ,
সেটা check , করার অনেক গুলা way আছে । 
.indexof(xyz) যেকোনো জায়গায় থাকলেই হবে ।
.includes(xyz) যেকোনো জায়গায় থাকলেই হবে ।
.startswith(xyz) শুরুতে থাকতে হবে । 
.endswith(xyz) শেষে থাকতে হবে । 
*/

// যখন কোন একটা string এর মধ্যে কোন একটা জিনিসআ আছে কিনা সেটা খুজতে হবে তখন *********** যার মধ্যে খুজতেছি এবং জাকে খুজতেছি 
// উভয় কেই .toLowerCase করতে করে নিতে হবে । 

// তবে password এর ক্ষেত্রে সেটাকে .toLowerCase করতে হবে না । কারন password caseSencitive