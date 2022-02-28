/* function getPin(){
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
} */


function generatePin(){
    const randomNumber =  Math.round(Math.random()*10000);
    const convGeneNumberToString = randomNumber + '';
    if(convGeneNumberToString.length == 4){
        const getPinStorage = document.getElementById('display-pin');
        getPinStorage.value = convGeneNumberToString;
    }else{
        return generatePin();
    }
    
}



document.getElementById('key-pad').addEventListener('click', function(event){
   
    const innerCodeBox = document.getElementById('typed-numbers');
    const innerCodeBoxPrevious = innerCodeBox.value ;

    const clickedNumebr = event.target.innerText;
    const newNumber =innerCodeBoxPrevious + clickedNumebr;

    if(!isNaN(clickedNumebr)){
      
        innerCodeBox.value = newNumber ;
    }else if (clickedNumebr == "<"){
        innerCodeBox.value = innerCodeBox.value.slice(0, -1);
    }
    else if((clickedNumebr) == "C"){
        innerCodeBox.value = '';
    }

});

function verifyPin() {
    const currentPin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
   if (currentPin == '' && typedNumber == ''){
       alert('plese add an number');
   }else{
    if(currentPin == typedNumber){
        document.getElementById('notify-success').style.display = "block";
        document.getElementById('notify-fail').style.display = "none";
    }else{
        document.getElementById('notify-fail').style.display = "block";
        document.getElementById('notify-success').style.display = "none";
    }
   }
    
}