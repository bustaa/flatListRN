import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ca from './ca/ca.json';
import en from './en/en.json';
import es from './es/es.json';

const resources = {
  ca: { translation: ca },
  en: { translation: en },
  es: { translation: es }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ca',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;