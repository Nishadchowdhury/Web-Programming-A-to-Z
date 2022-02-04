let Array = [12,23,434, -3, 54, -0.9, 8,34,5,-6]

function filter(inputN){
    let posativeN =[];
    for(const number of inputN){
        if(number >= 0){
            posativeN.push(number);
        }else{
            break;
        }
    }
    return posativeN;
}

let call = filter(Array);
console.log(call);