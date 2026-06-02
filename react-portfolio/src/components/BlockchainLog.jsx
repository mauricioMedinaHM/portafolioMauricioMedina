import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, revealLeftVariants, revealRightVariants, viewportOnce } from '../hooks/useScrollReveal'

export default function BlockchainLog() {
  const { t } = useLang()

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#0e0e0e' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="sec-title">BLOCKCHAIN_LOG</h2>
          <div className="divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lotty */}
          <motion.div
            variants={revealLeftVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="card-hover p-6 border-l-2 border-primary flex flex-col"
            style={{ background: '#131313' }}
          >
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-3">
                <img src="/img/LottyLogoDashboard.webp" alt="Lotty" className="h-8 w-auto object-contain flex-shrink-0" style={{ maxWidth: 60 }} />
                <div>
                  <h3 className="font-headline text-lg font-bold text-primary">Lotty</h3>
                  <p className="font-label text-xs text-tertiary uppercase mt-0.5">{t.lotty_role}</p>
                </div>
              </div>
              <span className="font-label text-xs text-outline flex-shrink-0 ml-2">2025 –</span>
            </div>
            <ul className="space-y-3 text-on-surface-variant font-body text-xs leading-relaxed flex-1">
              <li className="flex gap-2 items-start"><span className="text-primary font-label mt-0.5 flex-shrink-0">$</span><span>{t.lotty_1}</span></li>
              <li className="flex gap-2 items-start"><span className="text-primary font-label mt-0.5 flex-shrink-0">$</span><span>{t.lotty_2}</span></li>
              <li className="flex gap-2 items-start"><span className="text-primary font-label mt-0.5 flex-shrink-0">$</span><span>{t.lotty_3}</span></li>
            </ul>
            <div className="mt-5 flex gap-1.5 flex-wrap">
              {['Soroban', 'Rust', 'Stellar SDK', 'React'].map(s => <span key={s} className="tech-badge">{s}</span>)}
            </div>
          </motion.div>

          {/* Stellar Starmaker */}
          <motion.div
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.15 }}
            className="card-hover p-6 border-l-2 flex flex-col"
            style={{ background: '#131313', borderLeftColor: '#c19cff' }}
          >
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-3">
                <img src="https://cdn.simpleicons.org/stellar/c19cff" alt="Stellar" className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="font-headline text-lg font-bold" style={{ color: '#c19cff' }}>{t.starmaker_title}</h3>
                  <p className="font-label text-xs uppercase mt-0.5" style={{ color: '#9146ff' }}>{t.starmaker_role}</p>
                </div>
              </div>
              <span className="font-label text-xs text-outline">2024 –</span>
            </div>
            <p className="text-on-surface-variant font-body text-xs leading-relaxed flex-1">{t.starmaker_desc1}</p>
            <div className="mt-5 flex gap-1.5 flex-wrap">
              {['STELLAR', 'SOROBAN', 'COMMUNITY', 'LATAM'].map(s => <span key={s} className="tech-badge">{s}</span>)}
            </div>
          </motion.div>

          {/* Stellar Rust */}
          <motion.div
            variants={revealRightVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.2 }}
            className="card-hover p-6 border-l-2 border-tertiary flex flex-col"
            style={{ background: '#131313' }}
          >
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-3">
                <img src="https://cdn.simpleicons.org/rust/d8b4fe" alt="Rust" className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="font-headline text-lg font-bold text-tertiary">Stellar Rust</h3>
                  <p className="font-label text-xs text-tertiary uppercase mt-0.5">{t.stellar_role}</p>
                </div>
              </div>
              <span className="font-label text-xs text-outline flex-shrink-0 ml-2">NOW</span>
            </div>
            <p className="text-on-surface-variant font-body text-xs leading-relaxed flex-1">{t.stellar_desc1}</p>
            <div className="mt-5 flex gap-1.5 flex-wrap">
              {['SOROBAN', 'RUST_LANG', 'WASM', 'TESTNET', 'SCF'].map(s => <span key={s} className="tech-badge">{s}</span>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
