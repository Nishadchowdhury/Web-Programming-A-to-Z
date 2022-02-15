


    function getInputValue(inputId){
        const inputField =  document.getElementById(inputId);
        const inputAmmountText = inputField.value;
        const ammountValue = parseFloat(inputAmmountText);

        //clear input field
        inputField.value = '';
        return ammountValue;
    }
    
    function updateTotalField(totalFieldId, Ammount){
        const dipositTotal = document.getElementById(totalFieldId);
        const dipositTotalText = dipositTotal.innerText;
        const previousDepositTotal = parseFloat(dipositTotalText) 
    
        dipositTotal.innerText = previousDepositTotal + Ammount;
    }   

    function getCurrentBalance(){
        const totalElement = document.getElementById('balance-total');
        const totalText = totalElement.innerText;
        const previousTotal = parseFloat(totalText);
        return previousTotal;
    }

    function updateBalance(dipositAmmount , isAdd){
        const totalElement = document.getElementById('balance-total');

        /*const totalText = totalElement.innerText;
        const previousTotal = parseFloat(totalText); */

        const previousTotal = getCurrentBalance();
        if(isAdd == true){
            totalElement.innerText = previousTotal + dipositAmmount;
        }else{
            totalElement.innerText = previousTotal - dipositAmmount;
        }
    }


document.getElementById('deposit-button').addEventListener('click', function(){
   /*  const dipositinput =  document.getElementById('deposit-input');
    const dipositAmmountText = dipositinput.value;
    const dipositAmmount = parseFloat(dipositAmmountText); */

    
    
    //get and update deposite total

/*     const dipositTotal = document.getElementById('deposit-total');
    const dipositTotalText = dipositTotal.innerText;
    const previousDepositTotal = parseFloat(dipositTotalText) 

    dipositTotal.innerText = previousDepositTotal + dipositAmmount;
*/  
    

    //update balance
   /*  const totalElement = document.getElementById('balance-total');
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + dipositAmmount;
     */
    
    const dipositAmmount = getInputValue('deposit-input');
    if(dipositAmmount > 0){
    updateTotalField('deposit-total',dipositAmmount);
    updateBalance(dipositAmmount,true);
    }
})

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    
/*     const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */

    
    
    //get and update withdraw total 
   /*  const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

 */
  
    //update balance after withdraw 
   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount ;
     */

    const withdrawAmount = getInputValue('withdraw-input');
    const CurrentBalance = getCurrentBalance();
    if((withdrawAmount > 0)&&(CurrentBalance >= withdrawAmount)){
    updateTotalField('withdraw-total',withdrawAmount);
    updateBalance(withdrawAmount,false);
    }
    if(CurrentBalance < withdrawAmount){
        alert("You can't withdraw more than what you have in your account .")
    }

})