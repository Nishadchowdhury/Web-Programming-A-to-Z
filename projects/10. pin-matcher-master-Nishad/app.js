function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
       if(number == 'C'){
           calcInput.value = '';
       }
   }else{
    const calcInput = document.getElementById('typed-numbers');
    const previousNumber = calcInput.value;
    const newCalc = previousNumber + number ; 
    calcInput.value = newCalc;
   }
   
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('notify-success');
    const faileError = document.getElementById('notify-fail');

    if(pin == typedNumbers){
        faileError.style.display = 'none';
        successMessage.style.display = 'block';
    }else{
        successMessage.style.display = 'none';
        faileError.style.display = 'block';
    }
}