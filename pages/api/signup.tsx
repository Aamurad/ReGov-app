export default function Signup(req: { body: any }, res: any) {
    console.log(req.body)
    res.status(200).json({ message: 'Success' })
}
