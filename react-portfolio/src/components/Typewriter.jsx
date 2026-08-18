import { useEffect, useRef } from 'react'
import { useLang } from '../context/LanguageContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function Typewriter({ clockRef }) {
  const { lang, t } = useLang()
  const reduced = usePrefersReducedMotion()
  const bodyRef = useRef(null)
  const genRef = useRef(0)

  useEffect(() => {
    const body = bodyRef.current
    if (!body) return
    body.innerHTML = ''

    const gen = ++genRef.current
    const seq = t.term_seq

    function mkRow() {
      const d = document.createElement('div')
      d.style.cssText = 'display:flex;gap:8px;margin-bottom:2px;align-items:flex-start;'
      return d
    }

    const cursorEl = document.createElement('span')
    cursorEl.className = 'cursor-blink'
    cursorEl.setAttribute('aria-hidden', 'true')
    cursorEl.style.cssText = 'display:inline-block;width:10px;height:1em;background:var(--tertiary);vertical-align:text-bottom;'

    function paintStatic() {
      seq.forEach(item => {
        if (item.type === 'space') {
          body.appendChild(document.createElement('br'))
          return
        }
        const row = mkRow()
        if (item.type === 'cmd') {
          const dollar = document.createElement('span')
          dollar.style.color = 'var(--tertiary)'
          dollar.textContent = '$'
          row.appendChild(dollar)
          const txt = document.createElement('span')
          txt.style.color = '#fff'
          txt.textContent = item.text
          row.appendChild(txt)
        } else {
          const txt = document.createElement('span')
          txt.style.color = '#adaaaa'
          txt.textContent = item.text
          if (item.id) {
            txt.id = item.id
            if (clockRef) clockRef.current = txt
          }
          row.appendChild(txt)
        }
        body.appendChild(row)
      })
      const d = mkRow()
      const s = document.createElement('span')
      s.style.color = 'var(--tertiary)'
      s.textContent = '$'
      d.appendChild(s)
      d.appendChild(cursorEl)
      body.appendChild(d)
    }

    if (reduced) {
      paintStatic()
      return
    }

    let lineIdx = 0
    let charIdx = 0
    let currentEl = null
    const timers = []

    function nextLine() {
      if (gen !== genRef.current) return
      if (lineIdx >= seq.length) {
        const d = mkRow()
        const s = document.createElement('span')
        s.style.color = 'var(--tertiary)'
        s.textContent = '$'
        d.appendChild(s)
        d.appendChild(cursorEl)
        body.appendChild(d)
        return
      }
      const item = seq[lineIdx++]
      if (item.type === 'space') {
        body.appendChild(document.createElement('br'))
        timers.push(setTimeout(nextLine, 80))
        return
      }
      const row = mkRow()
      if (item.type === 'cmd') {
        const dollar = document.createElement('span')
        dollar.style.color = 'var(--tertiary)'
        dollar.textContent = '$'
        row.appendChild(dollar)
        const txt = document.createElement('span')
        txt.style.color = '#fff'
        row.appendChild(txt)
        body.appendChild(row)
        currentEl = txt
        charIdx = 0
        typeChar(item.text, () => timers.push(setTimeout(nextLine, 180)))
      } else {
        const txt = document.createElement('span')
        txt.style.color = '#adaaaa'
        txt.textContent = item.text
        if (item.id) {
          txt.id = item.id
          if (clockRef) clockRef.current = txt
        }
        row.appendChild(txt)
        body.appendChild(row)
        timers.push(setTimeout(nextLine, 55))
      }
    }

    function typeChar(text, cb) {
      if (gen !== genRef.current) return
      if (charIdx < text.length) {
        currentEl.textContent += text[charIdx++]
        timers.push(setTimeout(() => typeChar(text, cb), 50 + Math.random() * 35))
      } else {
        cb()
      }
    }

    timers.push(setTimeout(nextLine, 300))
    return () => timers.forEach(clearTimeout)
  }, [lang, t, reduced])

  return <div ref={bodyRef} id="term-body" className="p-4 font-label text-xs leading-relaxed" style={{ background: 'transparent', maxHeight: 240, overflowY: 'auto', scrollbarWidth: 'thin' }} />
}
