//1

//1. add button event handler
document.getElementById("Submit-comment").addEventListener("click", function () {
    // 2. get user comment
    const textIn = document.getElementById("new-comment");

    // 3. creat element to store new comment by (P)

    const newComment = document.createElement('p');
    newComment.innerText = textIn.value;

    //4. append the comment (the ,p, element)
    const commentPusher = document.getElementById("comment-container");
    commentPusher.appendChild(newComment);
    
    // add as child of ( commentPusher )

    //5.make the comment BOX empty .
    textIn.value = "";
  });