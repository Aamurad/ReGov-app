import mongodb from '../../lib/mongodb'

export default function Login(req: { body: any }, res: any) {
    console.log(req.body)
    // mongodb.then((db: any) => console.log(db.collection('users').find({}).toArray()))

    return res.status(200).json({ message: 'Hello' })
}
