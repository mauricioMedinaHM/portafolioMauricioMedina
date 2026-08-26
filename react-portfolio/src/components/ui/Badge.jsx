import { cx } from './cx'
import { Dot } from './Dot'

const filled = {
  gray: 'bg-[#f6f6f6] text-[#0f0f0f] ring-[#e6e6e6]',
  brand: 'bg-[#fdda24] text-[#0f0f0f] ring-[#fdda24]',
  success: 'bg-[rgba(0,167,181,0.12)] text-[#00a7b5] ring-[rgba(0,167,181,0.28)]',
  purple: 'bg-[rgba(0,167,181,0.12)] text-[#00a7b5] ring-[rgba(0,167,181,0.28)]',
}

const sizes = {
  sm: 'py-0.5 px-1.5 text-[10px]',
  md: 'py-0.5 px-2 text-xs',
}

export function Badge({
  type = 'badge-color',
  size = 'sm',
  color = 'gray',
  children,
  className,
}) {
  return (
    <span
      className={cx(
        'inline-flex size-max items-center whitespace-nowrap font-label font-medium uppercase tracking-wider ring-1 ring-inset',
        type === 'pill-color' ? 'rounded-full' : 'rounded-none',
        sizes[size],
        filled[color],
        className,
      )}
    >
      {children}
    </span>
  )
}

export function BadgeWithDot({
  type = 'badge-color',
  size = 'sm',
  color = 'gray',
  children,
  className,
}) {
  return (
    <span
      className={cx(
        'inline-flex size-max items-center gap-1 whitespace-nowrap font-label font-medium uppercase tracking-wider ring-1 ring-inset',
        type === 'pill-color' ? 'rounded-full' : 'rounded-none',
        size === 'sm' ? 'py-0.5 pl-1.5 pr-2 text-[10px]' : 'py-0.5 pl-2 pr-2.5 text-xs',
        filled[color],
        className,
      )}
    >
      <Dot size="sm" className="shrink-0" />
      {children}
    </span>
  )
}
