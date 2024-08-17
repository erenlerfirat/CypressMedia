import { useState } from 'react';
import Home from './components/pages/Home/Home.js';
import './App.css';
import LanguageContext from './context/LanguageContext.js';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </LanguageContext.Provider >
  );
}

export default App;
