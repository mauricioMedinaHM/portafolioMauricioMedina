import { useEffect, useRef } from 'react'

const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export function useDialog({ open, onClose, containerRef, panelRef }) {
  const lastFocusRef = useRef(null)

  useEffect(() => {
    if (!open) return

    lastFocusRef.current = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const container = containerRef.current
    const panel = panelRef?.current || container
    const root = document.getElementById('root')
    const inerted = []

    if (root && container) {
      for (const child of root.children) {
        if (child === container || child.contains(container) || container.contains(child)) continue
        child.setAttribute('inert', '')
        inerted.push(child)
      }
    }

    const id = requestAnimationFrame(() => {
      const nodes = panel?.querySelectorAll(FOCUSABLE)
      if (nodes?.length) nodes[0].focus()
      else panel?.focus()
    })

    function onKey(e) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panel) return
      const nodes = [...panel.querySelectorAll(FOCUSABLE)]
      if (!nodes.length) {
        e.preventDefault()
        panel.focus()
        return
      }
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(id)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      inerted.forEach(el => el.removeAttribute('inert'))
      lastFocusRef.current?.focus?.()
    }
  }, [open, onClose, containerRef, panelRef])
}
