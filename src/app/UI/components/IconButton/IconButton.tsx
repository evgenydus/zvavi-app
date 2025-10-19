import classnames from 'classnames'
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import { containerClassesBySize, type IconButtonSize, iconSizesBySize } from './constants'

import { iconRenderers } from '@/UI/components/icons'
import type { IconProps } from '@/UI/components/icons/types'

type IconButtonProps = {
  iconProps: IconProps
  size?: IconButtonSize
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const IconButton = ({ className, disabled, iconProps, size = 'md', ...props }: IconButtonProps) => {
  const { className: iconClassName, icon } = iconProps
  const IconRenderer = iconRenderers[icon]

  return (
    <button
      className={classnames(
        'flex items-center justify-center rounded transition-colors',
        disabled
          ? 'cursor-not-allowed stroke-gray-400'
          : 'stroke-gray-500 hover:bg-black/[0.05] hover:stroke-gray-900',
        containerClassesBySize[size],
        className,
      )}
      disabled={disabled}
      type="button"
      {...props}
    >
      <IconRenderer
        className={classnames('stroke-inherit', iconClassName)}
        size={iconSizesBySize[size]}
      />
    </button>
  )
}

export default IconButton
