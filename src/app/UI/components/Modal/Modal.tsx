import { useTranslations } from 'next-intl'
import classnames from 'classnames'

import { Button } from '@/UI/components/inputs'
import { CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'

type ModalProps = {
  cancelTextKey?: string
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  onSubmit: (data?: unknown) => void
  submitTextKey?: string
  title?: string
}

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  onSubmit,
  submitTextKey = 'common.actions.submit',
  cancelTextKey = 'common.actions.cancel',
}: ModalProps) => {
  const t = useTranslations()

  return (
    <Dialog as="div" className="relative z-10 focus:outline-none" onClose={onClose} open={isOpen}>
      <DialogBackdrop className="fixed inset-0 bg-black/30" transition />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-8">
          <DialogPanel
            className={classnames(
              'data-[closed]:transform-[scale(95%)] duration-300 ease-out data-[closed]:opacity-0',
              'rounded-md bg-white max-w-screen-lg',
            )}
            transition
          >
            <header className="flex h-16 items-center border-b px-6">
              {title && (
                <DialogTitle as="h3" className="flex-1 text-center text-2xl font-semibold">
                  {title}
                </DialogTitle>
              )}

              <CloseButton as="div">
                <button
                  className={classnames(
                    'ml-auto flex size-8 items-center justify-center rounded',
                    'fill-gray-500 transition-colors hover:bg-black/[0.05] hover:fill-gray-800',
                  )}
                  type="button"
                >
                  <XMarkIcon className="size-6 fill-inherit" />
                </button>
              </CloseButton>
            </header>

            <div className="p-6">{children}</div>

            <footer className="flex h-16 items-center justify-end gap-4 border-t px-6">
              <Button onClick={onClose}>{t(cancelTextKey)}</Button>
              <Button onClick={onSubmit}>{t(submitTextKey)}</Button>
            </footer>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal
