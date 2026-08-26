import { useMemo, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { EASE_OUT as EASE } from '../../lib/motion'
import { cx } from './cx'

function isWhitespace(segment) {
  return segment.trim() === ''
}

/**
 * Revelación suave palabra a palabra o letra a letra (BlurText de CuyoConnect, más quieto).
 */
export default function BlurText({
  text,
  className,
  animateBy = 'letter',
  delay = 0,
  segmentDelay = 0.028,
  duration = 0.38,
  blurAmount = 4,
}) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px', initial: true })

  const segments = useMemo(
    () => (animateBy === 'word' ? text.split(/(\s+)/).filter(Boolean) : [...text]),
    [animateBy, text],
  )

  if (reduced) {
    return <span ref={ref} className={cx(className)}>{text}</span>
  }

  let animIndex = 0

  return (
    <span ref={ref} className={cx('hero-blur-text', className)}>
      {segments.map((segment, i) => {
        if (isWhitespace(segment)) {
          return <span key={`ws-${i}`}>{segment}</span>
        }
        const index = animIndex
        animIndex += 1
        return (
          <motion.span
            key={`${animateBy}-${i}-${segment}`}
            className={animateBy === 'word' ? 'inline-block' : 'hero-blur-letter'}
            style={{ willChange: inView ? 'filter, opacity' : undefined }}
            initial={{ filter: `blur(${blurAmount}px)`, opacity: 0 }}
            animate={
              inView
                ? { filter: 'blur(0px)', opacity: 1 }
                : { filter: `blur(${blurAmount}px)`, opacity: 0 }
            }
            transition={{
              duration,
              delay: delay + index * segmentDelay,
              ease: EASE,
            }}
          >
            {segment}
          </motion.span>
        )
      })}
    </span>
  )
}
