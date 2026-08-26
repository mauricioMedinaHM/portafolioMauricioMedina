import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { useDialog } from '../../hooks/useDialog'

function triggerDownload() {
  const link = document.createElement('a')
  link.href = '/CV/Mauricio_Medina_CV.pdf'
  link.download = 'Mauricio_Medina_CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function NpmModal({ open, onClose }) {
  const { t } = useLang()
  const containerRef = useRef(null)
  const panelRef = useRef(null)
  const downloadedRef = useRef(false)
  const close = useCallback(() => onClose(), [onClose])
  useDialog({ open, onClose: close, containerRef, panelRef })

  useEffect(() => {
    if (!open) {
      downloadedRef.current = false
      return undefined
    }
    const tid = setTimeout(() => {
      if (!downloadedRef.current) {
        downloadedRef.current = true
        triggerDownload()
      }
    }, 400)
    return () => clearTimeout(tid)
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="npm-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ position: 'fixed', inset: 0, zIndex: 9998 }}
        >
          <div
            ref={containerRef}
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
            style={{ display: 'flex', position: 'absolute', inset: 0, background: 'rgba(15,15,15,.45)', backdropFilter: 'blur(10px)', alignItems: 'center', justifyContent: 'center', padding: 20 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.23, 1, 0.32, 1] } }}
              exit={{ opacity: 0, y: 6, transition: { duration: 0.18, ease: [0.77, 0, 0.175, 1] } }}
              style={{ width: 'min(420px,94vw)', background: '#fff', border: '1px solid rgb(15 15 15 / 0.12)', borderRadius: 8, boxShadow: '0 24px 60px rgb(15 15 15 / 0.18)' }}
            >
              <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="npm-title"
                tabIndex={-1}
                style={{ padding: 24 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <h2 id="npm-title" className="font-headline text-2xl text-on-surface">
                    {t.a11y_cv_modal}
                  </h2>
                  <button type="button" onClick={onClose} aria-label={t.a11y_close} style={{ background: 'none', border: 'none', color: '#575757', fontSize: 20, cursor: 'pointer', lineHeight: 1 }}>✕</button>
                </div>
                <p className="font-body text-sm text-outline mb-6">Mauricio_Medina_CV.pdf</p>
                <button
                  type="button"
                  className="btn-primary w-full"
                  onClick={() => {
                    downloadedRef.current = true
                    triggerDownload()
                  }}
                >
                  {t.a11y_download_now}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
