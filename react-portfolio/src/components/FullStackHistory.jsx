import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealLeftVariants, revealVariants, revealRightVariants, viewportOnce } from '../hooks/useScrollReveal'

export default function FullStackHistory() {
  const { t } = useLang()

  return (
    <section id="fullstack" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#000' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4 mb-16 flex-row-reverse"
        >
          <h2 className="sec-title">FULL_STACK_HISTORY</h2>
          <div className="divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ALQ Agency */}
          <motion.div
            variants={revealLeftVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="card-hover p-6 border-l-2 border-primary flex flex-col"
            style={{ background: '#131313' }}
          >
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="font-headline text-lg font-bold text-on-surface">ALQ Agency</h3>
                <p className="font-label text-xs text-primary uppercase mt-0.5 tracking-widest">{t.alq_role}</p>
              </div>
            </div>
            <p className="text-on-surface-variant font-body text-xs leading-relaxed flex-1">{t.alq_desc}</p>
            <div className="mt-5 flex gap-1.5 flex-wrap">
              {['React', 'Next.js', 'Node', 'PostgreSQL', 'SysAdmin'].map(s => (
                <span key={s} className="tech-badge">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Patitas a Casa */}
          <motion.div
            variants={revealRightVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.15 }}
            className="card-hover p-6 border-l-2 border-tertiary flex flex-col"
            style={{ background: '#131313' }}
          >
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="font-headline text-lg font-bold text-on-surface">Patitas a Casa</h3>
                <p className="font-label text-xs text-tertiary uppercase mt-0.5 tracking-widest">{t.patitas_role}</p>
              </div>
            </div>
            <p className="text-on-surface-variant font-body text-xs leading-relaxed flex-1">{t.patitas_desc}</p>
            <div className="mt-5 flex gap-1.5 flex-wrap">
              {['React', 'Node.js', 'PostgreSQL', 'Docker'].map(s => (
                <span key={s} className="tech-badge">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Freelance */}
          <motion.div
            variants={revealLeftVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.2 }}
            className="card-hover p-6 border-l-2 flex flex-col"
            style={{ background: '#131313', borderLeftColor: '#c19cff' }}
          >
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="font-headline text-lg font-bold text-on-surface">{t.freelance_title}</h3>
                <p className="font-label text-xs uppercase mt-0.5 tracking-widest" style={{ color: '#9146ff' }}>2025 – Present</p>
              </div>
            </div>
            <p className="text-on-surface-variant font-body text-xs leading-relaxed flex-1">{t.freelance_desc}</p>
            <div className="mt-5 flex gap-1.5 flex-wrap">
              {['Full-Stack', 'Web3', 'Rust'].map(s => (
                <span key={s} className="tech-badge">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Puna Tech */}
          <motion.div
            variants={revealRightVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.25 }}
            className="card-hover p-6 border-l-2 border-tertiary flex flex-col"
            style={{ background: '#131313' }}
          >
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-3">
                <PunaTechIcon />
                <div>
                  <h3 className="font-headline text-lg font-bold text-on-surface">Puna Tech 2026</h3>
                  <p className="font-label text-xs text-tertiary uppercase mt-0.5 tracking-widest">{t.punatech_role}</p>
                </div>
              </div>
            </div>
            <p className="text-on-surface-variant font-body text-xs leading-relaxed flex-1">{t.punatech_desc}</p>
            <div className="mt-5 flex gap-1.5 flex-wrap">
              {['AI', 'Speaker', 'Mentor', 'Hackathon'].map(s => (
                <span key={s} className="tech-badge">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PunaTechIcon() {
  return (
    <div style={{ width: 32, height: 32, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(216,180,254,.1)', border: '1px solid rgba(216,180,254,.2)' }}>
      <svg width="16" height="16" fill="none" stroke="var(--tertiary)" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="square" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4M9 4a3 3 0 016 0v7a3 3 0 01-6 0V4z" />
      </svg>
    </div>
  )
}
