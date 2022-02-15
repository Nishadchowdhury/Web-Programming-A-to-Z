


function updateProductNumber(product ,price ,isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let caseNumebr = productInput.value ;

    if(isIncreasing == true){
    caseNumebr = parseInt(caseNumebr) + 1;
    }else if (caseNumebr > 0){
    caseNumebr = parseInt(caseNumebr) - 1;
    }
    productInput.value = caseNumebr;

    //upate total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = caseNumebr * price;

    //calculate total
    calaculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calaculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax ;
    //update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

};

//phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1219,true)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1219,false)
})

//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click',function(){
   updateProductNumber('case',59,true)
})

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false)
})