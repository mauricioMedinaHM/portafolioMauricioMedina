import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Navigation({ onOpenCv }) {
  const { lang, setLang, t } = useLang()
  const [activeSection, setActiveSection] = useState('about')
  const [mobOpen, setMobOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  function toggleMob() {
    setMobOpen(o => {
      document.body.style.overflow = o ? '' : 'hidden'
      return !o
    })
  }

  function closeMob() {
    setMobOpen(false)
    document.body.style.overflow = ''
  }

  const navLinks = [
    { href: '#about', key: 'nav_about' },
    { href: '#projects', key: 'nav_projects' },
    { href: '#stack', key: 'nav_stack' },
    { href: '#cuyoconnect', key: 'nav_cuyo' },
  ]

  return (
    <>
      <nav
        id="main-nav"
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-6 py-3"
        style={{ background: 'rgba(0,0,0,.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(73,72,71,.2)' }}
      >
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="font-label font-bold text-primary text-sm tracking-widest hidden md:block">
            <span style={{ color: '#9cff93' }}>ROOT</span>@
            <span style={{ color: '#adaaaa' }}>MauricioMedinaDev</span>:
            <span style={{ color: 'var(--primary)' }}>~</span>&nbsp;
            <span className="cursor-blink" style={{ height: '.8em', width: 7 }} />
          </div>
          <span className="font-label font-bold text-sm tracking-widest md:hidden" style={{ color: '#c19cff' }}>
            Mauricio<span style={{ color: '#9cff93' }}>_dev</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a
              key={link.key}
              className={`nav-link font-label text-sm text-on-surface-variant hover:text-primary transition-colors${activeSection === link.href.slice(1) ? ' active' : ''}`}
              href={link.href}
            >
              {t[link.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Social icons — desktop */}
          <div className="hidden sm:flex gap-3 mr-2 items-center">
            <SocialIcon
              href="https://x.com/mauriHm_"
              src="https://cdn.simpleicons.org/x/777575"
              hoverSrc="https://cdn.simpleicons.org/x/c19cff"
              alt="X"
            />
            <SocialIcon
              href="https://github.com/mauricioMedinaHM"
              src="https://cdn.simpleicons.org/github/777575"
              hoverSrc="https://cdn.simpleicons.org/github/c19cff"
              alt="GitHub"
            />
            <a href="https://www.linkedin.com/in/mauricio-medina-dev/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <SocialIcon
              href="https://www.instagram.com/mauri.h.m/"
              src="https://cdn.simpleicons.org/instagram/777575"
              hoverSrc="https://cdn.simpleicons.org/instagram/c19cff"
              alt="Instagram"
            />
            <a href="mailto:hh.mauri2190@gmail.com">
              <EmailIcon />
            </a>
          </div>

          {/* Lang toggle */}
          <div className="flex">
            <button className={`lang-btn${lang === 'es' ? ' active' : ''}`} onClick={() => setLang('es')}>ES</button>
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
          </div>

          {/* CV button */}
          <button className="hidden md:block btn-primary" onClick={onOpenCv}>{t.nav_cv}</button>

          {/* Hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-1.5 ml-1${mobOpen ? ' hb-open' : ''}`}
            onClick={toggleMob}
            aria-label="Menu"
          >
            <span id="hb1" className="block w-5 h-0.5 transition-all duration-300" style={{ background: '#c19cff' }} />
            <span id="hb2" className="block w-5 h-0.5 transition-all duration-300" style={{ background: '#c19cff' }} />
            <span id="hb3" className="block w-5 h-0.5 transition-all duration-300" style={{ background: '#c19cff' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mob-drawer"
        className={`md:hidden fixed inset-0 z-[9990]${mobOpen ? ' open' : ''}`}
        style={{ pointerEvents: mobOpen ? 'auto' : 'none' }}
      >
        <div
          id="mob-backdrop"
          onClick={closeMob}
          style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(4px)' }}
        />
        <div
          id="mob-drawer-panel"
          style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 'min(300px,88vw)', background: '#0e0e0e', borderLeft: '1px solid rgba(193,156,255,.18)', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}
        >
          <div style={{ padding: '20px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(73,72,71,.25)' }}>
            <div className="flex items-center gap-2">
              <img src="https://cdn.simpleicons.org/linux/c19cff" className="w-6 h-6" alt="Linux" />
              <span className="font-label text-sm font-bold" style={{ color: '#c19cff' }}>Mauricio<span style={{ color: '#9cff93' }}>_dev</span></span>
            </div>
            <button onClick={closeMob} style={{ background: 'none', border: 'none', color: '#494847', fontSize: 20, cursor: 'pointer' }}>✕</button>
          </div>
          <nav style={{ padding: '8px 0', flex: 1 }}>
            {[
              { href: '#about', label: t.nav_about, icon: 'person' },
              { href: '#projects', label: t.nav_projects, icon: 'folder' },
              { href: '#experience', label: 'cd /blockchain', icon: 'grid' },
              { href: '#stack', label: t.nav_stack, icon: 'list' },
              { href: '#cuyoconnect', label: t.nav_cuyo, icon: 'people' },
              { href: '#contact', label: 'cd /contact', icon: 'mail' },
            ].map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMob}
                className="flex items-center gap-3 px-6 py-4 font-label text-sm hover:text-primary transition-colors border-b border-outline-variant/10"
                style={{ color: '#adaaaa' }}
              >
                <NavMobileIcon type={item.icon} />
                {item.label}
              </a>
            ))}
          </nav>
          <div style={{ padding: 20, borderTop: '1px solid rgba(73,72,71,.25)', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <button className="btn-primary w-full" style={{ textAlign: 'center' }} onClick={() => { onOpenCv(); closeMob() }}>{t.nav_cv}</button>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', paddingTop: 8 }}>
              <SocialIcon href="https://x.com/mauriHm_" src="https://cdn.simpleicons.org/x/777575" hoverSrc="https://cdn.simpleicons.org/x/c19cff" alt="X" size={20} />
              <SocialIcon href="https://github.com/mauricioMedinaHM" src="https://cdn.simpleicons.org/github/777575" hoverSrc="https://cdn.simpleicons.org/github/c19cff" alt="GitHub" size={20} />
              <a href="https://www.linkedin.com/in/mauricio-medina-dev/" target="_blank" rel="noreferrer"><LinkedInIcon size={20} /></a>
              <SocialIcon href="https://www.instagram.com/mauri.h.m/" src="https://cdn.simpleicons.org/instagram/777575" hoverSrc="https://cdn.simpleicons.org/instagram/c19cff" alt="Instagram" size={20} />
              <a href="mailto:hh.mauri2190@gmail.com"><EmailIcon size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function SocialIcon({ href, src, hoverSrc, alt, size = 16 }) {
  const [hover, setHover] = useState(false)
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img
        src={hover ? hoverSrc : src}
        className={`transition-all`}
        style={{ width: size, height: size, opacity: hover ? 1 : 0.7 }}
        alt={alt}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </a>
  )
}

function LinkedInIcon({ size = 16 }) {
  const [hover, setHover] = useState(false)
  return (
    <svg
      style={{ width: size, height: size, fill: hover ? '#c19cff' : '#777575', opacity: hover ? 1 : 0.7, transition: 'fill .2s,opacity .2s' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      viewBox="0 0 24 24"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon({ size = 16 }) {
  const [hover, setHover] = useState(false)
  return (
    <svg
      style={{ width: size, height: size, color: hover ? '#c19cff' : '#777575', transition: 'color .2s' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
    >
      <path strokeLinecap="square" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function NavMobileIcon({ type }) {
  const style = { width: 16, height: 16, flexShrink: 0, color: '#9146ff' }
  const props = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, viewBox: '0 0 24 24', style }
  if (type === 'person') return <svg {...props}><path strokeLinecap="square" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
  if (type === 'folder') return <svg {...props}><path strokeLinecap="square" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
  if (type === 'grid') return <svg {...props}><path strokeLinecap="square" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>
  if (type === 'list') return <svg {...props}><path strokeLinecap="square" d="M5 12h14M5 6h14M5 18h14" /></svg>
  if (type === 'people') return <svg {...props}><path strokeLinecap="square" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg>
  if (type === 'mail') return <svg {...props}><path strokeLinecap="square" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  return null
}
