//কোন একটা string কে rverse করার জন্য নিচের নিয়ম ফলো করতে হয় । 
const greetings = 'Hello How are you?';

function reverceString(text){
  let reversed = '';
  for(const leter of text){
    console.log(leter);
    reversed =  leter + reversed ;
  }
}

const reversed = reverceString(greetings);

console.log(reversed);