//video --> 22-3
//কোন একটা string কে rverse করার জন্য নিচের নিয়ম ফলো করতে হয় । 
const greetings = 'Hello How are you?';
// function convToReverse(inputX){
//   let reversed = '';
//   for(let i = 0; i < inputX.length; i++){
//     let letter = inputX[i];
//     reversed = letter + reversed ;
//   }
//   return reversed;
// }

// let call = convToReverse(greetings);
// console.log(call);


function reverceString(text){
  let reversed = '';
  for(const leter of text){
   
    reversed = leter+reversed ;
  }
  return reversed;
}

const reversed = reverceString(greetings);

console.log(reversed);

