import { useEffect, useRef, useState } from 'react'
import { T } from '../data/translations'

export default function BootScreen({ onDone }) {
  const [lines, setLines] = useState([])
  const [fading, setFading] = useState(false)
  const doneRef = useRef(false)

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'es'
    const bootLines = T[lang].boot
    let i = 0

    function next() {
      if (i >= bootLines.length) {
        setTimeout(() => {
          setFading(true)
          setTimeout(() => {
            if (!doneRef.current) { doneRef.current = true; onDone() }
          }, 600)
        }, 350)
        return
      }
      const l = bootLines[i++]
      setTimeout(() => {
        setLines(prev => [...prev, l])
        next()
      }, i === 1 ? 0 : 170)
    }
    next()
  }, [onDone])

  return (
    <div
      id="boot-overlay"
      className={fading ? 'fade-out' : ''}
      style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: '"Fira Code",monospace', fontSize: 13, color: '#c19cff', transition: 'opacity .5s ease' }}
    >
      <div style={{ maxWidth: 600, width: '90%' }}>
        {lines.map((l, idx) => (
          <p
            key={idx}
            style={{
              color: l.color || '#adaaaa',
              marginBottom: 4,
              fontWeight: l.bold ? 700 : 400,
            }}
          >
            {l.text}
          </p>
        ))}
      </div>
    </div>
  )
}
