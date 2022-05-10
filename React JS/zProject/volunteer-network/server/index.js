const express = require('express');
const cors = require('cors');
// require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();


//middleware
app.use(cors())
app.use(express.json());

const username = '';
const password = '';


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.sv4lg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});





app.get('/', (req, res) => {
    res.send('running Server Mongo ok( by Nishad)')
})
app.listen(port, () => {
    console.log('listening to port', port);
})