import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";



const LocalizedText = () => {

const {language} = useContext(LanguageContext)

  return (
    <div>
{language === 'en' && <p className="title">Hello world!</p>}
{language === 'de' && <p className="title">Hallo Welt!</p>}

    </div>
  )
}

export default LocalizedText