import type { AppProps } from 'next/app';
import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import i18n from '@/i18n/i18n';

import '@/styles/styles.scss';
import Script from 'next/script';
import { GATrackId } from '../constants/constants';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import React from 'react';

import '@etchteam/next-pagination/dist/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${GATrackId}`}
      />
      <Script strategy='lazyOnload' id='google-analytics'>
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GATrackId}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Head>
        <link rel='icon' type='image/png' href='../../public/favicon.png' />
        <meta
          name='viewport'
          content='width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover'
        />
      </Head>
      <DefaultSeo {...SEO} />
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </I18nextProvider>
    </>
  );
}
