import type { NextApiRequest, NextApiResponse } from 'next';
import { MailApi } from '../../constants/constants';
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(MailApi);
type Data = {
  message: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const {
      firstName,
      email,
      message,
      lastName,
      topic,
      company,
    }: {
      email: string;
      firstName: string;
      lastName: string;
      company?: string;
      topic: string;
      message: string;
    } = req.body;
    const msg = `FirstName: ${firstName}\r\n LastName: ${lastName}\r\n Topic: ${topic}\r\n  Email: ${email}\r\n Company: ${company}\r\n  Message: ${message}`;
    const data = {
      to: 'hello@igorswatowski.com',
      from: 'hello@igorswatowski.com',
      subject: `[Lead from website] | ${firstName}`,
      text: `Email => ${email}`,
      html: msg.replace(/\r\n/g, '<br>'),
    };
    try {
      await sgMail.send(data);
      res.status(200).json({ message: 'Your message was sent successfully' });
    } catch (err) {
      res.status(500).json({ message: `There was an error sending your message. ${err}` });
    }
  }
}
