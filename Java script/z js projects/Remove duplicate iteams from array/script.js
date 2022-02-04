// video --> 22-2
// কোন array এর থেকে duplicate element কে বের করে দেওয়া দেখানো হল ।
// function removeDuplicate(names){
//   let unique = [];

//   // for(const element of names){

//   // }

//   for(let i = 0; i < names.length; i++ ){
//       let element = names[i];
//       if(unique.indexOf(element) == -1){
//           unique.push(element);
//       }
//   }
//   return unique;
// }


// const names = [12, 14, 15, 17, 12, 18, 10, 12, 16 ];

// let call = removeDuplicate(names);
// console.log(call);




function removeDuplicate(names){
  let unique = [];

  // for(const element of names){

  // }

  for(let i = 0; i < names.length; i++ ){
      let element = names[i];
      if(unique.indexOf(element) == -1){
          unique.push(element);
      }
  }
  return unique;
}

const names = [ 'abul', 'nanul', 'babul', 'sabil', 'ebul', 'kabul', 'babul', 'ebul', 'nanul' ];

let call = removeDuplicate(names);
console.log(call);