
const  red = () => {
    green();
}


const green = () =>{
    blue()
}

const blue = () => {
    console.trace('hey bro');
}

red();