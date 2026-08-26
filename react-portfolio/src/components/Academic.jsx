import { useLang } from '../context/LanguageContext'
import { useArmLog, useTriggerLock } from '../hooks/useTriggerLock'
import { cx } from './ui/cx'

const ENTRIES = [
  { id: 'uda', dateKey: 'edu1_date', dateTime: '2024/2027', titleKey: 'edu1_title', instKey: 'edu1_inst', focusKey: 'edu1_focus' },
  { id: 'odisea', dateKey: 'edu2_date', dateTime: '2025', titleKey: 'edu2_title', instKey: 'edu2_inst', focusKey: 'edu2_focus' },
  { id: 'google', dateKey: 'edu3_date', dateTime: '2020', titleKey: 'edu3_title', instKey: 'edu3_inst', focusKey: 'edu3_focus' },
  { id: 'potrero', dateKey: 'edu4_date', dateTime: '2018', titleKey: 'edu4_title', instKey: 'edu4_inst', focusKey: 'edu4_focus' },
]

function AcademicItem({ entry, t }) {
  const { ref, locked } = useTriggerLock(0.28)
  return (
    <li
      ref={ref}
      className={cx('exp-item', locked && 'is-locked')}
      style={{ '--exp-accent': 'var(--primary)' }}
    >
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
    </li>
  )
}

export default function Academic() {
  const { t } = useLang()
  const { ref, armed } = useArmLog()

  return (
    <section id="academic" className="scope-section alt">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 id="academic-title" className="sec-title">{t.academic_title}</h2>
          <div className="divider" />
        </div>

        <ol
          ref={ref}
          className={cx('exp-log', armed && 'is-armed')}
          aria-labelledby="academic-title"
        >
          {ENTRIES.map((entry) => (
            <AcademicItem key={entry.id} entry={entry} t={t} />
          ))}
        </ol>
      </div>
    </section>
  )
}
