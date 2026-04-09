import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, revealLeftVariants, viewportOnce } from '../hooks/useScrollReveal'

function TechCard({ children, className = '', style = {}, delay = 0, colSpan = 1, rowSpan = 1, expText }) {
  const gridClass = `${colSpan > 1 ? `col-span-${colSpan}` : ''} ${rowSpan > 1 ? `row-span-${rowSpan}` : ''}`
  return (
    <motion.div
      variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
      transition={{ delay }}
      className={`card-hover tech-card border border-outline-variant/10 ${gridClass} ${className}`}
      style={{ background: '#131313', ...style }}
    >
      {children}
      {expText && <div className="exp-hover"><span>{expText}</span></div>}
    </motion.div>
  )
}

export default function TechStack() {
  const { lang, t } = useLang()

  const expYear = (es, en) => lang === 'es' ? es : en

  return (
    <section id="stack" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#0e0e0e' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="sec-title">SYS_ENVIRONMENT</h2>
          <div className="divider" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Rust — large */}
          <motion.div
            variants={revealLeftVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="col-span-2 row-span-2 card-hover tech-card border border-outline-variant/10 p-8 flex flex-col justify-center"
            style={{ background: '#131313' }}
          >
            <img src="https://cdn.simpleicons.org/rust/c19cff" className="w-12 h-12 mb-4" alt="Rust" />
            <h4 className="font-label text-xl font-bold mb-2" style={{ color: '#c19cff' }}>Rust</h4>
            <p className="font-label text-xs text-outline uppercase">{t.rust_sub}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              <span className="font-label text-xs px-2 py-0.5" style={{ background: '#1a1919', color: '#9cff93', border: '1px solid rgba(156,255,147,.2)' }}>SOROBAN</span>
              <span className="font-label text-xs px-2 py-0.5" style={{ background: '#1a1919', color: '#c19cff', border: '1px solid rgba(193,156,255,.2)' }}>DEFINDEX</span>
            </div>
            <div className="exp-hover"><span>{expYear('1 año', '1 year')}</span></div>
          </motion.div>

          {/* TypeScript */}
          <TechCard delay={0.15} colSpan={2} className="p-6 flex items-center justify-between" expText={expYear('5+ años', '5+ years')}>
            <h4 className="font-label text-on-surface text-lg font-bold">TypeScript</h4>
            <img src="https://cdn.simpleicons.org/typescript/ffffff" className="w-8 h-8" alt="TypeScript" />
          </TechCard>

          {/* PostgreSQL */}
          <TechCard delay={0.2} className="p-6 flex flex-col items-center justify-center" expText={expYear('3+ años', '3+ years')}>
            <img src="https://cdn.simpleicons.org/postgresql/9cff93" className="w-8 h-8 mb-2" alt="PostgreSQL" />
            <span className="font-label text-xs text-outline">POSTGRES</span>
          </TechCard>

          {/* AWS */}
          <TechCard delay={0.25} className="p-6 flex flex-col items-center justify-center" expText={expYear('2+ años', '2+ years')}>
            <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="#c19cff" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.127a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" />
              <path d="M21.786 16.292c-2.614 1.93-6.41 2.958-9.678 2.958-4.578 0-8.706-1.692-11.822-4.506-.247-.222-.024-.527.27-.351 3.363 1.955 7.525 3.131 11.822 3.131 2.898 0 6.09-.6 9.023-1.844.439-.192.806.286.385.612z" />
              <path d="M22.866 15.052c-.335-.43-2.22-.203-3.07-.103-.256.031-.296-.192-.064-.36 1.5-1.054 3.965-.75 4.252-.398.288.36-.079 2.826-1.485 4.005-.215.183-.423.087-.327-.151.319-.79 1.031-2.565.694-2.993z" />
            </svg>
            <span className="font-label text-xs text-outline">AWS</span>
          </TechCard>

          {/* English */}
          <TechCard delay={0.3} colSpan={2} className="p-6 flex items-center gap-4 border border-primary/20" expText={expYear('Nivel B2', 'Level B2')}>
            <svg className="w-6 h-6 text-tertiary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="square" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <div>
              <p className="font-label text-sm text-on-surface">{t.english_level}</p>
              <p className="font-label text-xs text-outline uppercase">{t.english_sub}</p>
            </div>
          </TechCard>

          {/* Next.js */}
          <TechCard delay={0.35} colSpan={2} className="p-6 flex items-center gap-4" expText={expYear('3+ años', '3+ years')}>
            <img src="https://cdn.simpleicons.org/nextdotjs/ffffff" className="w-6 h-6 flex-shrink-0" alt="Next.js" />
            <div>
              <p className="font-label text-sm text-on-surface">Next.js / Tailwind</p>
              <p className="font-label text-xs text-outline uppercase">{t.nextjs_sub}</p>
            </div>
          </TechCard>

          {/* Linux */}
          <TechCard delay={0.4} className="p-6 flex flex-col items-center justify-center" expText={expYear('3 años', '3 years')}>
            <img src="https://cdn.simpleicons.org/linux/c19cff" className="w-8 h-8 mb-2" alt="Linux" />
            <span className="font-label text-xs text-outline">LINUX</span>
          </TechCard>

          {/* Soroban */}
          <TechCard delay={0.45} className="p-6 flex flex-col items-center justify-center" expText={expYear('1 año', '1 year')}>
            <img src="https://cdn.simpleicons.org/stellar/9cff93" className="w-8 h-8 mb-2" alt="Stellar/Soroban" />
            <span className="font-label text-xs text-outline">SOROBAN</span>
          </TechCard>

          {/* React */}
          <TechCard delay={0.5} colSpan={2} className="p-6 flex items-center gap-4" expText={expYear('5+ años', '5+ years')}>
            <img src="https://cdn.simpleicons.org/react/c19cff" className="w-6 h-6 flex-shrink-0" alt="React" />
            <div>
              <p className="font-label text-sm text-on-surface">React / Node.js</p>
              <p className="font-label text-xs text-outline uppercase">{t.react_sub}</p>
            </div>
          </TechCard>

          {/* Docker */}
          <TechCard delay={0.55} className="p-6 flex flex-col items-center justify-center" expText={expYear('2+ años', '2+ years')}>
            <img src="https://cdn.simpleicons.org/docker/c19cff" className="w-8 h-8 mb-2" alt="Docker" />
            <span className="font-label text-xs text-outline">DOCKER</span>
          </TechCard>

          {/* WASM */}
          <TechCard delay={0.6} className="p-6 flex flex-col items-center justify-center" expText={expYear('1 año', '1 year')}>
            <img src="https://cdn.simpleicons.org/webassembly/9cff93" className="w-8 h-8 mb-2" alt="WebAssembly" />
            <span className="font-label text-xs text-outline">WASM</span>
          </TechCard>
        </div>
      </div>
    </section>
  )
}
