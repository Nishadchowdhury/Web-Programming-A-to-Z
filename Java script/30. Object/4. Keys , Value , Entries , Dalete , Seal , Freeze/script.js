const bottle = {color: 'yellow', hold: 'water', price:50 , isCleaned: true};
 
Object.freeze(bottle);
bottle.price = 100;
delete bottle.isCleaned;
console.log(bottle);

/* 
   


 */