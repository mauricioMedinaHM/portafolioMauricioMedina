import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

export default function MobileBottomNav({ onOpenCv }) {
  const [active, setActive] = useState('about')

  useEffect(() => {
    // Reading-line spy: active = section crossing the optical middle band.
    const sections = ['about', 'projects', 'stack', 'contact']
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const tabs = [
    {
      href: '#about', label: 'ABOUT',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="square" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    },
    {
      href: '#projects', label: 'PROYECTOS',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="square" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>,
    },
    null, // CV center
    {
      href: '#stack', label: 'STACK',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="square" d="M5 12h14M5 6h14M5 18h14" /></svg>,
    },
    {
      href: '#contact', label: 'CONTACT',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="square" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
  ]

  return (
    <nav
      id="mob-bottom-nav"
      className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center"
      style={{ background: 'rgba(0,0,0,.97)', backdropFilter: 'blur(24px)', borderTop: '1px solid rgba(193,156,255,.12)', height: 60 }}
    >
      {tabs.map((tab, i) => {
        if (tab === null) {
          return (
            <div key="cv" className="flex flex-col items-center gap-1 py-1 px-3 flex-1">
              <button
                type="button"
                onClick={onOpenCv}
                aria-label="Descargar CV"
                className="btn-cv-fab"
                style={{ width: 42, height: 42, background: 'linear-gradient(135deg,#9146ff,#c19cff)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="#1a0040" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="square" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          )
        }
        const isActive = active === tab.href.slice(1)
        return (
          <a
            key={tab.href}
            href={tab.href}
            onClick={() => setActive(tab.href.slice(1))}
            aria-current={isActive ? 'page' : undefined}
            className="relative flex flex-col items-center gap-1 py-2 px-3 flex-1"
          >
            {isActive && (
              <motion.span
                layoutId="mob-tab-indicator"
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                style={{ position: 'absolute', top: 0, left: '22%', right: '22%', height: 2, background: 'var(--primary)' }}
                aria-hidden="true"
              />
            )}
            <span style={{ color: isActive ? '#c19cff' : '#9c9a99', transition: 'color .2s' }} aria-hidden="true">{tab.icon}</span>
            <span className="font-label" style={{ fontSize: 11, color: isActive ? '#c19cff' : '#9c9a99', letterSpacing: '.06em', transition: 'color .2s' }}>{tab.label}</span>
          </a>
        )
      })}
    </nav>
  )
}
