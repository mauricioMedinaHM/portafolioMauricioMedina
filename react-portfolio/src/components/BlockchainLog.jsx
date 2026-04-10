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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lotty */}
          <motion.div
            variants={revealLeftVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="card-hover p-8 border-l-4 border-primary"
            style={{ background: '#131313' }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <img src="/img/LottyLogoDashboard.webp" alt="Lotty" className="h-10 w-auto object-contain flex-shrink-0" style={{ maxWidth: 80 }} />
                <div>
                  <h3 className="font-headline text-2xl font-bold text-primary">Lotty</h3>
                  <p className="font-label text-xs text-tertiary uppercase mt-1">{t.lotty_role}</p>
                </div>
              </div>
              <span className="font-label text-xs text-outline flex-shrink-0 ml-2">2025 - PRESENT</span>
            </div>
            <ul className="space-y-4 text-on-surface-variant font-body text-sm">
              <li className="flex gap-3 items-start"><span className="text-primary font-label mt-0.5 flex-shrink-0">$</span><span>{t.lotty_1}</span></li>
              <li className="flex gap-3 items-start"><span className="text-primary font-label mt-0.5 flex-shrink-0">$</span><span>{t.lotty_2}</span></li>
              <li className="flex gap-3 items-start"><span className="text-primary font-label mt-0.5 flex-shrink-0">$</span><span>{t.lotty_3}</span></li>
            </ul>
            <div className="mt-6 flex gap-2 flex-wrap">
              {['Soroban', 'Rust', 'Stellar SDK', 'React'].map(s => <span key={s} className="tech-badge">{s}</span>)}
            </div>
          </motion.div>

          {/* Stellar Starmaker */}
          <motion.div
            variants={revealRightVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.15 }}
            className="card-hover p-8 border-l-4"
            style={{ background: '#131313', borderLeftColor: '#c19cff' }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <img src="https://cdn.simpleicons.org/stellar/c19cff" alt="Stellar" className="w-9 h-9 flex-shrink-0" />
                <div>
                  <h3 className="font-headline text-2xl font-bold" style={{ color: '#c19cff' }}>{t.starmaker_title}</h3>
                  <p className="font-label text-xs uppercase mt-1" style={{ color: '#9146ff' }}>{t.starmaker_role}</p>
                </div>
              </div>
              <span className="font-label text-xs text-outline">2024 - PRESENT</span>
            </div>
            <p className="text-on-surface-variant font-body text-sm mb-4 leading-relaxed">{t.starmaker_desc1}</p>
            <p className="text-on-surface-variant font-body text-sm mb-6 leading-relaxed">{t.starmaker_desc2}</p>
            <div className="flex flex-wrap gap-2">
              {['STELLAR', 'SOROBAN', 'COMMUNITY', 'LATAM'].map(s => <span key={s} className="tech-badge">{s}</span>)}
            </div>
          </motion.div>

          {/* Stellar Rust */}
          <motion.div
            variants={revealRightVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.2 }}
            className="card-hover p-8 border-l-4 border-tertiary"
            style={{ background: '#131313' }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <img src="https://cdn.simpleicons.org/rust/9cff93" alt="Rust" className="w-9 h-9 flex-shrink-0" />
                <div>
                  <h3 className="font-headline text-2xl font-bold text-tertiary">Stellar Rust</h3>
                  <p className="font-label text-xs text-tertiary uppercase mt-1">{t.stellar_role}</p>
                </div>
              </div>
              <span className="font-label text-xs text-outline flex-shrink-0 ml-2">CURRENT_STRETCH</span>
            </div>
            <p className="text-on-surface-variant font-body text-sm mb-4 leading-relaxed">{t.stellar_desc1}</p>
            <p className="text-on-surface-variant font-body text-sm mb-6 leading-relaxed">{t.stellar_desc2}</p>
            <div className="flex flex-wrap gap-2">
              {['SOROBAN', 'RUST_LANG', 'WASM', 'TESTNET', 'SCF'].map(s => <span key={s} className="tech-badge">{s}</span>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
