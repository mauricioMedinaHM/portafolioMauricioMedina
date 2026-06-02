import { motion } from 'motion/react'
import { revealVariants, viewportOnce } from '../hooks/useScrollReveal'

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const SI = 'https://cdn.simpleicons.org'

const ITEMS = [
  { src: `${DI}/rust/rust-original.svg`,               label: 'Rust' },
  { src: `${DI}/typescript/typescript-original.svg`,   label: 'TypeScript' },
  { src: `${DI}/react/react-original.svg`,             label: 'React' },
  { src: `${DI}/nextjs/nextjs-line.svg`,               label: 'Next.js' },
  { src: `${DI}/nodejs/nodejs-original.svg`,           label: 'Node.js' },
  { src: `${DI}/postgresql/postgresql-original.svg`,   label: 'PostgreSQL' },
  { src: `${DI}/docker/docker-original.svg`,           label: 'Docker' },
  { src: `${SI}/stellar/c19cff`,                       label: 'Soroban' },
  { src: `${DI}/linux/linux-original.svg`,             label: 'Linux' },
  { src: `${DI}/wasm/wasm-original.svg`,               label: 'WebAssembly' },
  { src: `${DI}/tailwindcss/tailwindcss-original.svg`, label: 'Tailwind' },
  { src: `${SI}/vercel/ffffff`,                        label: 'Vercel' },
  { src: `${SI}/amazonaws/ff9900`,                     label: 'AWS' },
  { src: `${DI}/git/git-original.svg`,                 label: 'Git' },
  { src: `${DI}/wordpress/wordpress-plain.svg`,        label: 'WordPress' },
]

export default function TechStack() {
  return (
    <section id="stack" style={{ background: '#0e0e0e', overflow: 'hidden' }}>
      {/* Title — padded */}
      <div className="px-6 md:px-12 lg:px-24 pt-24 pb-12 max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4"
        >
          <h2 className="sec-title">SYS_ENVIRONMENT</h2>
          <div className="divider" />
        </motion.div>
      </div>

      {/* Marquee — full width */}
      <div className="marquee-wrap pb-24">
        <div className="marquee-track">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <div key={i} className="marquee-item">
              <img src={item.src} alt={item.label} className="marquee-icon" />
              <span className="marquee-label">{item.label}</span>
              <span className="marquee-sep" aria-hidden="true">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
