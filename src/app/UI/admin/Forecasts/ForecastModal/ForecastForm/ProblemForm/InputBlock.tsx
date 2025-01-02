import classnames from 'classnames'

type InputBlockProps = {
  children: React.ReactNode
  label: string
  labelClassName?: string
}

const InputBlock = ({ children, label, labelClassName = 'w-28' }: InputBlockProps) => (
  <div className="flex flex-none items-center gap-4">
    <h4 className={classnames('font-semibold', labelClassName)}>{label}</h4>
    {children}
  </div>
)

export default InputBlock
