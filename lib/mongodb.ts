import { MongoClient } from 'mongodb'
import * as fs from 'fs'

const credentials: any = 'X509-cert-1959276760362529247.pem'
const uri: any = process.env.MONGODB_URI

const options = {
    sslKey: credentials,
    sslCert: credentials,
}

let client: any
let clientPromise: any

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).

    let { _mongoClientPromise }: any = global

    if (!_mongoClientPromise) {
        client = new MongoClient(uri, options)

        _mongoClientPromise = client.connect()
        console.log('MongoDB connected')
    }
    clientPromise = _mongoClientPromise
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options)
    console.log(typeof client, 'client type')

    clientPromise = client.connect()
    console.log(typeof clientPromise, 'Client Promise type')
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
