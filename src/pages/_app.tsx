import type { AppProps } from 'next/app';
import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import i18n from '../i18n/i18n';

import '../styles/styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Igor Swatowski | Web Designer & Developer</title>
        <link rel="icon" type="image/png" href="../../public/favicon.png" />
      </Head>
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </I18nextProvider>
    </>
  );
}
