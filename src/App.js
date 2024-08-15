import { useState } from 'react';
import Home from './components/pages/HomePage/Home.js';
import './App.css';
import LanguageContext from './context/LanguageContext.js';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [lang, setLanguage] = useState("en");

  const handleLanguage = (data) => {
    console.log(localStorage.getItem("i18nextLng") + "+++")
    if (localStorage.getItem("i18nextLng") === data)
      return;
    setLanguage(data);
    changeLanguage(data);
  }
  const value = { lang, handleLanguage, t };


  return (
    <LanguageContext.Provider value={value}>
      <Home />
    </LanguageContext.Provider >
  );
}

export default App;
