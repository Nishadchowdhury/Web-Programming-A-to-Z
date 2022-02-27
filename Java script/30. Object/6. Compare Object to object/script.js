const first = {a:1 , b:2};
const second = {b:2 , a:1};

function  compareObjects(object1 ,  object2){
    if(Object.keys(object1).length !== Object.keys(object2).length){
        return false ;
    }
    for(const prop in object1){
        if(object1[prop] !== object2[prop]){
            return false ;
        }
    }
    return true;
}
const isEqual = compareObjects(first , second);
console.log(isEqual);

/* 
2, অনেক সময় ধরে ধরে একটু একটু করে সেটাকে check করে । function এর সাহায্যে 
সেটার parameter হিসাবে 2 টা object নিতে হবে । 
তার মধ্যে সে প্রথমে দেখবে যে 2 টা object ,, same কিনা 2 object একই হতে হলে তাদের সমান সংখ্যক keys থাকতে হবে ।
keys চেক করার জন্য 5nl এর statement 
property  চেক করার জন্য 8nl এর loop
এই দুইটা false হলে সেটাকে true return করবে ।

*/