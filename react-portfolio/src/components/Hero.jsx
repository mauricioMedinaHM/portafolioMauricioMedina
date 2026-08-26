import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { EASE_OUT } from '../lib/motion'
import BlurText from './ui/BlurText'
import HeroCycleMark from './ui/HeroCycleMark'
import SocialLinks from './SocialLinks'

const TALK_URL = 'https://www.linkedin.com/in/mauricio-medina-dev/'

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.02 } },
}

const heroCopy = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE_OUT } },
}

const heroPortrait = {
  hidden: { opacity: 0, transform: 'scale(0.97)' },
  visible: { opacity: 1, transform: 'scale(1)', transition: { duration: 0.5, ease: EASE_OUT } },
}

export default function Hero() {
  const { t } = useLang()
  const reduced = usePrefersReducedMotion()
  const words = t.hero_cycle

  return (
    <section id="about" className="hero-section">
      <motion.div
        className="hero-grid"
        initial={reduced ? false : 'hidden'}
        animate="visible"
        variants={heroStagger}
      >
        <motion.div className="hero-intro" variants={reduced ? undefined : heroCopy}>
          <h1 className="hero-name">
            <span className="hero-name-line">
              <BlurText
                text="Mauricio Medina"
                animateBy="letter"
                delay={0.04}
                segmentDelay={0.028}
                duration={0.38}
                blurAmount={4}
              />
            </span>
            <span className="hero-name-line">
              <HeroCycleMark words={words} />
            </span>
          </h1>
          <p className="hero-role">{t.hero_role}</p>
          <p className="hero-founder">{t.hero_founder}</p>
          <p className="hero-loc">{t.hero_block_loc}</p>
        </motion.div>
        <motion.img
          className="hero-portrait"
          src="/img/FOTOPERFIL.webp"
          alt="Mauricio Medina"
          width="640"
          height="640"
          decoding="async"
          variants={reduced ? undefined : heroPortrait}
        />
        <motion.div className="hero-rest" variants={reduced ? undefined : heroCopy}>
          <p className="hero-desc">{t.hero_desc_plain}</p>
          <SocialLinks t={t} withCv />
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
