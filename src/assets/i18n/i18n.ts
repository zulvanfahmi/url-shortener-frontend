import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) 
  
  .use(LanguageDetector)
  
  .use(initReactI18next)
  
  .init({
    supportedLngs: ['id', 'en'], 
    
    fallbackLng: "id", 
    
    defaultNS: 'translation', 

    detection: {
      order: ['localStorage', 'navigator'], 
      caches: ['localStorage'], 
    },
    
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path: ./en/translation.json
    },
    
    keySeparator: '.', 
    
    react: {
      useSuspense: true, 
    },
    
    debug: false, 
  });

export default i18n;