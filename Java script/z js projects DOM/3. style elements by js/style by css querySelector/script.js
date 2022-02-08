

const blogs = document.getElementsByClassName("blog");
for(const blog of blogs){
    blog.style.border = "2px solid orange"
    blog.style.borderRadius = "10px"
    blog.style.margin = "10px"
    blog.style.padding = "10px"
    blog.style.backgroundColor = "gray"
}

const red = document.querySelectorAll('.blog p');
for(const p of red){
    p.style.fontSize = "";
}