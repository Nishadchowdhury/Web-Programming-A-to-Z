//video --> 22-9 
/* story behind the code : 
মনেকরি কোন একটা জঙ্গলের
প্রথম ১০ মাইলে গড়ে ১০ টা করে প্রানি দেখতে পাবো ।
১০ থেকে ২০ মাইলের ক্ষেত্রে প্রতি মাইলে গড়ে ৫০ টা করে প্রানি থাকে ।  

>> hints-->
1. যেমন আমি যদি ১০ মাইল গভীরে যাই তবে , মোট প্রায় ১০০_টা প্রানী দেখতে পাবো ।
2. আমি যদি ১১ মাইল গভীরে যাই তবে , মোট প্রায় (প্রথম ১০ এর ক্ষেত্রে ১০০ + (১১ নাম্বার মাইলের জন্য ৫০ ) ) =১৫০ টা প্রানী দেখতে পাবো । 
*/

function animalCount(miles){
    const animaleDensityFirst10Miles = 10;
    const animaleDensitySecond10Miles = 50;
    const animaleDensityRestMiles = 100;
    if(miles <= 10){
        const count = miles * animaleDensityFirst10Miles;
        return count;
    }
    else if (miles <= 20){
        const firstDenseAnimals = 10 * animaleDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animaleDensitySecond10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals ;
        return totalAnimals ;
    }
    else{
        const firstDenseAnimals = 10 * animaleDensityFirst10Miles; //এখানে প্রথম ১০ মাইলের জন্য মান আসবে , সেটা ৩১ নাম্বার এ যোগ হবে ।
        const secondDenseAnimals = 10 * animaleDensitySecond10Miles; //এখানে দ্বিতীয় ১০ মাইলের জন্য মান আসবে , সেটা ৩১ নাম্বার এ যোগ হবে ।
        const restMiles = miles - 20; // যেহেতু ০ - ২০ মাইলের মোট প্রানীর সংখ্যা আগের ২ লাইনে হিসাব করা হয়েছে সেহেতু সে গুলা বাদ দেয়া হল ।
        const restDenseAnimals = restMiles * animaleDensityRestMiles;//২০ মাইলের উপরে যে মাইল গুলা আছে সেই কয়টা মাইলের প্রানি সংখ্যা বের করা হল ।
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;// আগে থেকে বের করে রাখা মাইলের মানের সাথে ২০ মাইলের পরের  মাইলের মান যোগ করা হল । 
        return totalAnimals;
    }
}

const animal = animalCount(4);
console.log(animal);