import { CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import classnames from 'classnames'

import { IconButton } from '@/UI/components'
import { Children, ReactElement } from 'react'
import { ModalFooter } from './ModalFooter'

export type ModalProps = {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
  title?: string
}

const Modal = ({ children, className, isOpen, onClose, title }: ModalProps) => {
  const { footer, content } = Children.toArray(children).reduce(
    (sortedChildren, child: ReactElement) => {
      child.type === ModalFooter ? (sortedChildren.footer = child) : sortedChildren.content.push(child)

      return sortedChildren;
    },
    { footer: null as ReactElement, content: []}
  )

  return (
    <Dialog as="div" className="relative z-10 focus:outline-none" onClose={onClose} open={isOpen}>
      <DialogBackdrop className="fixed inset-0 bg-black/30" transition />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-8">
          <DialogPanel
            className={classnames(
              'data-[closed]:transform-[scale(95%)] duration-300 ease-out data-[closed]:opacity-0',
              'max-w-screen-lg rounded-md bg-white',
              className,
            )}
            transition
          >
            <header className="flex h-14 items-center border-b px-4 lg:h-16 lg:px-6">
              {title && (
                <DialogTitle as="h4" className="flex-1 text-xl font-semibold">
                  {title}
                </DialogTitle>
              )}
              <CloseButton as="div">
                <IconButton
                  className="ml-auto flex size-7"
                  icon={<XMarkIcon className="size-5 fill-inherit" />}
                />
              </CloseButton>
            </header>

            <div className="p-4 lg:p-6">{content}</div>
            {footer}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal
