// banking started 
// 1. check diposit button  working or not
// 2. deposit input এর ভেতরের  সংখ্যা নিয়ে আসতে হবে । js-line=7



document.getElementById('deposit-button').addEventListener('click',function(){
    const depoInput = document.getElementById('deposit-input');
    const dipoAmmount = parseFloat(depoInput.value);

    const dipoTotal = document.getElementById('deposit-total');
    const dipoTotalConv = parseFloat(dipoTotal.innerText);

    const totalAdd =  dipoAmmount + dipoTotalConv
    dipoTotal.innerText = totalAdd;

    //adding the deposit 
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceConv = parseFloat(totalBalance.innerText);
    totalBalance.innerText = totalBalanceConv + totalAdd ;
    depoInput.value = '';

})

document.getElementById('withdraw-button').addEventListener('click' , function(){
    const addWithdraw = document.getElementById('withdraw-input');
    const addWithdraw2 = parseFloat((addWithdraw).value);
    const totalBalanceForWithdraw = document.getElementById('balance-total');
    const totalBalanceConvForWithdraw = parseFloat(totalBalanceForWithdraw.innerText);
    const totalWithdrawMinus = totalBalanceConvForWithdraw - addWithdraw2;
    totalBalanceForWithdraw.innerText = totalWithdrawMinus;

    //add value in WithDraw
    const totalWithdraw = document.getElementById('withdraw-total');
    const totalWithdraw2 = totalWithdraw.innerText;
    const totalWithdrawConv = parseFloat(totalWithdraw2);
    totalWithdraw.innerText = addWithdraw2 + totalWithdrawConv;
    //clear withdraw box
    addWithdraw.value = '';
})


