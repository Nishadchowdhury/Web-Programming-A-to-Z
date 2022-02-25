fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


  function playit(){
      fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


  }

  function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(userData => userData.json())
    // .then(ConvedData => console.log(ConvedData))
    .then(convedPosts => getUserNmae(convedPosts))
  };
  
  function getUserNmae(x){
    const ul = document.getElementById('users');
    for(const name of x){
    const li = document.createElement('li');
    li.style.listStyle = 'number';
    li.innerText = `name: ${name.name}`;
    ul.appendChild(li);
  }
}
  /* function getUserNmae(x){
    const usersNames = [];
    for(const name of x){
        console.log(name.name);
    }
  } */



  function loadPost(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(storedPosts => storedPosts.json())
    //.then(convedPosts => sentData(convedPosts))
  }

  function sentData(x){
     // console.log(x);
  }