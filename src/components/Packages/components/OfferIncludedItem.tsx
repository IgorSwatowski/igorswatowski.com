import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import React from 'react';

interface OfferIncludedProps {
  children: React.ReactNode;
}

const OfferIncludedItem = ({ children }: OfferIncludedProps) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <>
      {children && (
        <p className='offer-whats-included-list-item paragraph-primary'>
          {children}
        </p>
      )}
    </>
  );
};

export default OfferIncludedItem;
