import { createContext } from 'react'

const LanguageContext = createContext({
    lang: "en",
    handleLanguage: () => { },
    t: () => { }
});

export default LanguageContext