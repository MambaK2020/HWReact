import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext)

  return (
    <div>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('de')}>German</button>
      <p>Текущий язык:  {language}</p>
    </div>
  )
}

export default LanguageSwitcher
