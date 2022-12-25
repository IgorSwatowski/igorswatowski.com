import { useRouter } from 'next/router';
import { useState } from 'react';
import { sendContactForm } from '../../../lib/api';
import { CustomInput } from '../../CustomInput/CustomInput';

import { en } from '../../../i18n/locales/en';
import { pl } from '../../../i18n/locales/pl';
import { CustomTextarea } from '../../CustomTextarea/CustomTextarea';

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

const ContactForm = () => {
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
    <>
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
            <CustomInput
              value={values.firstName}
              onChange={handleChange}
              id="firstName"
              name="firstName"
              type="text"
            />
          </div>
          <div className="contact-form-wrapper-form-personal-item">
            <label htmlFor="lastName">{t.contactSecondName}</label>
            <CustomInput
              value={values.lastName}
              onChange={handleChange}
              id="lastName"
              name="lastName"
              type="text"
            />
          </div>
        </div>
        <div className="contact-form-wrapper-form-contact">
          <div className="contact-form-wrapper-form-contact-item">
            <label htmlFor="email">{t.contactEmail}</label>
            <CustomInput
              value={values.email}
              onChange={handleChange}
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div className="contact-form-wrapper-form-contact-item">
            <label htmlFor="companyName">{t.contactCompany}</label>
            <CustomInput
              value={values.company}
              onChange={handleChange}
              id="company"
              name="company"
              type="text"
            />
          </div>
        </div>
        <div className="contact-form-wrapper-form-topic">
          <div className="contact-form-wrapper-form-topic-item">
            <label htmlFor="topic">{t.contactTopic}</label>
            <CustomInput
              value={values.topic}
              onChange={handleChange}
              id="topic"
              name="topic"
              type="text"
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
              value={values.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" id="submit" className="btn-secondary">
          {t.contactBtn}
        </button>
      </form>
      {error && <p className="contact-form-error">Problem z wyslaniem formularza </p>}
    </>
  );
};

export default ContactForm;
