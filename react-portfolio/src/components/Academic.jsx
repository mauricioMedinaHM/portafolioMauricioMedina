import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, viewportOnce } from '../hooks/useScrollReveal'

export default function Academic() {
  const { t } = useLang()

  const entries = [
    { titleKey: 'edu1_title', instKey: 'edu1_inst', focusKey: 'edu1_focus', badgeKey: 'edu_in_progress', badgeColor: 'text-primary', badgeBorder: 'border-primary/20' },
    { titleKey: 'edu2_title', inst: 'Odisea · 2025', focusKey: 'edu2_focus', badgeKey: 'edu_verified', badgeColor: 'text-tertiary', badgeBorder: 'border-tertiary/20' },
    { titleKey: 'edu3_title', inst: 'Google · 2020', focusKey: 'edu3_focus', badgeKey: 'edu_verified', badgeColor: 'text-tertiary', badgeBorder: 'border-tertiary/20' },
    { titleKey: 'edu4_title', inst: 'Potrero Digital · 2018', focusKey: 'edu4_focus', badgeKey: 'edu_completed', badgeColor: 'text-tertiary', badgeBorder: 'border-tertiary/20' },
  ]

  return (
    <section id="academic" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#0e0e0e' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="sec-title">ACADEMIC_INIT</h2>
          <div className="divider" />
        </motion.div>

        <div>
          {entries.map((entry, i) => (
            <motion.div
              key={entry.titleKey}
              variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 group card-hover px-4"
              style={{ borderBottom: i < entries.length - 1 ? '1px solid rgba(73,72,71,.2)' : 'none' }}
            >
              <div>
                <h4 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  {t[entry.titleKey]}
                </h4>
                <p className="font-label text-sm text-outline uppercase mt-1">
                  {entry.instKey ? t[entry.instKey] : entry.inst}
                </p>
                <p className="font-label text-xs text-on-surface-variant mt-1">{t[entry.focusKey]}</p>
              </div>
              <div className="mt-4 md:mt-0 flex-shrink-0">
                <span className={`font-label text-sm tracking-widest border px-3 py-1 ${entry.badgeColor} ${entry.badgeBorder}`}>
                  {t[entry.badgeKey]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
