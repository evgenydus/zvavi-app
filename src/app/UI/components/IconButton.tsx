import classnames from 'classnames'
import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

type IconButtonProps = {
  icon: React.ReactNode
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const IconButton = ({ className, disabled, icon, ...props }: IconButtonProps) => (
  <button
    className={classnames(
      'items-center justify-center rounded stroke-gray-500 transition-colors hover:bg-black/[0.05] hover:stroke-gray-900',
      {
        'cursor-not-allowed opacity-50': disabled,
      },
      className,
    )}
    type="button"
    {...props}
  >
    {icon}
  </button>
)

export default IconButton
