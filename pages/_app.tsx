import type { AppProps } from 'next/app'
import { I18nextProvider } from 'react-i18next';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import i18n from '../i18n/i18n';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <I18nextProvider i18n={i18n}> 
      <Navbar />
        <Component {...pageProps} />
      <Footer />
    </I18nextProvider>
  )
}
