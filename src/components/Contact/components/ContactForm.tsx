import { useRouter } from 'next/router';
import { useState } from 'react';
import { CustomInput } from '../../CustomInput/CustomInput';

import { en } from '../../../i18n/locales/en';
import { pl } from '../../../i18n/locales/pl';
import { CustomTextarea } from '../../CustomTextarea/CustomTextarea';

const ContactForm = () => {
  // const [touched, setTouched] = useState({
  //   firstName: false,
  //   lastName: false,
  //   topic: false,
  //   email: false,
  //   company: false,
  //   message: false,
  // });

  // const validateForm = () => {
  //   const requiredFields = ['firstName', 'lastName', 'topic', 'email', 'message'];
  //   const isFormValid = requiredFields.every((key) => {
  //     return values[key] && values[key].trim().length > 0;
  //   });
  //   if (!isFormValid) {
  //     setError('Please fill out all required fields');
  //   }
  //   return isFormValid;
  // };

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  // const [state, setState] = useState<State>(initState);

  // const { values } = state;

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = event.target;
  //   setState((prev) => ({
  //     ...prev,
  //     values: {
  //       ...prev.values,
  //       [name]: value,
  //     },
  //   }));
  // };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setError('');
  //   setShowSuccessMessage(false);
  //   if (!validateForm()) {
  //     return;
  //   }
  //   setState((prev) => ({
  //     ...prev,
  //     isLoading: true,
  //   }));
  //   try {
  //     await sendContactForm(values);
  //     setState(initState);
  //     setShowSuccessMessage(true);
  //   } catch (error: any) {
  //     setError(error.message);
  //   }
  //   setState((prev) => ({
  //     ...prev,
  //     isLoading: false,
  //   }));
  // };

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send');
  // Setting success or failure messages states
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleValidation = () => {
    const tempErrors: { [key: string]: boolean } = {};
    let isValid = true;

    if (firstName.length <= 0) {
      tempErrors['firstName'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (topic.length <= 0) {
      tempErrors['topic'] = true;
      isValid = false;
    }
    if (lastName.length <= 0) {
      tempErrors['lastName'] = true;
      isValid = false;
    }
    if (company.length <= 0) {
      tempErrors['company'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending');
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          company: company,
          topic: topic,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Send');

        // Reset form fields
        setFirstName('');
        setEmail('');
        setMessage('');
        setTopic('');
        setLastName('');
        setCompany('');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Send');
      // Reset form fields
      setFirstName('');
      setEmail('');
      setMessage('');
      setTopic('');
      setLastName('');
      setCompany('');
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
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            {errors?.firstName && <p className="alert-danger">{t.contactFirtNameError}</p>}
          </div>
          <div className="contact-form-wrapper-form-personal-item">
            <label htmlFor="lastName">{t.contactSecondName}</label>
            <CustomInput
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            {errors?.lastName && <p className="alert-danger">{t.contactLastNameError}</p>}
          </div>
        </div>
        <div className="contact-form-wrapper-form-contact">
          <div className="contact-form-wrapper-form-contact-item">
            <label htmlFor="email">{t.contactEmail}</label>
            <CustomInput
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errors?.email && <p className="alert-danger">{t.contactEmailError}</p>}
          </div>
          <div className="contact-form-wrapper-form-contact-item">
            <label htmlFor="companyName">{t.contactCompany}</label>
            <CustomInput
              id="company"
              name="company"
              type="text"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
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
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
              }}
            />
            {errors?.topic && <p className="alert-danger">{t.contactTopicError}</p>}
          </div>
        </div>
        <div className="contact-form-wrapper-form-message">
          <div className="contact-form-wrapper-form-message-item">
            <label htmlFor="message">{t.contactMessage}</label>
            <CustomTextarea
              name="message"
              id="message"
              className="form-control"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            {errors?.message && <p className="alert-danger">{t.contactMessageError}</p>}
          </div>
        </div>
        <button type="submit" id="submit" className="btn-secondary">
          {buttonText}
        </button>
        <div id="msg">
          {showSuccessMessage && <p className="alert-success">{t.sucessMsg}</p>}
          {showFailureMessage && <p className="alert-danger">{t.errorMsg}</p>}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
