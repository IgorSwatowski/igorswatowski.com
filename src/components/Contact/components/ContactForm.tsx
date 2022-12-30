import { useRouter } from 'next/router';
import { useState } from 'react';
import CustomInput from '../../CustomInput/CustomInput';

import { en } from '../../../i18n/locales/en';
import { pl } from '../../../i18n/locales/pl';
import CustomTextarea from '../../CustomTextarea/CustomTextarea';

import { RiLoader5Fill } from 'react-icons/ri';
import axios from 'axios';
import e from 'express';

interface IValues {
  firstName: string;
  lastName: string;
  topic: string;
  company?: string;
  email: string;
  message: string;
}

interface IErrors extends Partial<IValues> {}

const ContactForm = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  const [state, setState] = useState({
    firstName: '',
    email: '',
    lastName: '',
    company: '',
    message: '',
    topic: '',
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handlePress = (e: any) => {
    e.preventDefault();
    fetch('/api/mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: state.firstName,
        email: state.email,
        lastName: state.lastName,
        company: state.company,
        message: state.message,
        topic: state.topic,
      }),
    });
  };

  return (
    <>
      <form
        className="contact-form-wrapper-form"
        id="contact-form"
        data-aos="fade-down"
        data-aos-delay="125"
        onSubmit={handlePress}
      >
        <div className="contact-form-wrapper-form-personal">
          <div className="contact-form-wrapper-form-personal-item">
            <label htmlFor="firstName">{t.contactFirstName}</label>
            <CustomInput
              id="firstName"
              name="firstName"
              type="text"
              label="firstName"
              placeholder="First Name"
              // error={!!errors.firstName}
              // errorMessage={!!errors.firstName ? errors.firstName : ''}
              // value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="contact-form-wrapper-form-personal-item">
            <label htmlFor="lastName">{t.contactSecondName}</label>
            <CustomInput
              id="lastName"
              name="lastName"
              type="text"
              label="lastName"
              placeholder="Last Name"
              // error={!!errors.lastName}
              // errorMessage={!!errors.lastName ? errors.lastName : ''}
              // value={values.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="contact-form-wrapper-form-contact">
          <div className="contact-form-wrapper-form-contact-item">
            <label htmlFor="email">{t.contactEmail}</label>
            <CustomInput
              id="email"
              name="email"
              type="email"
              label="email"
              placeholder="Email"
              // error={!!errors.email}
              // errorMessage={!!errors.email ? errors.email : ''}
              // value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="contact-form-wrapper-form-contact-item">
            <label htmlFor="companyName">{t.contactCompany}</label>
            <CustomInput
              id="company"
              name="company"
              type="text"
              label="company"
              placeholder="Company"
              // error={!!errors.company}
              // errorMessage={!!errors.company ? errors.company : ''}
              // value={values.company}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="contact-form-wrapper-form-topic">
          <div className="contact-form-wrapper-form-topic-item">
            <label htmlFor="topic">{t.contactTopic}</label>
            <CustomInput
              id="topic"
              name="topic"
              type="text"
              label="topic"
              placeholder="Topic"
              // error={!!errors.topic}
              // errorMessage={!!errors.topic ? errors.topic : ''}
              // value={values.topic}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="contact-form-wrapper-form-message">
          <div className="contact-form-wrapper-form-message-item">
            <label htmlFor="message">{t.contactMessage}</label>
            <CustomTextarea
              name="message"
              id="message"
              className="form-control"
              label="message"
              placeholder="Message"
              // error={!!errors.message}
              // errorMessage={!!errors.message ? errors.message : ''}
              // value={values.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="btn-secondary" type="submit">
          {t.contactBtn}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
