import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, revealLeftVariants, revealRightVariants, viewportOnce } from '../hooks/useScrollReveal'

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ALQ Agency */}
          <motion.div
            variants={revealLeftVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="card-hover h-full border border-outline-variant/10 p-10 relative overflow-hidden group" style={{ background: '#131313' }}>
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
                <svg className="w-20 h-20 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              </div>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">ALQ Agency</h3>
              <p className="font-label text-xs text-primary uppercase tracking-widest mb-6">{t.alq_role}</p>
              <p className="text-secondary font-body mb-8 max-w-lg leading-relaxed">{t.alq_desc}</p>
              <div className="flex gap-4 flex-wrap">
                {['[ REACT_NEXT ]', '[ NODE_EXPRESS ]', '[ POSTGRES ]', '[ SYSADMIN ]'].map(s => (
                  <span key={s} className="font-label text-xs text-outline">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Patitas a Casa */}
          <motion.div
            variants={revealRightVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.2 }}
          >
            <div className="card-hover h-full border border-primary/20 p-8 flex flex-col" style={{ background: '#1a1919' }}>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Patitas a Casa</h3>
              <p className="font-label text-xs text-tertiary uppercase mb-2">{t.patitas_role}</p>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">{t.patitas_desc}</p>
              <div className="mt-auto border border-outline-variant/20 overflow-hidden" style={{ background: '#0e0e0e' }}>
                <div className="p-2 flex gap-1" style={{ background: '#201f1f' }}>
                  {[1, 2, 3].map(i => <div key={i} style={{ width: 6, height: 6, background: '#494847', borderRadius: '50%' }} />)}
                </div>
                <div className="p-4">
                  <div className="font-label text-xs text-tertiary mb-2">$ ls patitas-a-casa/</div>
                  <div className="font-label text-xs text-on-surface-variant space-y-1">
                    <div><span className="text-primary">drwxr</span> frontend/</div>
                    <div><span className="text-primary">drwxr</span> backend/</div>
                    <div><span className="text-primary">-rw-r</span> docker-compose.yml</div>
                  </div>
                  <div className="font-label text-xs mt-3"><span className="text-tertiary">$</span> <span className="text-on-surface-variant">vercel deploy --prod</span></div>
                  <div className="font-label text-xs text-tertiary mt-1">✓ patitas-a-casa.vercel.app</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Freelance */}
          <motion.div
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="card-hover border border-outline-variant/10 p-8 flex flex-col md:flex-row gap-6 items-start" style={{ background: '#131313' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30" style={{ background: 'rgba(193,156,255,.08)' }}>
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="square" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">{t.freelance_title}</h3>
                <p className="font-label text-xs text-primary uppercase tracking-widest mb-3">2025 – Present</p>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">{t.freelance_desc}</p>
              </div>
              <div className="flex gap-2 flex-wrap md:flex-col">
                {['FULL-STACK', 'WEB3', 'RUST'].map(s => <span key={s} className="tech-badge">{s}</span>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
