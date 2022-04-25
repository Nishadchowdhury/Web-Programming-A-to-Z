const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// import express, { json } from 'express';
// import cors from 'cors';
// const port = process.env.PORT || 5000;
// const app = express();
// import { MongoClient, ServerApiVersion } from 'mongodb';

//middleWare
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ema-john-db.ozpfy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    try {

        await client.connect();
        const productCollection = client.db('emaJhon').collection('products');

        //get all data
        app.get('/products', async (req, res) => {
            console.log('query', req.query);
            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);

            const query = {};
            const cursor = productCollection.find(query);

            let products;
            
            if (page || size) {
                products = await cursor.skip(page*size).limit(size).toArray();
            } else {
                products = await cursor.toArray();
            }
            res.send(products);
        });

        //pagination
        app.get('/productCount', async (req, res) => {
            const count = await productCollection.estimatedDocumentCount();
            res.send({ count });
        })

        // use post to get products by ids
        app.post('/productByKeys' , async(req, res) => {
            const keys = req.body;
            const ids = keys.map(id => ObjectId(id))
            const query = {_id: {$in: ids}}
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            console.log(keys);
            res.send(products);
        })


    }

    finally {

    }

}

run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('john is running ')
});
app.listen(port, () => {
    console.log("john is running on port", port);
})