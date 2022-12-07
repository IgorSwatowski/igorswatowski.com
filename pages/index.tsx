import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useTranslation } from 'react-i18next';

export default function Home() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
    <h1>{t('hello-world')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pl')}>Polish</button>
    </div>
  )
}
