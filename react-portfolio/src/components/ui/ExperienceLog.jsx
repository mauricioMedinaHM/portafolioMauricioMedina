import { ArrowUpRight } from '@untitledui/icons'
import { motion } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { staggerContainer, staggerItem, viewportOnce } from '../../hooks/useScrollReveal'
import { FeaturedIcon } from './FeaturedIcon'

const ACCENT = {
  brand: '#c19cff',
  success: '#9cff93',
}

function EntryBody({ entry, t, accent, iconColor, railLabel }) {
  const title = entry.titleKey ? t[entry.titleKey] : entry.title
  const role = entry.roleKey ? t[entry.roleKey] : entry.role
  const paragraphs = (entry.descKeys || []).map((key) => t[key]).filter(Boolean)
  const bullets = (entry.bulletKeys || []).map((key) => t[key]).filter(Boolean)
  const cta = entry.ctaKey ? t[entry.ctaKey] : null

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
          <FeaturedIcon size="md" color={iconColor} icon={entry.icon} aria-hidden="true">
            {entry.logo && (
              <img
                src={entry.logo}
                alt=""
                className="relative z-[1] h-6 w-6 object-contain"
              />
            )}
          </FeaturedIcon>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <h3 className="font-headline text-lg font-bold text-on-surface leading-tight">
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
                <p className="exp-role font-label text-xs uppercase tracking-widest">
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
          </div>
        </div>

        {bullets.length > 0 && (
          <ul className="exp-copy mt-4 space-y-2.5">
            {bullets.map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <span className="font-label mt-0.5 flex-shrink-0" style={{ color: accent }} aria-hidden="true">$</span>
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
  const accent = ACCENT[entry.accent] || ACCENT.brand
  const iconColor = entry.accent === 'success' ? 'success' : 'brand'
  const railLabel = entry.railKey
    ? t[entry.railKey]
    : (entry.dateKey ? t[entry.dateKey] : entry.date)

  const body = (
    <EntryBody
      entry={entry}
      t={t}
      accent={accent}
      iconColor={iconColor}
      railLabel={railLabel}
    />
  )

  return (
    <motion.li
      variants={staggerItem}
      className="exp-item"
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
    </motion.li>
  )
}

export default function ExperienceLog({ entries, labelledBy }) {
  const { t } = useLang()

  return (
    <motion.ol
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="exp-log"
      aria-labelledby={labelledBy}
    >
      {entries.map((entry) => (
        <ExperienceEntry key={entry.id} entry={entry} t={t} />
      ))}
    </motion.ol>
  )
}
