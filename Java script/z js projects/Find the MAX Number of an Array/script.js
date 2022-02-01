// একটা array এর সব থেকে বড় সংখ্যাকে খুঁজে বের করা । 

// function largestElement(numbers){
//     let largest = 0;
//     for (let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const lol = [50, 60, 90, 120, 450, 300, 20, 180];
// const oldest = largestElement(lol);
// console.log('oldest' , oldest);

// things = Math.max(things)

// console.log(things);
// উপরের পদ্দতিতে -১ -৬ -১৫ এই রকম ঋণাত্মক মানের মধ্যে বড় মান বের করা যায়না সে জন্য নিচেরে নিয়ম অনুসরণ করতে হয় । 



function largestElement(numbers){

    let largest = numbers[0];
    
    for (let i = 0; i < numbers.length; i++){

        const element = numbers[i];

        if(element > largest){

            largest = element;
        }
    }
    return largest;
}

const lol2 = [-12, -6, -17];
const oldest2 = largestElement(lol2);
console.log('oldest' , oldest2);