import classnames from 'classnames'

type InputBlockProps = {
  children: React.ReactNode
  className?: string
  label: string
  labelClassName?: string
}

const InputBlock = ({ children, className, label, labelClassName = 'w-28' }: InputBlockProps) => (
  <div className={classnames('flex items-center gap-3', className)}>
    <h4 className={classnames('flex-none font-semibold', labelClassName)}>{label}</h4>
    {children}
  </div>
)

export default InputBlock
