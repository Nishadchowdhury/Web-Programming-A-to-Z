const express = require('express');
const cors = require('cors');
// import express from 'express';
// import cors from 'cors';
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

//middle ware
app.use(cors());
app.use(express.json());

//practice-user
//We4Q2UfomLBWLV6X


const uri = "mongodb+srv://practice-user:We4Q2UfomLBWLV6X@cluster0.sv4lg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    try {
        await client.connect();
        const tshirtCollection = client.db('Practice').collection('T-shirt');

        app.get('/shirts', async (req, res) => {
            const query = {};
            const cursor = tshirtCollection.find(query);
            const shirts = await cursor.toArray();
            res.send(shirts);
        })

    }

    finally {

    }


}

run().catch(console.dir);

//root of the server
app.get('/', (req, res) => {
    res.send('running Server t-shirt')
})
// to keep running the server
app.listen(port, () => {
    console.log("listening to port", port, "and server has running");
})