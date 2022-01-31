// function isLeapYear(inputYearN){
//     if(inputYearN % 4 == 0){
//         return true;
//     }
//     return false;
// }

// let userInput = 2100;

// let checkPoint = isLeapYear(userInput);

// console.log(checkPoint);

/*way *********************** 2 */

function isLeapYear(inputYearN){
    if((inputYearN % 4 == 0) && (inputYearN % 100 != 0) || (inputYearN % 400 == 0) ){
        return true;
    }
    return false;
}

let userInput =1800;

let checkPoint = isLeapYear(userInput);

console.log( "it's", checkPoint);

(checkPoint === true ) ? console.log(userInput , 'is a leap Year') : (console.log( userInput, 'is not a leap year')) ;


/*way *********************** 3 */

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));

function leapYear(userInput){
    (userInput % 100 == 0) 
}