import { SENDGRID_API } from '../../constants/constants';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(SENDGRID_API);

export default async function sendMail(req: any, res: any) {
  // You can get the email address from the request body
  const { email } = req.body;

  try {
    // Send the email using the SendGrid API
    await sendgrid.send({
      to: 'hello@igorswatowski.com', // Replace with the email address you want to send to
      from: 'hello@igorswatowski.com', // Replace with the email address you want to use as the sender
      subject: 'Hello from Vercel',
      html: `<p>Hello,</p><p>This is a test email sent from Vercel.</p>`,
    });
  } catch (error: any) {
    // If there is an error, log it and return a 500 status code
    console.error(error);
    return res.status(500).json({ error: error.message });
  }

  // If the email was sent successfully, return a 200 status code
  return res.status(200).json({ error: '' });
}
