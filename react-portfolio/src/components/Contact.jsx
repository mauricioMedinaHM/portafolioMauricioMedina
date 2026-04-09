import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, viewportOnce } from '../hooks/useScrollReveal'

const contacts = [
  {
    href: 'mailto:hh.mauri2190@gmail.com',
    label: 'Email',
    value: 'hh.mauri2190@gmail.com',
    ctaKey: 'contact_email_cta',
    icon: 'email',
  },
  {
    href: 'https://www.linkedin.com/in/mauricio-medina-dev/',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mauricio-medina-dev',
    cta: 'CONNECT →',
    icon: 'linkedin',
    external: true,
  },
  {
    href: 'https://github.com/mauricioMedinaHM',
    label: 'GitHub',
    value: 'github.com/mauricioMedinaHM',
    cta: 'VIEW_CODE →',
    icon: 'github',
    external: true,
  },
  {
    href: 'https://x.com/mauriHm_',
    label: 'X (Twitter)',
    value: 'x.com/mauriHm_',
    cta: 'FOLLOW →',
    icon: 'x',
    external: true,
  },
  {
    href: 'https://www.instagram.com/mauri.h.m/',
    label: 'Instagram',
    value: 'instagram.com/mauri.h.m',
    cta: 'FOLLOW →',
    icon: 'instagram',
    external: true,
  },
]

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#000' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="sec-title">{t.contact_title}</h2>
          <div className="divider" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
              transition={{ delay: (i + 1) * 0.1 }}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noreferrer' : undefined}
              className="card-hover border border-outline-variant/10 p-6 flex flex-col items-start gap-4 group overflow-hidden"
              style={{ background: '#131313' }}
            >
              <ContactIcon type={c.icon} />
              <div className="w-full min-w-0">
                <p className="font-label text-xs text-outline uppercase mb-1">{c.label}</p>
                <p className="font-label text-sm text-on-surface truncate">{c.value}</p>
              </div>
              <span className="font-label text-xs text-primary mt-auto">
                {c.ctaKey ? t[c.ctaKey] : c.cta}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactIcon({ type }) {
  const base = 'w-8 h-8 text-primary group-hover:text-tertiary transition-colors flex-shrink-0'
  if (type === 'email') return (
    <svg className={base} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="square" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
  if (type === 'linkedin') return (
    <svg className={base} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
  if (type === 'github') return (
    <svg className={base} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
  if (type === 'x') return (
    <img src="https://cdn.simpleicons.org/x/c19cff" className="w-8 h-8 group-hover:opacity-70 transition-opacity flex-shrink-0" alt="X (Twitter)" />
  )
  if (type === 'instagram') return (
    <img src="https://cdn.simpleicons.org/instagram/c19cff" className="w-8 h-8 group-hover:opacity-70 transition-opacity flex-shrink-0" alt="Instagram" />
  )
  return null
}
