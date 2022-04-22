const edpress = 
const { MongoClient } = require('mongodb');





async function main() {

    const uri = "mongodb+srv://dbuser1:eKm3WnNZqhR3b!n@<your-cluster-url>/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri);


    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }


}

main().catch(console.error);