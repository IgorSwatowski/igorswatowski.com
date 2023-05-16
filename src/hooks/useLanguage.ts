import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';

export const useLanguage = () => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = async (newLocale: string) => {
    const { pathname, query } = router;
    const oldLanguageMatch = pathname.match(/^\/([a-z]{2})(\/|$)/);
    const oldLanguage = oldLanguageMatch ? oldLanguageMatch[1] : null;
    let newPathname = pathname;
    if (oldLanguage && oldLanguage !== newLocale.toLowerCase()) {
      newPathname = pathname.replace(
        new RegExp(`^\/${oldLanguage}(\/|$)`),
        '/',
      );
    } else if (!oldLanguage) {
      newPathname = `/${newLocale.toLowerCase()}${pathname}`;
    }
    // Extract dynamic path parameter from URL and append it to new URL
    const dynamicPathMatch = pathname.match(/^\/[a-z]{2}\/(.+?)\/([^\/]+)$/);
    if (dynamicPathMatch) {
      const dynamicPath = dynamicPathMatch[1];
      const dynamicValue = dynamicPathMatch[2];
      newPathname = `/${newLocale.toLowerCase()}/${dynamicPath}/${dynamicValue}`;
    }
    router.replace({ pathname: newPathname, query });
  };

  useEffect(() => {
    changeLanguage(locale as string);
  }, [locale]);

  const t = locale === 'en' ? en : pl;

  return { t, locale, changeLanguage };
};
