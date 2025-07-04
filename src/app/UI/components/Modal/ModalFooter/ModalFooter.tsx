import { Children, ReactElement } from 'react'

/**
 * By default, elements in the ModalFooter stick to the right.
 * To make an element stick to the left, just add 'left' property to the element.
 * Example:
 *
 * <Modal>
 *   <div> some content </div>
 *   <div> and a bit more content </div>
 *   <ModalFooter>
 *     <button left> Left button </button>
 *     <button> Right button </button>
 *     <button left> Second left button </button>
 *   </ModalFooter>
 * </Modal>
 **/
const ModalFooter = ({ children }) => {
  // sorting children by sides
  const { leftChildren, rightChildren } = Children.toArray(children).reduce(
    (childrenSections, child: ReactElement) => {
      child.props?.left ? childrenSections.leftChildren.push(child) : childrenSections.rightChildren.push(child)
      return childrenSections
    },
    { leftChildren: [], rightChildren: [] }
  )

  return (
    <div className="tpt-4 lg:pt-6 flex justify-between gap-2">
      <div className="flex justify-start gap-2">{leftChildren}</div>
      <div className="flex justify-end gap-2">{rightChildren}</div>
    </div>
  )
}

export default ModalFooter
