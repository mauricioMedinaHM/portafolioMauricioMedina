import { isValidElement } from 'react'
import { cx } from './cx'

const sizes = {
  sm: 'h-8 w-8 [&_svg]:h-4 [&_svg]:w-4',
  md: 'h-10 w-10 [&_svg]:h-5 [&_svg]:w-5',
  lg: 'h-12 w-12 [&_svg]:h-6 [&_svg]:w-6',
}

const colors = {
  brand: 'text-on-surface bg-[#fdda24] ring-[#fdda24]',
  success: 'text-[#00a7b5] bg-[rgba(0,167,181,0.12)] ring-[#00a7b5]/25',
  gray: 'text-on-surface-variant bg-surface-container-highest ring-outline-variant/40',
}

export function FeaturedIcon({
  size = 'md',
  color = 'brand',
  icon: Icon,
  children,
  className,
  ...props
}) {
  return (
    <div
      data-featured-icon
      className={cx(
        'relative flex shrink-0 items-center justify-center ring-1 ring-inset rounded-[4px]',
        sizes[size],
        colors[color],
        className,
      )}
      {...props}
    >
      {typeof Icon === 'function' && <Icon data-icon className="relative z-[1]" />}
      {isValidElement(Icon) && <div className="relative z-[1]">{Icon}</div>}
      {children}
    </div>
  )
}
