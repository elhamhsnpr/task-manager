const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(connectionURL)

async function run() {
    try {
        console.log('Database Connected!')
        const db = client.db(databaseName)


    } catch {
        await client.close();
    }
}
run()

