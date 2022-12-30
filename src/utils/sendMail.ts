import fetch from 'node-fetch';
import { MailApi } from '../constants/constants';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

interface sendMailProps {
  topic: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  message: string;
}

const sendEmail = async ({
  topic,
  email,
  firstName,
  lastName,
  company,
  message,
}: sendMailProps) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${MailApi}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: 'hello@igorswatowski.com',
          subject: 'Demo success :)',
        },
      ],
      from: {
        email: 'hello@igorswatowski.com',
        name: 'Test SendGrid',
      },
      content: [
        {
          type: 'text/html',
          value: `Congratulations <b>${firstName}</b>, you just sent an email with sendGrid`,
        },
      ],
    }),
  });
};

export { sendEmail };
