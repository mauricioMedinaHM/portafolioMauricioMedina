import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, staggerContainer, staggerItem, viewportOnce } from '../hooks/useScrollReveal'

const EASE_OUT = [0.23, 1, 0.32, 1]

const contacts = [
  {
    href: 'https://www.linkedin.com/in/mauricio-medina-dev/',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  {
    href: 'https://www.instagram.com/mauri.h.m/',
    label: 'Instagram',
    icon: 'instagram',
  },
  {
    href: 'https://x.com/mauriHm_',
    label: 'X',
    icon: 'x',
  },
]

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#000' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="text-center mb-16"
        >
          <h2 className="sec-title">{t.contact_title}</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex justify-center gap-10 md:gap-14"
        >
          {contacts.map((c) => (
            <motion.a
              key={c.label}
              variants={staggerItem}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.label}
              whileHover={{ scale: 1.12, y: -4 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="flex flex-col items-center gap-2 group"
              style={{ textDecoration: 'none' }}
            >
              <ContactIcon type={c.icon} />
              <span
                className="font-label text-xs uppercase tracking-widest text-on-surface-variant transition-colors group-hover:text-primary"
              >
                {c.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ContactIcon({ type }) {
  if (type === 'linkedin') return (
    <svg
      style={{ width: 28, height: 28, color: '#c19cff', transition: 'color 180ms ease, filter 180ms ease' }}
      className="group-hover:drop-shadow-[0_0_8px_rgba(193,156,255,0.6)]"
      fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
  if (type === 'instagram') return (
    <img
      src="https://cdn.simpleicons.org/instagram/c19cff"
      style={{ width: 28, height: 28, transition: 'filter 180ms ease' }}
      className="group-hover:drop-shadow-[0_0_8px_rgba(193,156,255,0.6)]"
      alt=""
    />
  )
  if (type === 'x') return (
    <img
      src="https://cdn.simpleicons.org/x/c19cff"
      style={{ width: 28, height: 28, transition: 'filter 180ms ease' }}
      className="group-hover:drop-shadow-[0_0_8px_rgba(193,156,255,0.6)]"
      alt=""
    />
  )
  return null
}
