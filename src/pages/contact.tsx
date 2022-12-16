import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { en } from '../i18n/locales/en';
import { pl } from '../i18n/locales/pl';

import { sendContactForm } from "../lib/api";

const initValues = { firstName: "", lastName:"", topic: "", email: "", company: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const Contact = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  const [state, setState] = useState(initState);

  const { values, error } = state;

  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));


  const onSubmit = async (e: any) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message
      }));
    }
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
          >
            <div className="contact-form-wrapper-form-personal">
              <div className="contact-form-wrapper-form-personal-item">
                <label htmlFor="firstName">{t.contactFirstName}</label>
                <input id="firstName" name="firstName" type="text" value={values.firstName} onChange={handleChange}/>
              </div>
              <div className="contact-form-wrapper-form-personal-item">
                <label htmlFor="lastName">{t.contactSecondName}</label>
                <input id="lastName" name="lastName" type="text" value={values.lastName} onChange={handleChange}/>
              </div>
            </div>
            <div className="contact-form-wrapper-form-contact">
              <div className="contact-form-wrapper-form-contact-item">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={values.email} onChange={handleChange}/>
              </div>
              <div className="contact-form-wrapper-form-contact-item">
                <label htmlFor="companyName">{t.contactCompany}</label>
                <input id="company" name="company" type="text" value={values.company} onChange={handleChange}/>
              </div>
            </div>
            <div className="contact-form-wrapper-form-topic">
              <div className="contact-form-wrapper-form-topic-item">
                <label htmlFor="topic">{t.contactTopic}</label>
                <input id="topic" name="topic" type="text" value={values.topic} onChange={handleChange}/>
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
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <button type="submit" id="submit" className="btn-secondary" onClick={onSubmit}>
              {t.contactBtn}
            </button>
            <div id="msg">
              {error && (
                <h1>error</h1>
              )}  
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
