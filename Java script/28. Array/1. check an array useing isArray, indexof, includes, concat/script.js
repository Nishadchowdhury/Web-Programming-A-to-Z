/* 
function megaFriends(friends){
    let mega = friends[0];
   if(Array.isArray(friends) == false){
     return 'plese provide an array'  
   }
   
   for(const friend of friends){
    if(friend.length > mega.length){
        mega = friend;
    }
    }
    return mega;
}

const friends= ['kola', 'khaay', 'bandor', 'mama', ]
const myBigBuddy = megaFriends(420);
console.log(myBigBuddy); */



/* function megaFriends(friends){
    if(friends.indexOf('bandor') != -1 ){
      return 'plese provide an array'  
    }
 
 }
 
 const myBigBuddy = megaFriends(friends);
 console.log(myBigBuddy);    */

 
 const friends= ['kola', 'khaay', 'bandor', 'mama', ]

 if(friends.includes('mama') == true){
     console.log('is"s true mama');
 }