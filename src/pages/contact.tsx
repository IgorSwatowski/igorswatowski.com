import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { en } from '../i18n/locales/en';
import { pl } from '../i18n/locales/pl';
import { FormDataProps } from '../types/formData';
import nodemailer from 'nodemailer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    topic: '',
    email: '',
    message: '',
  });

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendMail = async () => {}


    // Send the email using the transporter object
    try {
      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    sendMail();
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMail();
  };

  return (
    <main>
      <section className="contact-form">
        <div className="contact-form-wrapper container-box">
          <h1
            className="contact-form-wrapper-heading heading-primary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t.contactHeading}
          </h1>
          <p
            className="contact-form-wrapper-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="75"
          >
            {t.contactText}
          </p>
          <p
            className="contact-form-wrapper-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="75"
          >
            {t.contactInstagram}
            <a href="https://instagram.com/igor.websites" target="_blank" rel="noreferrer">
              @igor.websites
            </a>
            {t.contactEmail}
            <a href="mailto: hello@igorswatowski.com" target="_blank" rel="noreferrer">
              hello@igorswatowski.com
            </a>
            {t.contactForm}
          </p>
          <form
            className="contact-form-wrapper-form"
            id="contact-form"
            data-aos="fade-down"
            data-aos-delay="125"
            onSubmit={handleSubmit}
          >
            <div className="contact-form-wrapper-form-personal">
              <div className="contact-form-wrapper-form-personal-item">
                <label htmlFor="firstName">{t.contactFirstName}</label>
                <input id="firstName" name="firstName" type="text" />
              </div>
              <div className="contact-form-wrapper-form-personal-item">
                <label htmlFor="lastName">{t.contactSecondName}</label>
                <input id="lastName" name="lastName" type="text" onChange={handleChange} />
              </div>
            </div>
            <div className="contact-form-wrapper-form-contact">
              <div className="contact-form-wrapper-form-contact-item">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" onChange={handleChange} />
              </div>
              <div className="contact-form-wrapper-form-contact-item">
                <label htmlFor="companyName">{t.contactCompany}</label>
                <input id="companyName" name="companyName" type="text" onChange={handleChange} />
              </div>
            </div>
            <div className="contact-form-wrapper-form-topic">
              <div className="contact-form-wrapper-form-topic-item">
                <label htmlFor="topic">{t.contactTopic}</label>
                <input id="topic" name="topic" type="text" onChange={handleChange} />
              </div>
            </div>
            <div className="contact-form-wrapper-form-message">
              <div className="contact-form-wrapper-form-message-item">
                <label htmlFor="message">{t.contactMessage}</label>
                <textarea
                  rows={10}
                  cols={100}
                  name="message"
                  id="message"
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <button type="submit" id="submit" className="btn-secondary">
              {t.contactBtn}
            </button>
            <div id="msg"></div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
