import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { PROJECTS } from '../../data/projects'

export default function ArchiveModal({ open, onClose }) {
  const { lang, t } = useLang()
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.tag === filter)

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        key="archive-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={e => { if (e.target === e.currentTarget) onClose() }}
        style={{ display: 'flex', position: 'fixed', inset: 0, zIndex: 9997, background: 'rgba(0,0,0,.9)', backdropFilter: 'blur(12px)', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 20px', overflowY: 'auto' }}
      >
        <motion.div
          key="archive-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{ width: 'min(960px,96vw)', background: '#0e0e0e', border: '1px solid rgba(193,156,255,.2)', boxShadow: '0 0 80px rgba(145,70,255,.1)' }}
        >
          {/* Header */}
          <div style={{ background: '#131313', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(73,72,71,.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {[1, 2, 3].map(i => <span key={i} style={{ width: 10, height: 10, background: '#494847', display: 'inline-block' }} />)}
              </div>
              <span style={{ fontFamily: "'Fira Code',monospace", fontSize: 12, color: '#777575', letterSpacing: '.06em' }}>ls ~/projects --all</span>
            </div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#494847', fontSize: 18, cursor: 'pointer', padding: '0 4px', lineHeight: 1 }}>✕</button>
          </div>

          {/* Filters */}
          <div style={{ padding: '16px 24px 0', display: 'flex', gap: 8, borderBottom: '1px solid rgba(73,72,71,.15)' }}>
            {['all', 'web3', 'web2'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  fontFamily: "'Fira Code',monospace",
                  fontSize: 11,
                  padding: '6px 14px',
                  background: filter === f ? '#9146ff' : 'transparent',
                  color: filter === f ? '#fff' : '#777575',
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

          {/* Grid */}
          <div style={{ padding: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
            {filtered.map(p => (
              <ArchiveCard key={p.title} project={p} lang={lang} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ArchiveCard({ project: p, lang }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ background: '#131313', border: `1px solid ${hover ? 'rgba(193,156,255,.35)' : 'rgba(73,72,71,.25)'}`, padding: 20, display: 'flex', flexDirection: 'column', gap: 12, transition: 'border-color .2s' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontFamily: "'Fira Code',monospace", fontSize: 10, color: p.color, letterSpacing: '.08em', padding: '2px 8px', border: `1px solid ${p.color}33`, background: `${p.color}11` }}>{p.tag.toUpperCase()}</span>
        {p.url !== '#'
          ? <a href={p.url} target="_blank" rel="noreferrer" style={{ color: '#494847', fontSize: 16, textDecoration: 'none', lineHeight: 1 }} onMouseEnter={e => e.target.style.color = '#c19cff'} onMouseLeave={e => e.target.style.color = '#494847'}>↗</a>
          : <span style={{ color: '#262626', fontSize: 16, lineHeight: 1 }} title="link coming soon">↗</span>}
      </div>
      <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#e5e2e1', margin: 0 }}>{p.title}</h4>
      <p style={{ fontFamily: "'Manrope',sans-serif", fontSize: '.8rem', color: '#777575', lineHeight: 1.6, margin: 0, flex: 1 }}>{p.desc[lang]}</p>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {p.stack.map(s => (
          <span key={s} style={{ fontFamily: "'Fira Code',monospace", fontSize: 10, color: '#adaaaa', background: '#1a1919', padding: '2px 8px' }}>{s}</span>
        ))}
      </div>
    </div>
  )
}
