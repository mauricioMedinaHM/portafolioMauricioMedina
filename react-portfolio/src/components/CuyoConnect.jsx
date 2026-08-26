import { ArrowUpRight } from '@untitledui/icons'
import { useLang } from '../context/LanguageContext'

export default function CuyoConnect() {
  const { t } = useLang()

  return (
    <section id="cuyoconnect" className="scope-section ink">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/img/logoCuyoConnect.webp"
                alt=""
                style={{ width: 48, height: 48, objectFit: 'contain' }}
              />
              <h2 className="sec-title" style={{ color: '#fff' }}>CuyoConnect</h2>
            </div>
            <p className="font-body text-base leading-relaxed mb-2" style={{ color: 'rgb(255 255 255 / 0.72)' }}>
              {t.cuyo_badge} · {t.cuyo_tagline}
            </p>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'rgb(255 255 255 / 0.72)' }}>
              {t.cuyo_desc1}
            </p>
            <a
              href="https://cuyoconnect.com/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ background: '#fdda24', color: '#0f0f0f' }}
            >
              <span>{t.cuyo_cta}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="stat-num">500+</p>
              <p className="font-label text-sm mt-3" style={{ color: 'rgb(255 255 255 / 0.72)' }}>{t.cuyo_members}</p>
            </div>
            <div>
              <p className="stat-num">5</p>
              <p className="font-label text-sm mt-3" style={{ color: 'rgb(255 255 255 / 0.72)' }}>{t.cuyo_hackathons}</p>
            </div>
            <p className="col-span-2 font-headline text-xl leading-relaxed" style={{ color: '#fff' }}>
              {t.cuyo_quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
