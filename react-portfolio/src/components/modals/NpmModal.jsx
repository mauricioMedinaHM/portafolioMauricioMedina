import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { useDialog } from '../../hooks/useDialog'
import { modalPanel, overlayExit, overlayTransition } from '../../lib/motion'
import { CV_DOWNLOAD_NAME, CV_HREF } from '../../lib/cv'

function triggerDownload() {
  const link = document.createElement('a')
  link.href = CV_HREF
  link.download = CV_DOWNLOAD_NAME
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
          animate={{ opacity: 1, transition: overlayTransition }}
          exit={{ opacity: 0, transition: overlayExit }}
          style={{ position: 'fixed', inset: 0, zIndex: 9998 }}
        >
          <div
            ref={containerRef}
            className="dialog-scrim"
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
          >
            <motion.div
              className="dialog-panel"
              style={{ width: 'min(420px,94vw)' }}
              initial={modalPanel.initial}
              animate={modalPanel.animate}
              exit={modalPanel.exit}
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
                  <button type="button" className="dialog-close" onClick={onClose} aria-label={t.a11y_close}>
                    ✕
                  </button>
                </div>
                <p className="font-body text-sm text-outline mb-6">{CV_DOWNLOAD_NAME}</p>
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
