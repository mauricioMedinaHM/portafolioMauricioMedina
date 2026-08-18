import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, staggerContainer, staggerItem, viewportOnce } from '../hooks/useScrollReveal'

const ENTRIES = [
  { id: 'uda', dateKey: 'edu1_date', dateTime: '2024/2027', titleKey: 'edu1_title', instKey: 'edu1_inst', focusKey: 'edu1_focus' },
  { id: 'odisea', dateKey: 'edu2_date', dateTime: '2025', titleKey: 'edu2_title', instKey: 'edu2_inst', focusKey: 'edu2_focus' },
  { id: 'google', dateKey: 'edu3_date', dateTime: '2020', titleKey: 'edu3_title', instKey: 'edu3_inst', focusKey: 'edu3_focus' },
  { id: 'potrero', dateKey: 'edu4_date', dateTime: '2018', titleKey: 'edu4_title', instKey: 'edu4_inst', focusKey: 'edu4_focus' },
]

export default function Academic() {
  const { t } = useLang()

  return (
    <section id="academic" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#0e0e0e' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4 mb-16"
        >
          <h2 id="academic-title" className="sec-title">{t.academic_title}</h2>
          <div className="divider" />
        </motion.div>

        <motion.ol
          className="exp-log"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          aria-labelledby="academic-title"
        >
          {ENTRIES.map((entry) => (
            <motion.li key={entry.id} variants={staggerItem} className="exp-item">
              <div className="exp-entry">
                <time className="exp-date-col" dateTime={entry.dateTime}>{t[entry.dateKey]}</time>
                <div className="exp-rail" aria-hidden="true">
                  <span className="exp-node" />
                </div>
                <div className="exp-body">
                  <h3 className="font-headline text-base md:text-lg font-semibold text-on-surface leading-snug">
                    {t[entry.titleKey]}
                  </h3>
                  <div className="exp-meta mt-1">
                    <p className="edu-inst">{t[entry.instKey]}</p>
                    <span className="exp-date-mobile font-label text-[10px] uppercase tracking-widest text-outline">
                      {t[entry.dateKey]}
                    </span>
                  </div>
                  <p className="exp-copy mt-2">{t[entry.focusKey]}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
