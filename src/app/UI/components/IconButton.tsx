import classnames from 'classnames'
import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

type IconButtonProps = {
  icon: React.ReactNode
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const IconButton = ({ className, disabled, icon, ...props }: IconButtonProps) => (
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
    {icon}
  </button>
)

export default IconButton
