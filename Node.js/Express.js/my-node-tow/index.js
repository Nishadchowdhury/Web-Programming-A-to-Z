const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello from my over smarty pant!! okokok')
});


const users = [
    { id: 1, name: 'vai', email: 'vai@gmail.com' },
    { id: 2, name: 'Abir', email: 'Abir@gmail.com' },
    { id: 3, name: 'kola', email: 'kola@gmail.com' },
    { id: 4, name: 'Nola', email: 'Nola@gmail.com' },
]


app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/users/:id', (req, res) => {

    console.log(req.params)

    const id = parseInt(req.params.id);
    
    const user = users.find(u => u.id === id);

    res.send(user)
})



app.listen(port, () => {
    console.log('Listening to prot', port);
})