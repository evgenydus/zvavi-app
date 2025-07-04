import { Children, isValidElement } from 'react'
import type { ReactElement } from 'react'

type ModalFooterProps = {
  children: React.ReactNode
}

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
 * */
const ModalFooter = ({ children }: ModalFooterProps) => {
  // sort children by sides
  const { leftChildren, rightChildren } = Children.toArray(children).reduce(
    (childrenSections, child) => {
      if (isValidElement(child))
        if (child.props.left) childrenSections.leftChildren.push(child)
        else childrenSections.rightChildren.push(child)

      return childrenSections
    },
    { leftChildren: [] as ReactElement[], rightChildren: [] as ReactElement[] },
  )

  return (
    <div className="flex justify-between gap-2 pt-4 lg:pt-6 ">
      <div className="flex justify-start gap-2">{leftChildren}</div>
      <div className="flex justify-end gap-2">{rightChildren}</div>
    </div>
  )
}

export default ModalFooter
