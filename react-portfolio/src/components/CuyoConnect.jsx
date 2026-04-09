import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, viewportOnce } from '../hooks/useScrollReveal'

export default function CuyoConnect() {
  const { t } = useLang()

  return (
    <section id="cuyoconnect" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#000' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="border border-primary/30 p-8 md:p-12 relative overflow-hidden"
        >
          <div className="ambient" style={{ width: 400, height: 400, background: 'rgba(75,0,130,.2)', top: -150, right: -100 }} />
          <div className="ambient" style={{ width: 200, height: 200, background: 'rgba(145,70,255,.1)', bottom: -80, left: 50 }} />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-6 border border-primary/20 font-label text-xs uppercase tracking-widest text-primary" style={{ background: 'rgba(193,156,255,.08)' }}>
                ◈ {t.cuyo_badge}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/img/logoCuyoConnect.png" alt="CuyoConnect" style={{ width: 48, height: 48, objectFit: 'contain', filter: 'brightness(1.1)' }} />
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface uppercase">CuyoConnect</h2>
              </div>
              <p className="font-label text-xs text-primary uppercase tracking-widest mb-6">{t.cuyo_tagline}</p>
              <p className="text-secondary font-body text-base leading-relaxed mb-4">{t.cuyo_desc1}</p>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8">{t.cuyo_desc2}</p>
              <a href="https://cuyoconnect.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary font-label text-sm group w-fit">
                <span>{t.cuyo_cta}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-outline-variant/10 p-6 card-hover" style={{ background: '#1a1919' }}>
                <p className="font-label text-2xl font-bold text-tertiary">500+</p>
                <p className="font-label text-xs text-outline uppercase mt-1">{t.cuyo_members}</p>
              </div>
              <div className="border border-outline-variant/10 p-6 card-hover" style={{ background: '#1a1919' }}>
                <p className="font-label text-2xl font-bold text-primary">12</p>
                <p className="font-label text-xs text-outline uppercase mt-1">{t.cuyo_hackathons}</p>
              </div>
              <div className="col-span-2 p-6" style={{ background: '#201f1f' }}>
                <p className="text-on-surface font-body text-sm italic leading-relaxed">{t.cuyo_quote}</p>
              </div>
              <div className="border border-outline-variant/10 p-4 card-hover" style={{ background: '#1a1919' }}>
                <p className="font-label text-xs text-outline uppercase">{t.cuyo_loc_label}</p>
                <p className="font-label text-sm text-on-surface mt-1">Mendoza, ARG</p>
              </div>
              <div className="border border-tertiary/20 p-4 card-hover" style={{ background: '#1a1919' }}>
                <p className="font-label text-xs text-outline uppercase">Focus</p>
                <p className="font-label text-sm text-tertiary mt-1">LATAM Web3</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
