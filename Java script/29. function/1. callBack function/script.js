
function wellcomeMessage(name , kola){
        console.log(kola);
        kola(name)
}
function greetMorning(name){
    console.log('Good Morning' , name , ".");
}

wellcomeMessage('tom hanks' , greetMorning);


function handleClick(){
    console.log("button is clicked");
}

document.getElementById('my-btn').addEventListener('click' , handleClick )

document.getElementById('my-btn').addEventListener('click' , function handleClick(){

    console.log("button is clicked");
    
}
)