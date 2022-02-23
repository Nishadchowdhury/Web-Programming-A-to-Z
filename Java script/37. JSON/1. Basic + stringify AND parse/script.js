// JavaScript Object Notation
// J   S      O      N      
// JSON
const user = {id: 11, name: 'Nishad', job: 'Developer'};
// console.log(user);
const stringified = JSON.stringify(user);
//console.log(stringified);

const shop = {
    name: "Nishad's cafe",
    address : 'NYC JH 438',
    profit: 15000,
    owner: {
        name: 'Nishad Chowdhury',
        profession: 'actor',
    },
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);
//console.log(shopStringified);

const reverted = JSON.parse(shopStringified);
console.log(reverted.owner);