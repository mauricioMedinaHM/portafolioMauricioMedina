import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import BlurText from './ui/BlurText'
import HeroCycleMark from './ui/HeroCycleMark'
import SocialLinks from './SocialLinks'

const EASE_OUT = [0.23, 1, 0.32, 1]
const TALK_URL = 'https://www.linkedin.com/in/mauricio-medina-dev/'

export default function Hero({ onOpenCv }) {
  const { t } = useLang()
  const reduced = usePrefersReducedMotion()
  const words = t.hero_cycle

  return (
    <section id="about" className="hero-section">
      <motion.div
        className="hero-grid"
        initial={reduced ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <div className="hero-intro">
          <h1 className="hero-name">
            <span className="hero-name-line">
              <BlurText
                text="Mauricio Medina"
                animateBy="letter"
                delay={0.04}
                segmentDelay={0.032}
                duration={0.42}
                blurAmount={6}
              />
            </span>
            <span className="hero-name-line">
              <HeroCycleMark words={words} />
            </span>
          </h1>
          <p className="hero-role">{t.hero_role}</p>
          <p className="hero-founder">{t.hero_founder}</p>
          <p className="hero-loc">{t.hero_block_loc}</p>
        </div>
        <img
          className="hero-portrait"
          src="/img/FOTOPERFIL.webp"
          alt="Mauricio Medina"
          width="640"
          height="640"
          decoding="async"
        />
        <div className="hero-rest">
          <p className="hero-desc">{t.hero_desc_plain}</p>
          <SocialLinks t={t} />
          <div className="hero-actions">
            <a
              href={TALK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t.hero_btn_talk}
              <span aria-hidden="true"> →</span>
            </a>
            <button type="button" className="btn-ghost" onClick={onOpenCv}>
              {t.hero_btn_cv}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
