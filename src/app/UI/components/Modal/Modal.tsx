import classnames from 'classnames'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'

type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  title?: string
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => (
  <Dialog as="div" className="relative z-10 focus:outline-none" onClose={onClose} open={isOpen}>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-center justify-center bg-black/30 p-8 transition">
        <DialogPanel
          className={classnames(
            'relative rounded-md bg-white p-6',
            'data-[closed]:transform-[scale(95%)] duration-300 ease-out data-[closed]:opacity-0',
          )}
          transition
        >
          <button
            className={classnames(
              'absolute right-6 top-6 flex size-8 items-center justify-center rounded',
              'fill-gray-500 transition-colors hover:bg-black/[0.05] hover:fill-gray-800',
            )}
            onClick={onClose}
            type="button"
          >
            <XMarkIcon className="size-6 fill-inherit" />
          </button>

          {title && (
            <DialogTitle as="h3" className="mb-8 text-center text-2xl font-semibold">
              {title}
            </DialogTitle>
          )}

          {children}
        </DialogPanel>
      </div>
    </div>
  </Dialog>
)

export default Modal
