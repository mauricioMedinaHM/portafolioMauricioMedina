import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { useDialog } from '../../hooks/useDialog'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

function triggerDownload() {
  const link = document.createElement('a')
  link.href = '/CV/Mauricio_Medina_CV.pdf'
  link.download = 'Mauricio_Medina_CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function NpmModal({ open, onClose }) {
  const { lang, t } = useLang()
  const reduced = usePrefersReducedMotion()
  const outputRef = useRef(null)
  const containerRef = useRef(null)
  const panelRef = useRef(null)
  const downloadedRef = useRef(false)
  const close = useCallback(() => onClose(), [onClose])
  useDialog({ open, onClose: close, containerRef, panelRef })

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
      { text: '$ npm install @mauricio-medina/curriculum', color: 'var(--tertiary)', delay: 0 },
      { text: '', delay: 220 },
      { text: 'npm warn deprecated old-resume@1.0.0: skills outdated, upgrade required', color: '#c19cff', delay: 420 },
      { text: 'npm warn deprecated generic-portfolio@0.3.0: web3 modules missing', color: '#c19cff', delay: 700 },
      { text: '', delay: 900 },
      { text: es ? 'Resolviendo dependencias...' : 'Resolving dependencies...', color: '#adaaaa', delay: 1050 },
      { text: '  + rust@latest                             ✓', color: 'var(--tertiary)', delay: 1300 },
      { text: '  + stellar@soroban-v0.9                    ✓', color: 'var(--tertiary)', delay: 1520 },
      { text: '  + typescript@5.3.3                        ✓', color: 'var(--tertiary)', delay: 1740 },
      { text: '  + react@18.2.0                            ✓', color: 'var(--tertiary)', delay: 1960 },
      { text: '  + node.js@lts                             ✓', color: 'var(--tertiary)', delay: 2180 },
      { text: '  + postgresql@16                           ✓', color: 'var(--tertiary)', delay: 2400 },
      { text: '  + docker@latest                           ✓', color: 'var(--tertiary)', delay: 2620 },
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
      { text: es ? '✓ @mauricio-medina/curriculum@2.0.25 instalado correctamente' : '✓ @mauricio-medina/curriculum@2.0.25 installed successfully', color: 'var(--tertiary)', delay: 5450 },
      { text: es ? '✓ Generando curriculum.pdf...' : '✓ Generating curriculum.pdf...', color: 'var(--tertiary)', delay: 5800 },
      { text: '', delay: 6000 },
      { text: es ? '> curriculum.pdf → descarga iniciada!' : '> curriculum.pdf → download started!', color: '#c19cff', delay: 6200, download: true },
    ]

    const timers = []
    const intervals = []

    function appendLine({ text, color, progress, download }) {
      const p = document.createElement('p')
      p.style.cssText = `color:${color || '#adaaaa'};margin:0;white-space:pre;`

      if (progress && !reduced) {
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
        intervals.push(iv)
        return
      }

      if (download && !downloadedRef.current) {
        downloadedRef.current = true
        triggerDownload()
      }

      p.textContent = text
      output.appendChild(p)
      output.scrollTop = output.scrollHeight
    }

    if (reduced) {
      lines.forEach(appendLine)
      return () => {}
    }

    lines.forEach(line => {
      const tid = setTimeout(() => appendLine(line), line.delay)
      timers.push(tid)
    })

    return () => {
      timers.forEach(clearTimeout)
      intervals.forEach(clearInterval)
    }
  }, [open, lang, reduced])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="npm-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ position: 'fixed', inset: 0, zIndex: 9998 }}
        >
          <div
            ref={containerRef}
            onClick={e => { if (e.target === e.currentTarget) onClose() }}
            style={{ display: 'flex', position: 'absolute', inset: 0, background: 'rgba(0,0,0,.88)', backdropFilter: 'blur(10px)', alignItems: 'center', justifyContent: 'center', padding: 20 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.28, ease: [0.23, 1, 0.32, 1] } }}
              exit={{ opacity: 0, scale: 0.97, y: 6, transition: { duration: 0.18, ease: [0.77, 0, 0.175, 1] } }}
              style={{ width: 'min(680px,94vw)', background: '#0e0e0e', border: '1px solid rgba(193,156,255,.22)', boxShadow: '0 0 60px rgba(145,70,255,.12)' }}
            >
              <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="npm-title"
                tabIndex={-1}
              >
                <div style={{ background: '#201f1f', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(73,72,71,.3)' }}>
                  <div style={{ display: 'flex', gap: 6, marginRight: 12 }} aria-hidden="true">
                    {[1, 2, 3].map(i => <span key={i} style={{ width: 10, height: 10, background: '#494847', display: 'inline-block' }} />)}
                  </div>
                  <span id="npm-title" style={{ color: '#adaaaa', fontFamily: "'Fira Code',monospace", fontSize: 11, letterSpacing: '.05em' }}>
                    {t.a11y_cv_modal}
                  </span>
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={() => { if (!downloadedRef.current) { downloadedRef.current = true; triggerDownload() } }}
                    style={{ marginLeft: 'auto', padding: '6px 12px', fontSize: 10 }}
                  >
                    {t.a11y_download_now}
                  </button>
                  <button type="button" onClick={onClose} aria-label={t.a11y_close} style={{ background: 'none', border: 'none', color: '#adaaaa', fontSize: 16, cursor: 'pointer', lineHeight: 1, padding: '0 4px' }}>✕</button>
                </div>
                <div ref={outputRef} role="log" aria-live="polite" style={{ padding: '20px 24px', minHeight: 240, maxHeight: '55vh', overflowY: 'auto', fontFamily: "'Fira Code',monospace", fontSize: 13, lineHeight: 1.8 }} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
