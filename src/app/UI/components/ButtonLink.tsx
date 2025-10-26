import classnames from 'classnames'
import Link, { type LinkProps } from 'next/link'

import { Icon } from '@/UI/components/icons'

const linkClassName =
  'flex items-center gap-1 rounded bg-primary px-3 py-1.5 text-sm text-white transition-colors ' +
  'focus:outline-none data-[active]:translate-y-px data-[hover]:bg-primary/90 ' +
  'data-[disabled]:cursor-not-allowed data-[disabled]:bg-primary/60 ' +
  'max-w-max data-[focus]:outline-1 data-[focus]:outline-primary/40'

type ButtonLinkProps = {
  children: React.ReactNode
  className?: string
  isExternal?: boolean
} & (LinkProps | React.AnchorHTMLAttributes<HTMLAnchorElement>)

const ButtonLink = ({ children, className, isExternal = false, ...linkProps }: ButtonLinkProps) => {
  if (isExternal) {
    return (
      <a
        className={classnames(linkClassName, className)}
        {...(linkProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span>{children}</span>
        <Icon icon="externalLink" size="sm" />
      </a>
    )
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link className={classnames(linkClassName, className)} {...(linkProps as LinkProps)}>
      {children}
    </Link>
  )
}

export default ButtonLink
