// loging button 
const logInButton = document.getElementById('login-submit-btn');
const eMail = document.getElementById('user-email');
const password = document.getElementById('user-password');


logInButton.addEventListener('click', function(){
    
  if(((eMail.value) != '') && (password.value) != '' ){
    window.location.href='banking.html'
  }else if(((eMail.value) != '') && (password.value) == '' ){
    const valueToAlert = 'your password input box is empty';
    alert(valueToAlert);
  }else if(((eMail.value) == '') && (password.value) != '' ){
    const valueToAlert2 = 'your mail input box is empty';
    alert(valueToAlert2);
  }
  else{
    const newLocal = 'you Should Put something on the input boxes';
    alert(newLocal)
  }
})
