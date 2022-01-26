"use strict"; 
outer : for(let red = 1; red <= 4 ; red++){
    console.log('outer' + red);

    for (let red2 = 1; red2 <= 3 ; red2++ ){
        console.log("-----nested " + red2);
        if(red ==2 && red2 == 2) {
            continue outer;
        }
    }

}
 console.log(" ");
 console.log("end");