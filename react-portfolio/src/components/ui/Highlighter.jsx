import { useLayoutEffect, useRef } from 'react'
import { useInView } from 'motion/react'
import { annotate } from 'rough-notation'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { cx } from './cx'

/**
 * Marcador a mano alzada (rough-notation), el mismo que usa CuyoConnect en «CONECTÁ».
 * El trazo se dibuja de izquierda a derecha; un segundo `show()` lo mata, así que
 * se ignora cualquier redibujo hasta terminar esa pasada.
 */
export default function Highlighter({
  children,
  className,
  action = 'highlight',
  color = '#ffec6b',
  strokeWidth = 2.15,
  animationDuration = 1600,
  iterations = 3,
  padding = 4,
  multiline = true,
  isView = false,
  annotationDelayMs = 0,
}) {
  const elementRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const isInView = useInView(elementRef, { once: true, margin: '-10%' })
  const shouldShow = !isView || isInView
  const duration = reduced ? 1 : animationDuration
  const passes = reduced ? 1 : iterations

  useLayoutEffect(() => {
    const element = elementRef.current
    if (!(shouldShow && element)) return undefined

    let annotation = null
    let resizeObserver = null
    let showTimeoutId = null
    let observeTimeoutId = null
    let redrawFrameId = null

    const attach = () => {
      const el = elementRef.current
      if (!el) return

      const current = annotate(el, {
        type: action,
        color,
        strokeWidth,
        animationDuration: duration,
        iterations: passes,
        padding,
        multiline,
        animate: !reduced,
      })
      annotation = current

      const rawShow = current.show.bind(current)
      const guardMs = duration + Math.max(480, passes * 140)
      let markerShowGuardStart = 0
      current.show = () => {
        const wasShowing = current.isShowing()
        const now = Date.now()
        if (
          wasShowing
          && markerShowGuardStart !== 0
          && now - markerShowGuardStart < guardMs
        ) {
          return
        }
        rawShow()
        if (!wasShowing) markerShowGuardStart = now
      }

      current.show()

      const redraw = () => {
        if (annotation !== current || redrawFrameId != null) return
        redrawFrameId = window.requestAnimationFrame(() => {
          redrawFrameId = null
          if (annotation !== current) return
          current.show()
        })
      }

      observeTimeoutId = window.setTimeout(() => {
        if (annotation !== current) return
        resizeObserver = new ResizeObserver(redraw)
        resizeObserver.observe(el)
      }, reduced ? 0 : duration + 80)
    }

    if (annotationDelayMs > 0 && !reduced) {
      showTimeoutId = window.setTimeout(attach, annotationDelayMs)
    } else {
      attach()
    }

    return () => {
      if (showTimeoutId != null) window.clearTimeout(showTimeoutId)
      if (observeTimeoutId != null) window.clearTimeout(observeTimeoutId)
      if (redrawFrameId != null) window.cancelAnimationFrame(redrawFrameId)
      annotation?.remove()
      resizeObserver?.disconnect()
    }
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    duration,
    passes,
    padding,
    multiline,
    annotationDelayMs,
    reduced,
  ])

  return (
    <span
      ref={elementRef}
      className={cx('hero-marker', className)}
    >
      {children}
    </span>
  )
}
