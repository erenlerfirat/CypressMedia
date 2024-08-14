import { useState } from 'react';
import Home from './components/pages/HomePage/Home.js';
import './App.css';
import LanguageContext from './context/LanguageContext.js';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [lang, setLanguage] = useState("en");

  const handleLanguage = (data) => {
    setLanguage(data); //render the Home component , means full site reload
    changeLanguage(data);
    // TODO SAVE LANG PREFERENCE TO COOKIE
    // DEFAULT IS ENGLISH IF NULL
  }
  const value = { lang, handleLanguage, t };


  return (
    <LanguageContext.Provider value={value}>
      <Home />
    </LanguageContext.Provider >
  );
}

export default App;
