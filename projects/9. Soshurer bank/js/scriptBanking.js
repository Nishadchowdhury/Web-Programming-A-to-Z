// banking started 
// 1. check diposit button  working or not
// 2. deposit input এর ভেতরের  সংখ্যা নিয়ে আসতে হবে । js-line=7



// document.getElementById('deposit-button').addEventListener('click',function(){
//     const depoInput = document.getElementById('deposit-input');
//     const dipoAmmount = parseFloat(depoInput.value);

//     const dipoTotal = document.getElementById('deposit-total');
//     const dipoTotalConv = parseFloat(dipoTotal.innerText);

//     const totalAdd =  dipoAmmount + dipoTotalConv
//     dipoTotal.innerText = totalAdd;

//     //adding the deposit 
//     const totalBalance = document.getElementById('balance-total');
//     const totalBalanceConv = parseFloat(totalBalance.innerText);
//     totalBalance.innerText = totalBalanceConv + totalAdd ;
//     depoInput.value = '';

// })

// document.getElementById('withdraw-button').addEventListener('click' , function(){
//     const addWithdraw = document.getElementById('withdraw-input');
//     const addWithdraw2 = parseFloat((addWithdraw).value);
//     const totalBalanceForWithdraw = document.getElementById('balance-total');
//     const totalBalanceConvForWithdraw = parseFloat(totalBalanceForWithdraw.innerText);
//     const totalWithdrawMinus = totalBalanceConvForWithdraw - addWithdraw2;
//     totalBalanceForWithdraw.innerText = totalWithdrawMinus;

//     //add value in WithDraw
//     const totalWithdraw = document.getElementById('withdraw-total');
//     const totalWithdraw2 = totalWithdraw.innerText;
//     const totalWithdrawConv = parseFloat(totalWithdraw2);
//     totalWithdraw.innerText = addWithdraw2 + totalWithdrawConv;
//     //clear withdraw box
//     addWithdraw.value = '';
// })




document.getElementById('deposit-button').addEventListener('click', function(){
    const dipositinput =  document.getElementById('deposit-input');
    const dipositAmmountText = dipositinput.value;
    const dipositAmmount = parseFloat(dipositAmmountText);
    
    //get current deposit 
    const dipositTotal = document.getElementById('deposit-total');
    const dipositTotalText = dipositTotal.innerText;
    const previousDepositTotal = parseFloat(dipositTotalText)

    dipositTotal.innerText = previousDepositTotal + dipositAmmount;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + dipositAmmount;
    //clear input field
    dipositinput.value = '';
})

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    
    //update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //update balance after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    //clear withdraw input field 
    withdrawInput.value = '';

})