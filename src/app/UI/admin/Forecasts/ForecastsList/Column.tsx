import classnames from 'classnames'

type ColumnProps = {
  children: React.ReactNode
  className?: string
}

const Column = ({ children, className }: ColumnProps) => (
  <div className={classnames('w-64', className)}>{children}</div>
)

export default Column
