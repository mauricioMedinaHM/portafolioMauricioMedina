import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'motion/react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import Highlighter from './Highlighter'

const EASE = [0.22, 1, 0.36, 1]
const MARKER = '#ffec6b'
const LETTER_STAGGER = 0.048
const LETTER_DURATION = 0.46
const EXIT_DURATION = 0.36
const BLUR = 6
const HOLD_AFTER_MARK_MS = 2800
const MARK_DURATION = 2000
const MARK_DELAY_PAD = 220
const MARK_ITERATIONS = 3

function letterCount(word) {
  return [...word].filter((ch) => ch.trim() !== '').length
}

function enterMs(word) {
  const n = Math.max(letterCount(word), 1)
  return Math.ceil(((n - 1) * LETTER_STAGGER + LETTER_DURATION) * 1000)
}

/**
 * Palabra que entra letra a letra con blur suave, recibe el marcador,
 * y se disuelve antes de la siguiente — el ciclo del hero, más quieto que CuyoConnect.
 */
export default function HeroCycleMark({ words }) {
  const rootRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const inView = useInView(rootRef, { amount: 0.4 })
  const list = useMemo(() => (words?.length ? words : ['']), [words])
  const [index, setIndex] = useState(0)
  const word = list[index] ?? list[0] ?? ''

  useEffect(() => {
    setIndex(0)
  }, [list])

  useEffect(() => {
    if (reduced || !inView || list.length < 2) return undefined
    const cycleMs = enterMs(word) + MARK_DELAY_PAD + MARK_DURATION + HOLD_AFTER_MARK_MS
    const id = window.setTimeout(() => {
      setIndex((i) => (i + 1) % list.length)
    }, cycleMs)
    return () => window.clearTimeout(id)
  }, [reduced, inView, list, word])

  const annotationDelay = reduced ? 0 : enterMs(word) + MARK_DELAY_PAD
  let animIndex = 0

  return (
    <span ref={rootRef} className="hero-cycle" aria-live="polite">
      {list.map((w) => (
        <span key={`sizer-${w}`} className="hero-cycle-sizer" aria-hidden="true">
          {w}
        </span>
      ))}
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          className="hero-cycle-word"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_DURATION, ease: EASE }}
        >
          <Highlighter
            action="highlight"
            color={MARKER}
            strokeWidth={2.1}
            animationDuration={MARK_DURATION}
            iterations={MARK_ITERATIONS}
            padding={5}
            multiline={false}
            annotationDelayMs={annotationDelay}
          >
            {reduced
              ? word
              : [...word].map((ch, i) => {
                  if (ch.trim() === '') {
                    return <span key={`ws-${i}`}>{ch}</span>
                  }
                  const delayIndex = animIndex
                  animIndex += 1
                  return (
                    <motion.span
                      key={`${word}-${i}-${ch}`}
                      className="hero-blur-letter"
                      initial={{ filter: `blur(${BLUR}px)`, opacity: 0 }}
                      animate={{ filter: 'blur(0px)', opacity: 1 }}
                      transition={{
                        duration: LETTER_DURATION,
                        delay: delayIndex * LETTER_STAGGER,
                        ease: EASE,
                      }}
                    >
                      {ch}
                    </motion.span>
                  )
                })}
          </Highlighter>
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
