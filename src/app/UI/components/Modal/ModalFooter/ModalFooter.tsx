import React, { ReactElement } from 'react'

const ModalFooter = ({ children }) => {
  const { leftChildren, rightChildren } = React.Children.toArray(children).reduce(
    (childrenSections, child: ReactElement) => {
      child.props?.left ? childrenSections.leftChildren.push(child) : childrenSections.rightChildren.push(child)
      return childrenSections
    },
    { leftChildren: [], rightChildren: [] }
  )

  return (
    <div className="pl-4 pr-4 pb-4 lg:pl-6 lg:pr-6 lg:pb-6 flex justify-between gap-2">
      <div className="flex justify-start gap-2">{leftChildren}</div>
      <div className="flex justify-end gap-2">{rightChildren}</div>
    </div>
  )
}

export default ModalFooter
