import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../../context/LanguageContext'

export default function NpmModal({ open, onClose }) {
  const { lang } = useLang()
  const outputRef = useRef(null)
  const downloadedRef = useRef(false)

  useEffect(() => {
    if (!open) {
      downloadedRef.current = false
      return
    }
    const output = outputRef.current
    if (!output) return
    output.innerHTML = ''

    const es = lang === 'es'
    const lines = [
      { text: '$ npm install @mauricio-medina/curriculum', color: '#9cff93', delay: 0 },
      { text: '', delay: 220 },
      { text: 'npm warn deprecated old-resume@1.0.0: skills outdated, upgrade required', color: '#c19cff', delay: 420 },
      { text: 'npm warn deprecated generic-portfolio@0.3.0: web3 modules missing', color: '#c19cff', delay: 700 },
      { text: '', delay: 900 },
      { text: es ? 'Resolviendo dependencias...' : 'Resolving dependencies...', color: '#777575', delay: 1050 },
      { text: '  + rust@latest                             ✓', color: '#9cff93', delay: 1300 },
      { text: '  + stellar@soroban-v0.9                    ✓', color: '#9cff93', delay: 1520 },
      { text: '  + typescript@5.3.3                        ✓', color: '#9cff93', delay: 1740 },
      { text: '  + react@18.2.0                            ✓', color: '#9cff93', delay: 1960 },
      { text: '  + node.js@lts                             ✓', color: '#9cff93', delay: 2180 },
      { text: '  + postgresql@16                           ✓', color: '#9cff93', delay: 2400 },
      { text: '  + docker@latest                           ✓', color: '#9cff93', delay: 2620 },
      { text: '', delay: 2750 },
      { text: '> @mauricio-medina/curriculum@2.0.25 postinstall', color: '#c19cff', delay: 2900 },
      { text: es ? '> cargando datos de carrera...' : '> loading career data...', color: '#c19cff', delay: 3150 },
      { text: '', delay: 3350 },
      { text: '  [████████████████████████████████] 100%', color: '#9146ff', delay: 3500, progress: true },
      { text: '', delay: 4300 },
      { text: es ? '  experiencia   5 años de desarrollo full-stack' : '  experience     5 years of full-stack development', color: '#adaaaa', delay: 4500 },
      { text: es ? '  hackathon     Ganador 2025 — Stellar Build Challenge' : '  hackathon     Winner 2025 — Stellar Build Challenge', color: '#adaaaa', delay: 4700 },
      { text: es ? '  comunidad     CuyoConnect — 200+ devs' : '  community     CuyoConnect — 200+ devs', color: '#adaaaa', delay: 4900 },
      { text: es ? '  ubicación     Mendoza, Argentina' : '  location      Mendoza, Argentina', color: '#adaaaa', delay: 5100 },
      { text: '', delay: 5250 },
      { text: es ? '✓ @mauricio-medina/curriculum@2.0.25 instalado correctamente' : '✓ @mauricio-medina/curriculum@2.0.25 installed successfully', color: '#9cff93', delay: 5450 },
      { text: es ? '✓ Generando curriculum.pdf...' : '✓ Generating curriculum.pdf...', color: '#9cff93', delay: 5800 },
      { text: '', delay: 6000 },
      { text: es ? '> curriculum.pdf → descarga iniciada!' : '> curriculum.pdf → download started!', color: '#c19cff', delay: 6200, download: true },
    ]

    const timers = []

    lines.forEach(({ text, color, delay, progress, download }) => {
      const tid = setTimeout(() => {
        if (!output) return
        const p = document.createElement('p')
        p.style.cssText = `color:${color || '#adaaaa'};margin:0;white-space:pre;`

        if (progress) {
          p.textContent = '  [' + ' '.repeat(32) + '] 0%'
          output.appendChild(p)
          output.scrollTop = output.scrollHeight
          let pct = 0
          const iv = setInterval(() => {
            pct = Math.min(100, pct + 4)
            const filled = Math.floor((pct / 100) * 32)
            p.textContent = '  [' + '█'.repeat(filled) + ' '.repeat(32 - filled) + '] ' + pct + '%'
            output.scrollTop = output.scrollHeight
            if (pct >= 100) clearInterval(iv)
          }, 32)
          return
        }

        if (download && !downloadedRef.current) {
          downloadedRef.current = true
          const link = document.createElement('a')
          link.href = '/CV/Mauricio Medina CV WEB3.pdf'
          link.download = 'Mauricio_Medina_CV.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }

        p.textContent = text
        output.appendChild(p)
        output.scrollTop = output.scrollHeight
      }, delay)
      timers.push(tid)
    })

    return () => timers.forEach(clearTimeout)
  }, [open, lang])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="npm-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={e => { if (e.target === e.currentTarget) onClose() }}
          style={{ display: 'flex', position: 'fixed', inset: 0, zIndex: 9998, background: 'rgba(0,0,0,.88)', backdropFilter: 'blur(10px)', alignItems: 'center', justifyContent: 'center', padding: 20 }}
        >
          <motion.div
            key="npm-panel"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            style={{ width: 'min(680px,94vw)', background: '#0e0e0e', border: '1px solid rgba(193,156,255,.22)', boxShadow: '0 0 60px rgba(145,70,255,.12)' }}
          >
            {/* Title bar */}
            <div style={{ background: '#201f1f', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(73,72,71,.3)' }}>
              <div style={{ display: 'flex', gap: 6, marginRight: 12 }}>
                {[1, 2, 3].map(i => <span key={i} style={{ width: 10, height: 10, background: '#494847', display: 'inline-block' }} />)}
              </div>
              <span style={{ color: '#777575', fontFamily: "'Fira Code',monospace", fontSize: 11, letterSpacing: '.05em' }}>
                bash — npm install @mauricio-medina/curriculum
              </span>
              <button onClick={onClose} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#494847', fontSize: 16, cursor: 'pointer', lineHeight: 1, padding: '0 4px' }}>✕</button>
            </div>
            {/* Output */}
            <div ref={outputRef} style={{ padding: '20px 24px', minHeight: 240, maxHeight: '55vh', overflowY: 'auto', fontFamily: "'Fira Code',monospace", fontSize: 13, lineHeight: 1.8 }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
