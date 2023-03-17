import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';

import ContactForm from './components/ContactForm';

const ContactPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <main>
      <section className='contact-form'>
        <div className='contact-form-wrapper container-box'>
          <h1
            className='contact-form-wrapper-heading heading-primary'
            data-aos='fade-down'
            data-aos-delay='50'
          >
            {t.contactHeading}
          </h1>
          <p
            className='contact-form-wrapper-text paragraph-primary'
            data-aos='fade-down'
            data-aos-delay='75'
          >
            {t.contactText}
          </p>
          <p
            className='contact-form-wrapper-text paragraph-primary'
            data-aos='fade-down'
            data-aos-delay='75'
          >
            {t.contactInstagram}
            <a
              href='https://instagram.com/igor.websites'
              target='_blank'
              rel='noreferrer'
            >
              @igor.websites
            </a>
            {t.contactEmailItem}
            <a
              href='mailto: hello@igorswatowski.com'
              target='_blank'
              rel='noreferrer'
            >
              hello@igorswatowski.com
            </a>
            {t.contactForm}
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
