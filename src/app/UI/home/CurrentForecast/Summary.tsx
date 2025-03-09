import { useTranslations } from 'next-intl'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'

const Summary = ({ summary }: { summary: string }) => {
  const t = useTranslations()

  return (
    <Disclosure as="div" className="rounded-2xl bg-black/5">
      {({ open: isOpen }) => (
        <>
          <DisclosureButton className="group flex w-full items-center justify-between p-4">
            <span className="text-sm font-medium">{t('common.labels.summary')}</span>
            <ChevronDownIcon className="size-5 transition duration-200 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <Transition
            enter="transition-all duration-200 ease-out"
            enterFrom="max-h-0 opacity-0"
            enterTo="max-h-[1000px] opacity-100"
            leave="transition-all duration-200 ease-in"
            leaveFrom="max-h-[1000px] opacity-100"
            leaveTo="max-h-0 opacity-0"
            show={isOpen}
          >
            <DisclosurePanel className="rounded-b-2xl px-4 pb-4 text-sm">{summary}</DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Summary
