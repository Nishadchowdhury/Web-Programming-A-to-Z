// কোন কিছু তৈরি করতে কি পরিমান কাঁচামাল লাগবে সেটার হিসাব ।
/* 
chair = 3cft
table = 10cft
bed = 50cft
*/

function totalWood(chairQueantity, tableQueantity, bedQueantity) {
    let perChairWood = 3;
    let pertableWood = 10;
    let perbadWood = 50;
    // constant woodtakes
    let totalwoodChair = chairQueantity * perChairWood;
    let totalwoodTable = pertableWood * tableQueantity;
    let totalwoodBed = perbadWood * bedQueantity;
    // wood addition 
    let totalWood = totalwoodChair + totalwoodTable + totalwoodBed;
    //retrun
    return totalWood;
}

let call = totalWood(1, 1, 1);

console.log(call);