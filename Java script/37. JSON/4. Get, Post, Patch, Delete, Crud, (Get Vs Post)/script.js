
function addAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        body: JSON.stringify({
            title: 'My new post',
            body: 'This is posts',
            userId: 1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(red => resizeBy.json)
    .then(post => console.log(post))
}