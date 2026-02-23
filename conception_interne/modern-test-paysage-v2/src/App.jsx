import React, { useState, useEffect } from 'react';
import Book from './components/Book';
import { Moon, Sun, Languages } from 'lucide-react';
import { translations } from './translations';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('fr');

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const t = translations[language].ui;

  return (
    <div className="App transition-colors duration-500">
      
      {/* FLOATING CONTROLS CONTAINER - TOP LEFT */}
      <div className="fixed top-6 left-6 z-60 flex gap-2">
        {/* LANGUAGE TOGGLE */}
        <button 
          onClick={toggleLanguage}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 border ${
            isDarkMode 
            ? 'bg-white/10 border-white/20 text-white' 
            : 'bg-white/80 border-gray-200 text-gray-800'
          }`}
          title={t.langSwitch}
        >
          <Languages size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">
            {language === 'fr' ? 'EN' : 'FR'}
          </span>
        </button>

        {/* THEME TOGGLE */}
        <button 
          onClick={toggleTheme}
          className={`p-1.5 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 border ${
            isDarkMode 
            ? 'bg-white/10 border-white/20 text-yellow-400' 
            : 'bg-white/80 border-gray-200 text-gray-600'
          }`}
          title={isDarkMode ? t.dayMode : t.nightMode}
        >
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      <Book isDarkMode={isDarkMode} language={language} />
    </div>
  );
}

export default App;
