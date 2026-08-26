import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const EASE_OUT = [0.23, 1, 0.32, 1]
const TALK_URL = 'https://www.linkedin.com/in/mauricio-medina-dev/'

const SECTION_LABELS = {
  about: 'nav_about',
  stack: 'nav_stack',
  experience: 'nav_experience',
  projects: 'nav_projects',
  cuyoconnect: 'nav_cuyo',
  community: 'community_title',
  academic: 'academic_title',
  contact: 'nav_contact',
}

export default function Navigation({ onOpenCv }) {
  const { lang, setLang, t } = useLang()
  const reduced = usePrefersReducedMotion()
  const [activeSection, setActiveSection] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const ids = Object.keys(SECTION_LABELS)
    let ticking = false

    const update = () => {
      ticking = false
      setScrolled(window.scrollY > 8)
      const line = 56
      let current = 'about'
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        if (el.getBoundingClientRect().top - line <= 0) current = id
      })
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll > 0 && window.scrollY >= maxScroll - 12) {
        current = ids[ids.length - 1]
      }
      setActiveSection(current)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const sectionKey = SECTION_LABELS[activeSection] || 'nav_about'
  const showSection = activeSection !== 'about'

  return (
    <nav id="main-nav" className={`city-nav${scrolled ? ' is-scrolled' : ''}`}>
      <a href="#about" className="city-wordmark">mauri.h.m</a>

      <div className="city-nav-now" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          {showSection && (
            <motion.span
              key={activeSection}
              className="city-nav-section"
              initial={reduced ? false : { opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -5 }}
              transition={{ duration: reduced ? 0 : 0.12, ease: EASE_OUT }}
            >
              {t[sectionKey]}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <div className="lang-switch" role="group" aria-label={t.a11y_lang}>
          <button type="button" className={`lang-switch-opt${lang === 'es' ? ' active' : ''}`} aria-pressed={lang === 'es'} onClick={() => setLang('es')}>ES</button>
          <span className="lang-switch-sep" aria-hidden="true">/</span>
          <button type="button" className={`lang-switch-opt${lang === 'en' ? ' active' : ''}`} aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
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
