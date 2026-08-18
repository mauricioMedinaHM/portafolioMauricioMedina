import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { PROJECTS } from '../../data/projects'
import { useDialog } from '../../hooks/useDialog'

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
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ position: 'fixed', inset: 0, zIndex: 9997 }}
        >
          <div
            ref={containerRef}
            onClick={e => { if (e.target === e.currentTarget) onClose() }}
            style={{ display: 'flex', position: 'absolute', inset: 0, background: 'rgba(0,0,0,.9)', backdropFilter: 'blur(12px)', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 20px', overflowY: 'auto' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.28, ease: [0.23, 1, 0.32, 1] } }}
              exit={{ opacity: 0, scale: 0.97, y: 8, transition: { duration: 0.18, ease: [0.77, 0, 0.175, 1] } }}
              style={{ width: 'min(960px,96vw)', background: '#0e0e0e', border: '1px solid rgba(193,156,255,.2)', boxShadow: '0 0 80px rgba(145,70,255,.1)' }}
            >
              <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="archive-title"
                tabIndex={-1}
              >
                <div style={{ background: '#131313', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(73,72,71,.25)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ display: 'flex', gap: 6 }} aria-hidden="true">
                      {[1, 2, 3].map(i => <span key={i} style={{ width: 10, height: 10, background: '#494847', display: 'inline-block' }} />)}
                    </div>
                    <span id="archive-title" style={{ fontFamily: "'Fira Code',monospace", fontSize: 12, color: '#adaaaa', letterSpacing: '.06em' }}>{t.a11y_archive} — ls ~/projects --all</span>
                  </div>
                  <button type="button" onClick={onClose} aria-label={t.a11y_close} style={{ background: 'none', border: 'none', color: '#adaaaa', fontSize: 18, cursor: 'pointer', padding: '0 4px', lineHeight: 1 }}>✕</button>
                </div>

                <div style={{ padding: '16px 24px 0', display: 'flex', gap: 8, borderBottom: '1px solid rgba(73,72,71,.15)' }} role="group" aria-label="Filter">
                  {['all', 'web3', 'web2'].map(f => (
                    <button
                      type="button"
                      key={f}
                      onClick={() => setFilter(f)}
                      aria-pressed={filter === f}
                      style={{
                        fontFamily: "'Fira Code',monospace",
                        fontSize: 11,
                        padding: '6px 14px',
                        background: filter === f ? '#9146ff' : 'transparent',
                        color: filter === f ? '#fff' : '#adaaaa',
                        border: filter === f ? 'none' : '1px solid rgba(73,72,71,.4)',
                        cursor: 'pointer',
                        letterSpacing: '.06em',
                        marginBottom: 16,
                      }}
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
  const [hover, setHover] = useState(false)
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15, ease: [0.77, 0, 0.175, 1] } }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ background: '#131313', border: `1px solid ${hover ? 'rgba(193,156,255,.35)' : 'rgba(73,72,71,.25)'}`, padding: 20, display: 'flex', flexDirection: 'column', gap: 12, transition: 'border-color .2s' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontFamily: "'Fira Code',monospace", fontSize: 10, color: p.color, letterSpacing: '.08em', padding: '2px 8px', border: `1px solid ${p.color}33`, background: `${p.color}11` }}>{p.tag.toUpperCase()}</span>
        {p.url !== '#'
          ? <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.title} style={{ color: '#adaaaa', fontSize: 16, textDecoration: 'none', lineHeight: 1 }} onMouseEnter={e => e.currentTarget.style.color = '#c19cff'} onMouseLeave={e => e.currentTarget.style.color = '#adaaaa'}>↗</a>
          : <span style={{ color: '#262626', fontSize: 16, lineHeight: 1 }} title="link coming soon">↗</span>}
      </div>
      <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#e5e2e1', margin: 0 }}>{p.title}</h3>
      <p style={{ fontFamily: "'Manrope',sans-serif", fontSize: '.8rem', color: '#adaaaa', lineHeight: 1.6, margin: 0, flex: 1 }}>{p.desc[lang]}</p>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {p.stack.map(s => (
          <span key={s} style={{ fontFamily: "'Fira Code',monospace", fontSize: 10, color: '#adaaaa', background: '#1a1919', padding: '2px 8px' }}>{s}</span>
        ))}
      </div>
    </motion.div>
  )
}
