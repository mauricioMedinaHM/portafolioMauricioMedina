import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, viewportOnce } from '../hooks/useScrollReveal'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const slides = [
  { src: '/img/carrusel/Cuyo_Connet_016.webp', label: 'cuyo_connect_016.webp', caption: 'CuyoConnect — Comunidad Web3 · Mendoza, ARG' },
  { src: '/img/carrusel/CharlaInitroWEb3.webp', label: 'charla_web3.webp', caption: 'Charla — Intro a Web3 · Charla presencial' },
  { src: '/img/carrusel/mento.webp', label: 'mentoring.webp', caption: 'Mentoring — Guiando nuevos devs' },
  { src: '/img/carrusel/mentorStellar.webp', label: 'mentor_stellar.webp', caption: 'Mentor Stellar · Ecosistema Blockchain' },
  { src: '/img/carrusel/Copia de _DSC7385ig.webp', label: 'event_photo.webp', caption: 'Evento comunidad · Mauricio Medina' },
  { src: '/img/carrusel/mauricioFotoPerfil.webp', label: 'perfil.webp', caption: 'Mauricio Medina · Web3 Protocol Architect' },
  { src: '/img/carrusel/Charla Puna Tech.webp', label: 'charla_puna_tech.webp', caption: 'Charla — Puna Tech · Comunidad Web3' },
  { src: '/img/carrusel/Speaker Puna Tech.webp', label: 'speaker_puna_tech.webp', caption: 'Speaker — Puna Tech · Evento presencial' },
]

export default function Community() {
  const { t } = useLang()
  const reduced = usePrefersReducedMotion()
  const [current, setCurrent] = useState(0)
  const [inView, setInView] = useState(true)
  const timerRef = useRef(null)
  const sectionRef = useRef(null)

  function goTo(n) {
    setCurrent(((n % slides.length) + slides.length) % slides.length)
    resetTimer()
  }

  function resetTimer() {
    clearInterval(timerRef.current)
    if (reduced || !inView) return
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [reduced, inView])

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    )
    obs.observe(sec)
    return () => obs.disconnect()
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
    <section ref={sectionRef} id="community" className="scope-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4 mb-6"
        >
          <h2 className="sec-title">{t.community_title}</h2>
          <div className="divider" />
        </motion.div>

        <motion.p
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="font-body text-base text-outline mb-12"
        >
          {t.community_sub}
        </motion.p>

        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="relative mx-auto"
          id="carousel-section"
          aria-roledescription="carousel"
          aria-label={t.community_title}
          style={{ maxWidth: 860 }}
        >
          <div className="relative overflow-hidden" style={{ background: '#0f0f0f', borderRadius: 4 }}>
            {!reduced && (
              <div style={{ height: 3, background: 'rgb(255 255 255 / 0.12)' }} aria-hidden="true">
                <div
                  key={`${current}-${inView}`}
                  className="carousel-progress"
                  style={{ animationPlayState: inView ? 'running' : 'paused' }}
                />
              </div>
            )}

            <div className="relative" id="carousel-track" style={{ height: 520 }}>
              {slides.map((s, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : 1 }}
                  aria-hidden={i !== current}
                >
                  <img src={s.src} alt={i === current ? s.caption : ''} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
              ))}
            </div>

            <CarouselArrow direction="left" label={t.a11y_prev} onClick={() => goTo(current - 1)} />
            <CarouselArrow direction="right" label={t.a11y_next} onClick={() => goTo(current + 1)} />

            <div className="absolute bottom-0 left-0 right-0 z-10 p-4" style={{ background: 'linear-gradient(to top,rgba(15,15,15,.85) 0%,transparent 100%)' }}>
              <p aria-live="polite" className="font-label text-sm text-center" style={{ color: '#fff' }}>{slides[current].caption}</p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => goTo(i)}
                aria-label={`${t.a11y_goto_slide} ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
                style={{ width: 8, height: 8, borderRadius: '50%', background: i === current ? '#fdda24' : '#cfcfcf', border: 'none', cursor: 'pointer', transition: 'background .3s' }}
              />
            ))}
          </div>

          <div className="grid mt-4 gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(88px,1fr))' }}>
            {slides.map((s, i) => (
              <button
                type="button"
                key={i}
                onClick={() => goTo(i)}
                aria-label={`${t.a11y_goto_slide} ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
                style={{ height: 60, cursor: 'pointer', border: `1px solid ${i === current ? '#0f0f0f' : 'transparent'}`, overflow: 'hidden', opacity: i === current ? 1 : 0.5, transition: 'border-color .3s,opacity .3s', padding: 0, background: 'none', borderRadius: 4 }}
              >
                <img src={s.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CarouselArrow({ direction, onClick, label }) {
  const [hover, setHover] = useState(false)
  const isLeft = direction === 'left'
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={label}
      className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
      style={{
        [isLeft ? 'left' : 'right']: 16,
        width: 44, height: 44,
        background: hover ? '#fdda24' : 'rgba(15,15,15,.72)',
        border: 'none',
        color: hover ? '#0f0f0f' : '#fff',
        borderRadius: 9999,
        marginTop: 8,
        cursor: 'pointer',
        transition: 'background .2s, color .2s',
      }}
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        {isLeft
          ? <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
          : <path strokeLinecap="round" d="M9 5l7 7-7 7" />}
      </svg>
    </button>
  )
}
