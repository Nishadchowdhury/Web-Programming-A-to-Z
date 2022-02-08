

/* 
const blogs = document.getElementsByClassName("blog");
for(const blog of blogs){
    blog.style.border = "2px solid orange"
    blog.style.borderRadius = "10px"
    blog.style.margin = "10px"
    blog.style.padding = "10px"
    blog.style.backgroundColor = "gray"
} */

const li = document.createElement("li");
li.innerText = 'blog-5';
const ul = document.getElementById('blog-list');

ul.appendChild(li);