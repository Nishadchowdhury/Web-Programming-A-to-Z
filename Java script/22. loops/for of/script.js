// for..of and for..in

//for in
/* const names = ['a1', 'b2', 'c3'];

for(let x of names){
  console.log(x);
} */


//for of

// for key 
/* let student ={
  id : 101,
  name : 'Nishad Chowdhury',
  cgpa : 3.91
}
for( let x in student){
  console.log(x);
} */
// for value
/* let student ={
  id : 101,
  name : 'Nishad Chowdhury',
  cgpa : 3.91
}
for( let x in student){
  console.log(student[x]);
} */


// for key with value .
let student ={
  id : 101,
  name : 'Nishad Chowdhury',
  cgpa : 3.91
}
for( let x in student){
  console.log(`${x} : ${student[x]} `);
}