import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { PROJECTS } from '../../data/projects'
import { useDialog } from '../../hooks/useDialog'
import { EASE_OUT, modalPanel, overlayExit, overlayTransition } from '../../lib/motion'

export default function ArchiveModal({ open, onClose }) {
  const { lang, t } = useLang()
  const [filter, setFilter] = useState('all')
  const containerRef = useRef(null)
  const panelRef = useRef(null)
  const close = useCallback(() => onClose(), [onClose])
  useDialog({ open, onClose: close, containerRef, panelRef })

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.tag === filter)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="archive-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: overlayTransition }}
          exit={{ opacity: 0, transition: overlayExit }}
          style={{ position: 'fixed', inset: 0, zIndex: 9997 }}
        >
          <div
            ref={containerRef}
            className="dialog-scrim is-archive"
            onClick={e => { if (e.target === e.currentTarget) onClose() }}
          >
            <motion.div
              className="dialog-panel"
              style={{ width: 'min(960px,96vw)' }}
              initial={modalPanel.initial}
              animate={modalPanel.animate}
              exit={modalPanel.exit}
            >
              <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="archive-title"
                tabIndex={-1}
              >
                <div style={{ background: '#fff', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgb(15 15 15 / 0.12)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span id="archive-title" className="font-headline text-2xl text-on-surface">{t.a11y_archive}</span>
                  </div>
                  <button type="button" className="dialog-close" onClick={onClose} aria-label={t.a11y_close}>
                    ✕
                  </button>
                </div>

                <div style={{ padding: '16px 24px 0', display: 'flex', gap: 8, borderBottom: '1px solid rgb(15 15 15 / 0.08)' }} role="group" aria-label="Filter">
                  {['all', 'web3', 'web2'].map(f => (
                    <button
                      type="button"
                      key={f}
                      onClick={() => setFilter(f)}
                      aria-pressed={filter === f}
                      className={`chip-filter${filter === f ? ' is-active' : ''}`}
                    >
                      {f.toUpperCase()}
                    </button>
                  ))}
                </div>

                <div style={{ padding: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
                  <AnimatePresence initial={false}>
                    {filtered.map(p => (
                      <ArchiveCard key={p.title} project={p} lang={lang} />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ArchiveCard({ project: p, lang }) {
  return (
    <motion.div
      layout
      className="archive-card"
      initial={{ opacity: 0, transform: 'scale(0.97)' }}
      animate={{ opacity: 1, transform: 'scale(1)' }}
      exit={{ opacity: 0, transform: 'scale(0.97)', transition: { duration: 0.15, ease: [0.77, 0, 0.175, 1] } }}
      transition={{ duration: 0.22, ease: EASE_OUT }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontFamily: 'IBM Plex Mono,ui-monospace,monospace', fontSize: 11, color: '#0f0f0f', letterSpacing: '.04em' }}>{p.tag.toUpperCase()}</span>
        {p.url !== '#'
          ? <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.title} style={{ color: '#0f0f0f', fontSize: 16, textDecoration: 'none', lineHeight: 1 }}>↗</a>
          : <span style={{ color: '#cfcfcf', fontSize: 16, lineHeight: 1 }} title="link coming soon">↗</span>}
      </div>
      <h3 style={{ fontFamily: 'Lora,Georgia,serif', fontWeight: 400, fontSize: '1.35rem', color: '#0f0f0f', margin: 0 }}>{p.title}</h3>
      <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '.9rem', color: 'rgb(15 15 15 / 0.7)', lineHeight: 1.6, margin: 0, flex: 1 }}>{p.desc[lang]}</p>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {p.stack.map(s => (
          <span key={s} className="archive-chip">{s}</span>
        ))}
      </div>
    </motion.div>
  )
}
