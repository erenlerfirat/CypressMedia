import { useState } from 'react';
import Home from './components/pages/Home/Home.js';
import './App.css';
import LanguageContext from './context/LanguageContext.js';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import Blog from './components/pages/Blog/Blog.js';
import About from './components/pages/About/About.js';
import Article from './components/pages/Blog/Article.js';
import Article2 from './components/pages/Blog/Article2.js';

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
        <Route path="/Blog/1" element={<Article />} />
        <Route path="/Blog/2" element={<Article2 />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </LanguageContext.Provider >
  );
}

export default App;
