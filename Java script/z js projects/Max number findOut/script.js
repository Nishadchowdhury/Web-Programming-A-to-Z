// অনেক গুলা variable এর মধ্য থেকে কার মান বেশি বা কে সব থেকে বড় সেটা বের করার কাজ করা হয় ।
// এটা করার অনেকগুলা রাস্তা আছে । 
const Commissioner = 250;
const Mayor = 450;
const minister = 850;

//way one .
if(Commissioner > Mayor && Commissioner > minister){
    console.log("Commissioner is the greatest");
}else if(Mayor > Commissioner && Mayor > minister){
    console.log("mayor is the greatest");
}else{
    console.log("minister is the greatest");
}

// way two .
let shortCut = Math.max(Commissioner,Mayor,minister);
console.log("cheaking with Math.max() = ", shortCut);   console.log(""); console.log("");

// way three

function findLargest(my,mi){
    if(my>mi){
        return "mayor is great brooo";
    }else{
        return "minister is great brooo"
    }
}

let result = findLargest(200,400);
console.log(result);