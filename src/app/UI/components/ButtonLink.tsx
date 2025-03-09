import classnames from 'classnames'
import Link, { type LinkProps } from 'next/link'

type ButtonLinkProps = {
  children: React.ReactNode
} & LinkProps

const ButtonLink = ({ children, ...linkProps }: ButtonLinkProps) => (
  <Link
    className={classnames(
      'flex items-center gap-1 rounded bg-primary px-3 py-1.5 text-sm text-white transition-colors',
      'focus:outline-none data-[active]:translate-y-px data-[hover]:bg-primary/90',
      'data-[disabled]:cursor-not-allowed data-[disabled]:bg-primary/60',
      'max-w-max data-[focus]:outline-1 data-[focus]:outline-primary/40',
    )}
    {...linkProps} // eslint-disable-line react/jsx-props-no-spreading
  >
    {children}
  </Link>
)

export default ButtonLink
