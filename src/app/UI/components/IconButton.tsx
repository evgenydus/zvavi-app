import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

type IconButtonProps = {
  icon: React.ReactNode
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const IconButton = ({ className, icon, ...linkProps }: IconButtonProps) => (
  <button
    className={`${className} items-center justify-center rounded stroke-gray-500 transition-colors hover:bg-black/[0.05] hover:stroke-gray-900`}
    type="button"
    {...linkProps}
  >
    {icon}
  </button>
)

export default IconButton
