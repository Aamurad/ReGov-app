import nodemailer from 'nodemailer'
import emailVerificationTemplate from '../templates/emailVerificationTemplate'

export default function sendVerificationEmail(email: String) {
    console.log(email)
    /*Could use an emailing service such as sendgrid here to avoid using personal account*/
    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'regovtest@outlook.com',
            pass: 'RegovRegov',
        },
    })

    // mongodb.then((db: any) => console.log(db.collection('users').find({}).toArray()))

    const mailData: any = {
        from: 'regovtest@outlook.com',
        to: email,
        subject: `Verify your email address`,
        text: 'Verify your email address',
        html: emailVerificationTemplate(),
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err) console.log(err)
        else console.log(info)
    })
}
