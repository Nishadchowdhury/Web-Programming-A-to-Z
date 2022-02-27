const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

for(const prop in bottle){
    // console.log(prop , bottle[prop]);
}

const keys = Object.keys(bottle);
for(const key of keys){
    // console.log(key);
}

for (const [key , value] of Object.entries(bottle)){
    console.log(key , value);
}

