import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

const TALK_URL = 'https://www.linkedin.com/in/mauricio-medina-dev/'

export default function Navigation({ onOpenCv }) {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="main-nav" className={`city-nav${scrolled ? ' is-scrolled' : ''}`}>
      <a href="#about" className="city-wordmark">mauri.h.m</a>

      <div className="flex items-center gap-2 md:gap-3">
        <div className="lang-switch" role="group" aria-label={t.a11y_lang}>
          <button type="button" className={`lang-switch-opt${lang === 'es' ? ' is-active' : ''}`} aria-pressed={lang === 'es'} onClick={() => setLang('es')}>ES</button>
          <span className="lang-switch-sep" aria-hidden="true">/</span>
          <button type="button" className={`lang-switch-opt${lang === 'en' ? ' is-active' : ''}`} aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
        </div>

        <div className="city-nav-actions">
          <button type="button" className="nav-cv-quiet" onClick={onOpenCv}>
            {t.nav_cv}
          </button>
          <a
            href={TALK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary city-nav-cta"
          >
            {t.hero_btn_talk}
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
