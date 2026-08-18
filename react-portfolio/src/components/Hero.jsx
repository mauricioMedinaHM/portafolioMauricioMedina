import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'

const EASE_OUT = [0.23, 1, 0.32, 1]
const TALK_URL = 'https://www.linkedin.com/in/mauricio-medina-dev/'

export default function Hero({ onOpenCv }) {
  const { t } = useLang()

  return (
    <section id="about" className="hero-section px-6 md:px-12 lg:px-24">
      <motion.div
        className="hero-grid max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
      >
        <div>
          <h1 className="hero-name font-headline font-bold text-on-surface leading-none mb-4">
            <span style={{ whiteSpace: 'nowrap' }}>Mauricio</span>
            <br />
            <span style={{ color: 'var(--primary)' }}>Medina</span>
          </h1>

          <p className="font-label text-sm md:text-base text-primary mb-5">
            {t.hero_role}
          </p>

          <p className="font-body text-secondary text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            {t.hero_desc_plain}
          </p>

          <div id="hero-btns" className="flex flex-wrap gap-3">
            <a
              href={TALK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <LinkedInIcon />
              {t.hero_btn_talk}
            </a>
            <button type="button" className="btn-ghost inline-flex items-center" onClick={onOpenCv}>
              {t.hero_btn_cv}
            </button>
          </div>
        </div>

        <figure className="hero-portrait">
          <img
            src="/img/FOTOPERFIL.webp"
            alt="Mauricio Medina"
            width="1200"
            height="1804"
            fetchPriority="high"
            decoding="async"
          />
        </figure>
      </motion.div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="flex-shrink-0"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
