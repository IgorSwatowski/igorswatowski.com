import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../utils/sendMail';

const mail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { topic, email, firstName, lastName, company, message } = req.body;
    await sendEmail({ company, email, firstName, lastName, topic, message });
    return res.status(200).end();
  }
  return res.status(404).json({
    error: {
      code: 'not_found',
      messgae: "The requested endpoint was not found or doesn't support this method.",
    },
  });
};

export default mail;
