import type { NextApiRequest, NextApiResponse } from 'next';
import { MailApi } from '@/constants/constants';
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(MailApi);

type ContactFormData = {
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  topic: string;
  message: string;
};

type ResponseData = {
  message: string;
};

const sendContactForm = async (
  data: ContactFormData,
  res: NextApiResponse<ResponseData>,
) => {
  const { email, firstName, lastName, company, topic, message } = data;

  const emailBody = `First Name: ${firstName}\r\nLast Name: ${lastName}\r\nTopic: ${topic}\r\nEmail: ${email}\r\nCompany: ${
    company ?? 'N/A'
  }\r\nMessage: ${message}`;

  const emailData = {
    to: 'hello@igorswatowski.com',
    from: 'hello@igorswatowski.com',
    subject: `[Lead from website] | ${firstName}`,
    text: `Email => ${email}`,
    html: emailBody.replace(/\r\n/g, '<br>'),
  };

  try {
    await sgMail.send(emailData);

    res.status(200).json({ message: 'Your message was sent successfully' });
  } catch (error) {
    console.error('Error sending contact form:', error);

    res
      .status(500)
      .json({ message: 'There was an error sending your message' });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Invalid request method' });
  }

  const { email, firstName, lastName, company, topic, message } = req.body;

  if (!email || !firstName || !lastName || !topic || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await sendContactForm(req.body, res);
  } catch (error) {
    console.error('Error processing contact form:', error);

    res
      .status(500)
      .json({ message: 'There was an error processing your message' });
  }
}
