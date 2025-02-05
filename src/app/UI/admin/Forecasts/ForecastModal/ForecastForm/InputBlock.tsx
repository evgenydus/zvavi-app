import classnames from 'classnames'

type InputBlockProps = {
  children: React.ReactNode
  label: string
  labelClassName?: string
}

const InputBlock = ({ children, label, labelClassName = 'w-28' }: InputBlockProps) => (
  <div className="flex items-center gap-3">
    <h4 className={classnames('flex-none font-semibold', labelClassName)}>{label}</h4>
    {children}
  </div>
)

export default InputBlock
