import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { en } from '../i18n/locales/en';
import { pl } from '../i18n/locales/pl';

import { sendContactForm } from '../lib/api';

interface FormValues {
  firstName: string;
  lastName: string;
  topic: string;
  email: string;
  company: string;
  message: string;
  [key: string]: any;
}

const initValues: FormValues = {
  firstName: '',
  lastName: '',
  topic: '',
  email: '',
  company: '',
  message: '',
};

interface State {
  isLoading: boolean;
  error: string;
  values: FormValues;
}

const initState: State = {
  isLoading: false,
  error: '',
  values: initValues,
};

const Contact: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  const [state, setState] = useState<State>(initState);

  const { values, error } = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
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
          {error && <div className="contact-form-error">Problem z wyslaniem formularza </div>}

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
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form-wrapper-form-personal-item">
                <label htmlFor="lastName">{t.contactSecondName}</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="contact-form-wrapper-form-contact">
              <div className="contact-form-wrapper-form-contact-item">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form-wrapper-form-contact-item">
                <label htmlFor="companyName">{t.contactCompany}</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={values.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="contact-form-wrapper-form-topic">
              <div className="contact-form-wrapper-form-topic-item">
                <label htmlFor="topic">{t.contactTopic}</label>
                <input
                  id="topic"
                  name="topic"
                  type="text"
                  value={values.topic}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="contact-form-wrapper-form-message">
              <div className="contact-form-wrapper-form-message-item">
                <label htmlFor="message">{t.contactMessage}</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  value={values.message}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" id="submit" className="btn-secondary">
              {t.contactBtn}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
