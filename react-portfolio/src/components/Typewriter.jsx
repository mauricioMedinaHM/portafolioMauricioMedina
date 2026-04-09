import { useEffect, useRef } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Typewriter({ clockRef }) {
  const { lang, t } = useLang()
  const bodyRef = useRef(null)
  const genRef = useRef(0)

  useEffect(() => {
    const body = bodyRef.current
    if (!body) return
    body.innerHTML = ''

    const gen = ++genRef.current
    const seq = t.term_seq
    let lineIdx = 0
    let charIdx = 0
    let currentEl = null

    const cursorEl = document.createElement('span')
    cursorEl.className = 'cursor-blink'
    cursorEl.style.cssText = 'display:inline-block;width:10px;height:1em;background:#9cff93;vertical-align:text-bottom;'

    function mkRow() {
      const d = document.createElement('div')
      d.style.cssText = 'display:flex;gap:8px;margin-bottom:2px;align-items:flex-start;'
      return d
    }

    function nextLine() {
      if (gen !== genRef.current) return
      if (lineIdx >= seq.length) {
        const d = mkRow()
        const s = document.createElement('span')
        s.style.color = '#9cff93'
        s.textContent = '$'
        d.appendChild(s)
        d.appendChild(cursorEl)
        body.appendChild(d)
        return
      }
      const item = seq[lineIdx++]
      if (item.type === 'space') {
        body.appendChild(document.createElement('br'))
        setTimeout(nextLine, 80)
        return
      }
      const row = mkRow()
      if (item.type === 'cmd') {
        const dollar = document.createElement('span')
        dollar.style.color = '#9cff93'
        dollar.textContent = '$'
        row.appendChild(dollar)
        const txt = document.createElement('span')
        txt.style.color = '#fff'
        row.appendChild(txt)
        body.appendChild(row)
        currentEl = txt
        charIdx = 0
        typeChar(item.text, () => setTimeout(nextLine, 180))
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
        setTimeout(nextLine, 55)
      }
    }

    function typeChar(text, cb) {
      if (gen !== genRef.current) return
      if (charIdx < text.length) {
        currentEl.textContent += text[charIdx++]
        setTimeout(() => typeChar(text, cb), 50 + Math.random() * 35)
      } else {
        cb()
      }
    }

    setTimeout(nextLine, 300)
  }, [lang, t])

  return <div ref={bodyRef} id="term-body" className="p-4 font-label text-xs leading-relaxed" style={{ background: 'rgba(8,8,8,.92)', maxHeight: 240, overflowY: 'auto', scrollbarWidth: 'thin' }} />
}
