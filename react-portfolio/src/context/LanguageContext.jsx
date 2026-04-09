import { createContext, useContext, useState } from 'react'
import { T } from '../data/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => localStorage.getItem('lang') || 'es')

  function setLang(newLang) {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
    document.documentElement.lang = newLang
  }

  const t = T[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
