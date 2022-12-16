import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const host = process.env.EMAIL_HOST;
const port = process.env.EMAIL_PORT;

export const transporter = nodemailer.createTransport({
  host,
  port,
  secure: true,
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};