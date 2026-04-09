import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import MatrixRain from './MatrixRain'
import Typewriter from './Typewriter'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 28 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero({ onOpenArchive, onOpenCv }) {
  const { t } = useLang()
  const clockElRef = useRef(null)
  const [clock, setClock] = useState('--:--:--')

  useEffect(() => {
    function tick() {
      const n = new Date()
      const time = [n.getHours(), n.getMinutes(), n.getSeconds()]
        .map(v => String(v).padStart(2, '0'))
        .join(':')
      setClock(time)
      const loc = document.getElementById('term-loc')
      if (loc) loc.textContent = `Mendoza, Argentina [SYS_TIME: ${time}]`
    }
    tick()
    const iv = setInterval(tick, 1000)
    return () => clearInterval(iv)
  }, [])

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden"
      style={{ background: '#000' }}
    >
      <MatrixRain />
      <div className="ambient" style={{ width: 500, height: 500, background: 'rgba(75,0,130,.15)', top: -100, left: -100 }} />
      <div className="ambient" style={{ width: 300, height: 300, background: 'rgba(145,70,255,.08)', bottom: 0, right: 100 }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 min-h-screen py-8">
        {/* Left: Text */}
        <div>
          <motion.p {...fadeUp(0.1)} className="font-label text-primary text-xs tracking-widest uppercase mb-6">
            <span style={{ color: '#9cff93' }}>▶</span>&nbsp;{t.hero_init}
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-headline font-bold text-on-surface leading-none mb-6"
            style={{ fontSize: 'clamp(3rem,8vw,5.5rem)' }}
          >
            Mauricio <br />
            <span className="glitch-wrap">
              <span style={{ background: 'linear-gradient(135deg,#9146ff,#c19cff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Medina
              </span>
              <span className="glitch-clone glitch-a" aria-hidden="true" style={{ background: 'linear-gradient(135deg,#9146ff,#c19cff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Medina</span>
              <span className="glitch-clone glitch-b" aria-hidden="true" style={{ background: 'linear-gradient(135deg,#9146ff,#c19cff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Medina</span>
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="font-body text-secondary text-lg max-w-xl mb-10 leading-relaxed">
            Arquitecto full-stack especializado en el ecosistema{' '}
            <span style={{ color: '#9cff93' }} className="font-label">Web3</span>.
            Construyendo sistemas descentralizados seguros y de alto rendimiento con foco en{' '}
            <span style={{ color: 'var(--primary)' }} className="font-label">Rust</span> y{' '}
            <span style={{ color: 'var(--primary)' }} className="font-label">Stellar</span>.
          </motion.p>

          <motion.div {...fadeUp(0.4)} id="hero-btns" className="flex flex-wrap gap-4">
            <button className="btn-primary" onClick={onOpenArchive}>{t.hero_btn_archive}</button>
            <button className="btn-ghost" onClick={onOpenCv}>{t.hero_btn_cv}</button>
            <a
              className="btn-whatsapp"
              href="https://wa.me/542612572860"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              {t.hero_btn_whatsapp}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.5)} className="flex gap-8 mt-12">
            <div>
              <p className="font-label text-primary text-xl font-bold">5+</p>
              <p className="font-label text-on-surface-variant text-xs uppercase">{t.stat_years}</p>
            </div>
            <div style={{ width: 1, background: 'rgba(73,72,71,.4)' }} />
            <div>
              <p className="font-label text-tertiary text-xl font-bold">{t.stat_hack_val}</p>
              <p className="font-label text-on-surface-variant text-xs uppercase">{t.stat_hack_label}</p>
            </div>
            <div style={{ width: 1, background: 'rgba(73,72,71,.4)' }} />
            <div>
              <p className="font-label text-primary text-xl font-bold">500+</p>
              <p className="font-label text-on-surface-variant text-xs uppercase">{t.stat_community}</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Photo + Terminal */}
        <motion.div
          {...fadeRight(0.2)}
          className="hero-photo-section relative flex items-start"
          style={{ paddingBottom: 110 }}
        >
          {/* Photo */}
          <div className="hero-photo-wrap relative w-full overflow-hidden" style={{ height: 660, border: '1px solid rgba(193,156,255,.18)' }}>
            <img
              src="/img/mauricioFotoPerfil.jpg"
              alt="Mauricio Medina"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 18%', filter: 'grayscale(5%) contrast(1.05) brightness(.95)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.04) 3px,rgba(0,0,0,.04) 4px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(0,0,0,.08) 45%,rgba(0,0,0,.7) 100%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,rgba(75,0,130,.18),transparent 55%)', pointerEvents: 'none' }} />
            <div className="hero-badge font-label text-xs" style={{ position: 'absolute', top: 20, left: 20 }}>
              <div style={{ background: 'rgba(0,0,0,.72)', border: '1px solid rgba(193,156,255,.22)', padding: '10px 14px', backdropFilter: 'blur(10px)' }}>
                <p style={{ color: '#9cff93' }} className="mb-1">▶ USER_IDENTIFIED</p>
                <p style={{ color: '#adaaaa' }} className="mb-1">hh.mauri2190@gmail.com</p>
                <p style={{ color: 'rgba(193,156,255,.6)' }}>[ STATUS: ONLINE ]</p>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="hero-terminal" style={{ position: 'absolute', bottom: 0, left: '18%', right: -12, zIndex: 20 }}>
            <div className="terminal-glow border border-outline-variant/20 overflow-hidden" style={{ background: 'rgba(8,8,8,.96)', backdropFilter: 'blur(16px)', boxShadow: '0 8px 40px rgba(0,0,0,.7)' }}>
              <div className="term-header" style={{ background: 'rgba(26,26,26,.98)' }}>
                <div className="flex gap-1.5">
                  <div className="term-dot" />
                  <div className="term-dot" />
                  <div className="term-dot" />
                </div>
                <span className="flex-1 text-center font-label text-outline text-xs uppercase tracking-widest">bash — 80x24</span>
                <span className="font-label text-xs text-on-surface-variant">{clock}</span>
              </div>
              <Typewriter clockRef={clockElRef} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
