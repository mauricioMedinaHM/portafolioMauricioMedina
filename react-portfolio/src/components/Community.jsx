import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, viewportOnce } from '../hooks/useScrollReveal'

const slides = [
  { src: '/img/carrusel/Cuyo_Connet_017.webp', label: 'cuyo_connect_017.webp', caption: '◈ CuyoConnect — Evento presencial · Mendoza, ARG' },
  { src: '/img/carrusel/Cuyo_Connet_016.webp', label: 'cuyo_connect_016.webp', caption: '◈ CuyoConnect — Comunidad Web3 · Mendoza, ARG' },
  { src: '/img/carrusel/CharlaInitroWEb3.webp', label: 'charla_web3.webp', caption: '◈ Charla — Intro a Web3 · Charla presencial' },
  { src: '/img/carrusel/mento.webp', label: 'mentoring.webp', caption: '◈ Mentoring — Guiando nuevos devs' },
  { src: '/img/carrusel/mentorStellar.webp', label: 'mentor_stellar.webp', caption: '◈ Mentor Stellar · Ecosistema Blockchain' },
  { src: '/img/carrusel/Copia de _DSC7385ig.webp', label: 'event_photo.webp', caption: '◈ Evento comunidad · Mauricio Medina' },
  { src: '/img/carrusel/mauricioFotoPerfil.webp', label: 'perfil.webp', caption: '◈ Mauricio Medina · Web3 Protocol Architect' },
]

export default function Community() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const sectionRef = useRef(null)

  function goTo(n) {
    setCurrent(((n % slides.length) + slides.length) % slides.length)
    resetTimer()
  }

  function resetTimer() {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    function onKey(e) {
      const sec = sectionRef.current
      if (!sec) return
      const rect = sec.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (e.key === 'ArrowLeft') goTo(current - 1)
        if (e.key === 'ArrowRight') goTo(current + 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current])

  return (
    <section ref={sectionRef} id="community" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#0e0e0e' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="sec-title">{t.community_title}</h2>
          <div className="divider" />
        </motion.div>

        <motion.p
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          transition={{ delay: 0.1 }}
          className="font-label text-xs text-outline uppercase tracking-widest text-center mb-12"
        >
          {t.community_sub}
        </motion.p>

        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="relative mx-auto"
          id="carousel-section"
          style={{ maxWidth: 860 }}
        >
          {/* Main display */}
          <div className="relative overflow-hidden" style={{ background: '#000', border: '1px solid rgba(73,72,71,.3)' }}>
            {/* Terminal header */}
            <div className="term-header" style={{ borderBottom: '1px solid rgba(73,72,71,.3)' }}>
              <div className="term-dot" />
              <div className="term-dot" />
              <div className="term-dot" />
              <span className="font-label text-xs text-outline ml-3 uppercase tracking-widest">{slides[current].label}</span>
              <span className="font-label text-xs ml-auto" style={{ color: '#9146ff' }}>
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Slides */}
            <div className="relative" id="carousel-track" style={{ height: 520 }}>
              {slides.map((s, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : 1 }}
                >
                  <img src={s.src} alt={s.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
              ))}
            </div>

            {/* Arrows */}
            <CarouselArrow direction="left" onClick={() => goTo(current - 1)} />
            <CarouselArrow direction="right" onClick={() => goTo(current + 1)} />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-4" style={{ background: 'linear-gradient(to top,rgba(0,0,0,.85) 0%,transparent 100%)' }}>
              <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest text-center">{slides[current].caption}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{ width: 8, height: 8, borderRadius: '50%', background: i === current ? '#c19cff' : '#494847', border: 'none', cursor: 'pointer', transition: 'background .3s' }}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="grid mt-4 gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(88px,1fr))' }}>
            {slides.map((s, i) => (
              <div
                key={i}
                onClick={() => goTo(i)}
                style={{ height: 60, cursor: 'pointer', border: `1px solid ${i === current ? 'rgba(193,156,255,.5)' : 'transparent'}`, overflow: 'hidden', opacity: i === current ? 1 : 0.5, transition: 'border-color .3s,opacity .3s' }}
              >
                <img src={s.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CarouselArrow({ direction, onClick }) {
  const [hover, setHover] = useState(false)
  const isLeft = direction === 'left'
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={isLeft ? 'Anterior' : 'Siguiente'}
      className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all"
      style={{
        [isLeft ? 'left' : 'right']: 16,
        width: 44, height: 44,
        background: hover ? 'rgba(193,156,255,.12)' : 'rgba(0,0,0,.7)',
        border: `1px solid ${hover ? 'rgba(193,156,255,.6)' : 'rgba(193,156,255,.25)'}`,
        color: '#c19cff',
        marginTop: 20,
        transition: 'background .2s, border-color .2s',
      }}
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        {isLeft
          ? <path strokeLinecap="square" d="M15 19l-7-7 7-7" />
          : <path strokeLinecap="square" d="M9 5l7 7-7 7" />}
      </svg>
    </button>
  )
}
