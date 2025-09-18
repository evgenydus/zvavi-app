'use client'

import { Toast } from '@base-ui-components/react/toast'
import { XMarkIcon } from '@heroicons/react/24/solid'
import classnames from 'classnames'

const ToastList = () => {
  const { toasts } = Toast.useToastManager()

  return toasts.map((toast) => (
    <Toast.Root
      key={toast.id}
      className={classnames(
        'absolute bottom-0 left-auto mx-0 my-auto w-full',
        'select-none rounded-2xl border-l-4 border-l-hazard-1 bg-background p-4 shadow-2xl',
        "after:absolute after:left-0 after:top-full after:h-[calc(var(0.75rem)_+_1px)] after:w-full after:content-['']",
        'z-[calc(1000_-_var(--toast-index))]',
        'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        'translate-x-[var(--toast-swipe-movement-x)]',
        'translate-y-[calc(var(--toast-swipe-movement-y)_+_(min(var(--toast-index),_10)_*_-20%))]',
        'scale-[calc(max(0,_1_-_(var(--toast-index)_*_0.1)))]',
        'data-[expanded]:translate-x-[var(--toast-swipe-movement-x)]',
        'data-[expanded]:translate-y-[calc(var(--toast-offset-y)_*_-1_+_(var(--toast-index)_*_0.75rem_*_-1)_+_var(--toast-swipe-movement-y))]',
        'data-[expanded]:scale-100',
        'data-[ending-style]:translate-x-[150%] data-[starting-style]:translate-x-[150%]',
      )}
      toast={toast}
    >
      <Toast.Title className="w-full font-semibold" />
      <Toast.Description />
      <Toast.Close aria-label="Close" className="absolute right-0 top-0 p-1">
        <XMarkIcon className="size-5 fill-inherit" />
      </Toast.Close>
    </Toast.Root>
  ))
}

export default ToastList
