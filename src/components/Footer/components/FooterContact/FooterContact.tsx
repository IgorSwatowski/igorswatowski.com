import React from 'react';
import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';

const FooterContact = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <div className='footer-wrapper-contact'>
      <h3 className='footer-wrapper-contact-heading heading-fourth'>
        {t.contactInformation}
      </h3>
      <p className='footer-wrapper-contact-text paragraph-primary'>
        {t.contactInformationText}
      </p>
      <p className='paragraph-primary'>
        Email:{' '}
        <a href='mailto: hello@igorswatowski.com'>hello@igorswatowski.com</a>
      </p>
      <p className='paragraph-primary'>
        {t.phone}: <a href='tel: +48511277924'>+48 511 277 924</a>
      </p>
      <p className='footer-copy'>{t.copyright}</p>
    </div>
  );
};

export default FooterContact;
