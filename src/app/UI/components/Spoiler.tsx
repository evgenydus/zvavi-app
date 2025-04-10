import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

type SpoilerProps = {
  isInitiallyOpen?: boolean
  title: string
  children: React.ReactNode
}

const Spoiler = ({ children, isInitiallyOpen, title }: SpoilerProps) => (
  <Disclosure as="div" className="rounded-2xl bg-black/5" defaultOpen={isInitiallyOpen}>
    {({ open: isOpen }) => (
      <>
        <DisclosureButton className="group flex w-full items-center justify-between p-4">
          <span className="text-sm">{title}</span>
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
          <DisclosurePanel className="rounded-b-2xl px-4 pb-4 text-sm">{children}</DisclosurePanel>
        </Transition>
      </>
    )}
  </Disclosure>
)

export default Spoiler
