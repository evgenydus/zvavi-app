import classnames from 'classnames'
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import type { IconProps } from './types'

type IconButtonProps = {
  iconProps: IconProps
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const IconButton = ({ className, disabled, iconProps, ...props }: IconButtonProps) => {
  const { className: iconClassName, icon: Icon, size = 20 } = iconProps

  return (
    <button
      className={classnames(
        'items-center justify-center rounded transition-colors',
        disabled
          ? 'cursor-not-allowed stroke-gray-400'
          : 'stroke-gray-500 hover:bg-black/[0.05] hover:stroke-gray-900',
        className,
      )}
      disabled={disabled}
      type="button"
      {...props}
    >
      <Icon className={classnames('stroke-inherit', iconClassName)} size={size} />
    </button>
  )
}

export default IconButton
