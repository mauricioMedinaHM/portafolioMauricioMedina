import { useLang } from '../context/LanguageContext'
import SocialLinks from './SocialLinks'

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="scope-section">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="sec-title mb-10">{t.contact_title}</h2>
        <SocialLinks t={t} className="justify-center" size={20} />
      </div>
    </section>
  )
}
