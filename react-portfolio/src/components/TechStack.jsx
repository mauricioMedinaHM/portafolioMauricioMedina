import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, viewportOnce } from '../hooks/useScrollReveal'

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const SI = 'https://cdn.simpleicons.org'

const ROW_LTR = [
  { src: `${DI}/rust/rust-original.svg`, label: 'Rust' },
  { src: `${DI}/typescript/typescript-original.svg`, label: 'TypeScript' },
  { src: `${DI}/react/react-original.svg`, label: 'React' },
  { src: `${DI}/nextjs/nextjs-line.svg`, label: 'Next.js' },
  { src: `${DI}/nodejs/nodejs-original.svg`, label: 'Node.js' },
  { src: `${DI}/postgresql/postgresql-original.svg`, label: 'PostgreSQL' },
  { src: `${DI}/docker/docker-original.svg`, label: 'Docker' },
]

const ROW_RTL = [
  { src: `${SI}/stellar/ffffff`, label: 'Soroban' },
  { src: `${DI}/linux/linux-original.svg`, label: 'Linux' },
  { src: `${DI}/git/git-original.svg`, label: 'Git' },
  { src: `${DI}/wordpress/wordpress-plain.svg`, label: 'WordPress' },
]

function MarqueeRow({ items, reverse = false }) {
  const track = [...items, ...items]
  return (
    <div className="marquee-wrap stack-marquee-row">
      <div className={`stack-marquee-track${reverse ? ' stack-marquee-track-reverse' : ''}`}>
        {track.map((item, i) => (
          <div key={`${item.label}-${i}`} className="stack-marquee-item">
            <img src={item.src} alt={item.label} className="stack-marquee-icon" loading="lazy" />
            <span className="stack-marquee-label">{item.label}</span>
            <span className="stack-marquee-sep" aria-hidden="true">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  const { t } = useLang()

  return (
    <section id="stack" style={{ background: '#0e0e0e', overflow: 'hidden' }}>
      <div className="px-6 md:px-12 lg:px-24 pt-24 pb-12 max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4"
        >
          <h2 className="sec-title">{t.stack_title}</h2>
          <div className="divider" />
        </motion.div>
      </div>

      <div className="stack-marquee-rows">
        <MarqueeRow items={ROW_LTR} />
        <MarqueeRow items={ROW_RTL} reverse />
      </div>
    </section>
  )
}
