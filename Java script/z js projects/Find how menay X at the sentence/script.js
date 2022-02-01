let sentence = "amar sonar bangla ami tomay valo basi";
let count = 0;
for(let i =0; i < sentence.length; i++){
    let later = sentence[i];
    if(later == 'a'){
        count++;
    }
}
console.log(count);
console.log(sentence.length);