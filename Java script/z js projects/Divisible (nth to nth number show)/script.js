//video --> 22-6

for(let i = 1; i <= 50; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('foobra');
    }
     else if(i % 3 == 0){
    console.log('foo');
    }
    else if(i % 5 == 0){
        console.log('bra');
    }
    else{
    console.log(i);
    }
}