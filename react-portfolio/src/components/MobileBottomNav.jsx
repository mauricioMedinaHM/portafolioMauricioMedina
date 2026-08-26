import { User, FolderKanban, Layers, Mail, QrCode, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { EASE_DRAWER, EASE_OUT, overlayExit, overlayTransition } from '../lib/motion'

const PORTFOLIO_URL = 'https://portafolio-mauricio-medina.vercel.app/'

const TABS = [
  { href: '#about', key: 'nav_about', icon: User, id: 'about' },
  { href: '#projects', key: 'nav_projects', icon: FolderKanban, id: 'projects' },
  { href: '#stack', key: 'nav_stack', icon: Layers, id: 'stack' },
  { href: '#contact', key: 'nav_contact', icon: Mail, id: 'contact' },
]

export default function MobileBottomNav() {
  const { t } = useLang()
  const reduced = usePrefersReducedMotion()
  const [active, setActive] = useState('about')
  const [qrOpen, setQrOpen] = useState(false)
  const fabRef = useRef(null)
  const closeRef = useRef(null)
  const wasOpen = useRef(false)

  const closeQr = useCallback(() => {
    if (!qrOpen) return
    setQrOpen(false)
  }, [qrOpen])

  useEffect(() => {
    const ids = TABS.map((tab) => tab.id)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!qrOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') closeQr()
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [qrOpen, closeQr])

  useEffect(() => {
    if (qrOpen) {
      wasOpen.current = true
      closeRef.current?.focus()
      return undefined
    }
    if (wasOpen.current) fabRef.current?.focus()
    return undefined
  }, [qrOpen])

  const left = TABS.slice(0, 2)
  const right = TABS.slice(2)
  const duration = reduced ? 0 : 0.32

  const renderTab = (tab) => {
    const Icon = tab.icon
    const isActive = active === tab.id
    return (
      <a
        key={tab.href}
        href={tab.href}
        onClick={() => setActive(tab.id)}
        aria-current={isActive ? 'page' : undefined}
        className={`mob-tab${isActive ? ' is-active' : ''}`}
        tabIndex={qrOpen ? -1 : undefined}
      >
        {isActive && (
          <motion.span
            layoutId="mob-tab-beam"
            transition={{ duration: 0.28, ease: EASE_OUT }}
            className="mob-tab-beam"
            aria-hidden="true"
          />
        )}
        <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
        <span className="mob-tab-label">{t[tab.key]}</span>
      </a>
    )
  }

  return (
    <>
      <nav
        id="mob-bottom-nav"
        className={`mob-tabbar${qrOpen ? ' is-qr-open' : ''}`}
        aria-hidden={qrOpen || undefined}
      >
        {left.map(renderTab)}
        <div className="mob-tab-cv">
          <motion.button
            ref={fabRef}
            type="button"
            className="btn-cv-fab"
            aria-expanded={qrOpen}
            aria-label={t.qr_share}
            tabIndex={qrOpen ? -1 : 0}
            style={{ pointerEvents: qrOpen ? 'none' : 'auto' }}
            onClick={() => setQrOpen(true)}
            animate={{ opacity: qrOpen ? 0 : 1 }}
            transition={{ duration: reduced ? 0 : 0.2, ease: EASE_OUT }}
            whileTap={qrOpen || reduced ? undefined : { scale: 0.97 }}
          >
            <span className="qr-fab-icon">
              <QrCode size={20} strokeWidth={2} aria-hidden="true" />
            </span>
          </motion.button>
        </div>
        {right.map(renderTab)}
      </nav>
      <AnimatePresence>
        {qrOpen && (
          <motion.button
            key="qr-scrim"
            type="button"
            className="qr-scrim"
            aria-label={t.qr_close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={qrOpen ? overlayTransition : overlayExit}
            onClick={closeQr}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {qrOpen && (
          <motion.div
            key="qr-screen"
            className="qr-screen"
            role="dialog"
            aria-modal="true"
            aria-labelledby="qr-screen-title"
            initial={reduced ? false : { opacity: 0, transform: 'translateY(12px) scale(0.96)' }}
            animate={{ opacity: 1, transform: 'translateY(0) scale(1)' }}
            exit={{ opacity: 0, transform: 'translateY(8px) scale(0.97)' }}
            transition={{ duration, ease: qrOpen ? EASE_OUT : EASE_DRAWER }}
            style={{ originX: 0.5, originY: 1 }}
          >
            <button
              ref={closeRef}
              type="button"
              className="qr-screen-close"
              aria-label={t.qr_close}
              onClick={closeQr}
            >
              <X size={20} strokeWidth={1.75} aria-hidden="true" />
            </button>
            <div className="qr-screen-inner">
              <div className="qr-screen-panel">
                <img
                  src="/img/portfolio-qr.svg"
                  alt=""
                  width="280"
                  height="280"
                  className="qr-fab-img"
                />
                <p id="qr-screen-title" className="qr-fab-hint">{t.qr_hint}</p>
                <span className="sr-only">{PORTFOLIO_URL}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
