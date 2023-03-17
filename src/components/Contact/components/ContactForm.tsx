import { useRouter } from 'next/router';
import { useState } from 'react';
import CustomInput from '@/components/CustomInput/CustomInput';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import CustomTextarea from '@/components/CustomTextarea/CustomTextarea';

import { RiLoader5Fill } from 'react-icons/ri';
import axios from 'axios';
import React from 'react';

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

  const validate = (
    {
      firstName,
      email,
      message,
      lastName,
      topic,
    }: {
      firstName?: string;
      email?: string;
      message?: string;
      lastName?: string;
      topic?: string;
    },
    t: any,
  ) => {
    const errors: {
      firstName?: string;
      email?: string;
      message?: string;
      lastName?: string;
      topic?: string;
    } = {};
    if (!firstName || firstName.trim() === '') {
      errors.firstName = t.contactFirstNameError;
    }
    if (!lastName || lastName.trim() === '') {
      errors.lastName = t.contactLastNameError;
    }
    if (!topic || topic.trim() === '') {
      errors.topic = t.contactTopicError;
    }
    if (!email || email.trim() === '') {
      errors.email = t.contactEmailError;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = t.contactInvalidEmail;
    }
    if (!message || message.trim() === '') {
      errors.message = t.contactMessageError;
    }
    return errors;
  };

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    company: '',
    topic: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageState, setMessageState] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values, t);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);
    axios
      .post('/api/sendgrid', {
        firstName: values.firstName,
        lastName: values.lastName,
        company: values.company,
        topic: values.topic,
        email: values.email,
        message: values.message,
      })
      .then(res => {
        if (res.status === 200) {
          setValues({
            firstName: '',
            lastName: '',
            company: '',
            topic: '',
            email: '',
            message: '',
          });
          setLoading(false);
          setSuccess(true);
          setMessageState(res.data.message);
        } else {
          setLoading(false);
          setMessageState(res.data.message);
        }
      })
      .catch(err => {
        setLoading(false);
        setMessageState(String(err.message));
      });
    setLoading(false);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues(prevInput => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <form
        className='contact-form-wrapper-form'
        id='contact-form'
        data-aos='fade-down'
        data-aos-delay='125'
        onSubmit={handleSubmit}
      >
        <div className='contact-form-wrapper-form-personal'>
          <div className='contact-form-wrapper-form-personal-item'>
            <label htmlFor='firstName'>{t.contactFirstName}</label>
            <CustomInput
              id='firstName'
              name='firstName'
              type='text'
              label='firstName'
              placeholder={t.contactFirstName}
              error={!!errors.firstName}
              errorMessage={!!errors.firstName ? errors.firstName : ''}
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='contact-form-wrapper-form-personal-item'>
            <label htmlFor='lastName'>{t.contactSecondName}</label>
            <CustomInput
              id='lastName'
              name='lastName'
              type='text'
              label='lastName'
              placeholder={t.contactSecondName}
              error={!!errors.lastName}
              errorMessage={!!errors.lastName ? errors.lastName : ''}
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='contact-form-wrapper-form-contact'>
          <div className='contact-form-wrapper-form-contact-item'>
            <label htmlFor='email'>{t.contactEmail}</label>
            <CustomInput
              id='email'
              name='email'
              type='email'
              label='email'
              placeholder={t.contactEmail}
              error={!!errors.email}
              errorMessage={!!errors.email ? errors.email : ''}
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className='contact-form-wrapper-form-contact-item'>
            <label htmlFor='companyName'>{t.contactCompany}</label>
            <CustomInput
              id='company'
              name='company'
              type='text'
              label='company'
              placeholder={t.contactCompany}
              error={!!errors.company}
              errorMessage={!!errors.company ? errors.company : ''}
              value={values.company}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='contact-form-wrapper-form-topic'>
          <div className='contact-form-wrapper-form-topic-item'>
            <label htmlFor='topic'>{t.contactTopic}</label>
            <CustomInput
              id='topic'
              name='topic'
              type='text'
              label='topic'
              placeholder={t.contactTopic}
              error={!!errors.topic}
              errorMessage={!!errors.topic ? errors.topic : ''}
              value={values.topic}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='contact-form-wrapper-form-message'>
          <div className='contact-form-wrapper-form-message-item'>
            <label htmlFor='message'>{t.contactMessage}</label>
            <CustomTextarea
              name='message'
              id='message'
              className='form-control'
              label='message'
              placeholder={t.contactMessage}
              error={!!errors.message}
              errorMessage={!!errors.message ? errors.message : ''}
              value={values.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className='btn-secondary' type='submit' disabled={loading}>
          {loading !== true ? (
            t.contactBtn
          ) : (
            <div className='flex h-full w-full items-center justify-center '>
              <RiLoader5Fill className='h-8 w-8 animate-spin' />
            </div>
          )}
        </button>
        <p className='alert-success'>
          {success !== false ? (
            <span className='alert-success'>{messageState}</span>
          ) : (
            <span className='alert-danger'>{messageState}</span>
          )}
        </p>
      </form>
    </>
  );
};

export default ContactForm;
