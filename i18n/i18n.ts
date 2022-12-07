import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

import { en } from "./locales/en";
import { pl } from "./locales/pl";

i18n
    .use(LanguageDetector)  
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            pl: {
                translation: pl
            },
        },
        lng: 'en',
        fallbackLng: 'en',
    });

export default i18n;