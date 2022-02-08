document.getElementById("helloBroId").style.color ="red";



const HelloBroId2 = document.getElementById("helloBroId2");
HelloBroId2.style.backgroundColor = "yellow";
HelloBroId2.style.borderRadius = "10px";
HelloBroId2.style.borderRadius = "yellow";
HelloBroId2.style.textAlign = "center";




const blogs = document.getElementsByClassName("blog");
for(const blog of blogs){
    blog.style.border = "2px solid orange"
    blog.style.borderRadius = "10px"
    blog.style.margin = "10px"
    blog.style.padding = "10px"
    blog.style.backgroundColor = "gray"
}