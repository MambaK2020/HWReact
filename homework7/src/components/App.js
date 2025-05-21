import React from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import LocalizedText from './LocalizedText';
import '../styles/App.css'

function App() {
  return (
    <LanguageProvider>
      <div className='container'>
        <h1>Выбор языка:</h1>
        <LanguageSwitcher />
        <LocalizedText />
      </div>
    </LanguageProvider>
  );
}

export default App;