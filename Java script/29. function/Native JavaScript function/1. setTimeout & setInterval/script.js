let seconds = 0;
const timeId = setInterval(() => {
    // seconds++
    console.log(++seconds);
    if(seconds > 5){
        clearInterval(timeId);
    }
} , 1000)
