import { ArrowUpRight } from '@untitledui/icons'
import { ChevronRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { useArmLog, useTriggerLock } from '../../hooks/useTriggerLock'
import { cx } from './cx'

const ACCENT = {
  brand: '#0f0f0f',
  success: '#00a7b5',
}

function EntryBody({ entry, t, accent, railLabel }) {
  const title = entry.titleKey ? t[entry.titleKey] : entry.title
  const role = entry.roleKey ? t[entry.roleKey] : entry.role
  const paragraphs = (entry.descKeys || []).map((key) => t[key]).filter(Boolean)
  const bullets = (entry.bulletKeys || []).map((key) => t[key]).filter(Boolean)
  const cta = entry.ctaKey ? t[entry.ctaKey] : null
  const Icon = entry.icon

  return (
    <>
      {entry.dateTime ? (
        <time className="exp-date-col" dateTime={entry.dateTime}>{railLabel}</time>
      ) : (
        <span className="exp-date-col">{railLabel}</span>
      )}

      <div className="exp-rail" aria-hidden="true">
        <span className="exp-node" />
      </div>

      <div className="exp-body">
        <div className="exp-head">
          {entry.logo ? (
            <img src={entry.logo} alt="" className="exp-logo" />
          ) : Icon ? (
            <Icon className="exp-logo-icon" aria-hidden="true" />
          ) : null}

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <h3 className="font-headline text-lg text-on-surface leading-tight">
                {title}
              </h3>
              {cta && (
                <span className="exp-cta">
                  {cta}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              )}
            </div>
            {role ? (
              <div className="exp-meta mt-1">
                <p className="exp-role font-label text-sm">
                  {role}
                </p>
                <span className="exp-date-mobile font-label text-[10px] uppercase tracking-widest text-outline">
                  {railLabel}
                </span>
              </div>
            ) : (
              <span className="exp-date-mobile mt-1 font-label text-[10px] uppercase tracking-widest text-outline">
                {railLabel}
              </span>
            )}
            {entry.placeKey ? (
              <p className="exp-place">{t[entry.placeKey]}</p>
            ) : null}
          </div>
        </div>

        {bullets.length > 0 && (
          <ul className="exp-copy mt-4 space-y-2.5">
            {bullets.map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <ChevronRight className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: accent }} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {paragraphs.length > 0 && (
          <div className="exp-copy mt-4 space-y-3">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

function ExperienceEntry({ entry, t }) {
  const { ref, locked } = useTriggerLock(0.28)
  const accent = ACCENT[entry.accent] || ACCENT.brand
  const railLabel = entry.railKey
    ? t[entry.railKey]
    : (entry.dateKey ? t[entry.dateKey] : entry.date)

  const body = (
    <EntryBody
      entry={entry}
      t={t}
      accent={accent}
      railLabel={railLabel}
    />
  )

  return (
    <li
      ref={ref}
      className={cx('exp-item', locked && 'is-locked')}
      style={{ '--exp-accent': accent }}
    >
      {entry.href ? (
        <a
          className="exp-entry"
          href={entry.href}
          target="_blank"
          rel="noreferrer"
        >
          {body}
        </a>
      ) : (
        <div className="exp-entry">{body}</div>
      )}
    </li>
  )
}

export default function ExperienceLog({ entries, labelledBy, variant }) {
  const { t } = useLang()
  const { ref, armed } = useArmLog()

  return (
    <ol
      ref={ref}
      className={cx('exp-log', armed && 'is-armed', variant === 'cv' && 'is-cv')}
      aria-labelledby={labelledBy}
    >
      {entries.map((entry) => (
        <ExperienceEntry key={entry.id} entry={entry} t={t} />
      ))}
    </ol>
  )
}
