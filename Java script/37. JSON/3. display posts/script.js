function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(getPostsText => getPostsText.json())
    .then(getPosts => getposts(getPosts))
    
}
loadPosts();

function getposts(x){
    const postContainer = document.getElementById('allPost');
    for(const post of x){
    const Div = document.createElement('Div');
    Div.style.listStyle = 'number';
    Div.className = 'post';
    Div.innerHTML = 
    `<h3>New Title</h3>
    <p>New Post</p> <br>
    <span>${post.title}</span>
    `;
    postContainer.appendChild(Div);
   }

}
