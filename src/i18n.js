import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import english from './languages/en.json'
import turkish from './languages/tr.json'
import spanish from './languages/de.json'
import german from './languages/es.json'
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const resources = {
    en: {
        translation: english
    },
    es: {
        translation: spanish
    },
    de: {
        translation: german
    },
    tr: {
        translation: turkish
    }
};
i18n
    .use(Backend)

    .use(LanguageDetector)

    .use(initReactI18next)

    .init({
        resources,
        fallbackLng: "en",
        debug: true,
        lng: "en",
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

export default i18n;