import { useLang } from '../context/LanguageContext'

const STACK = [
  { src: '/img/stack/rust.svg', label: 'Rust' },
  { src: '/img/stack/typescript.svg', label: 'TypeScript' },
  { src: '/img/stack/react.svg', label: 'React' },
  { src: '/img/stack/nextdotjs.svg', label: 'Next.js' },
  { src: '/img/stack/nodedotjs.svg', label: 'Node.js' },
  { src: '/img/stack/postgresql.svg', label: 'PostgreSQL' },
  { src: '/img/stack/docker.svg', label: 'Docker' },
  { src: '/img/stack/stellar.svg', label: 'Soroban' },
  { src: '/img/stack/linux.svg', label: 'Linux' },
  { src: '/img/stack/git.svg', label: 'Git' },
  { src: '/img/stack/wordpress.svg', label: 'WordPress' },
]

export default function TechStack() {
  const { t } = useLang()
  const track = [...STACK, ...STACK]

  return (
    <section id="stack" className="scope-section" style={{ overflow: 'hidden' }}>
      <h2 className="sr-only">{t.stack_title}</h2>
      <div className="marquee-wrap stack-marquee-row">
        <div className="stack-marquee-track">
          {track.map((item, i) => (
            <div key={`${item.label}-${i}`} className="stack-marquee-item">
              <img src={item.src} alt={item.label} className="stack-marquee-icon" loading="lazy" />
              <span className="stack-marquee-label">{item.label}</span>
              <span className="stack-marquee-sep" aria-hidden="true">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
