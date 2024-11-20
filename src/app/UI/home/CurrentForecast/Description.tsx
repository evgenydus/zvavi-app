import { useTranslations } from 'next-intl'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

const Description = ({ description }: { description: string }) => {
  const t = useTranslations()

  return (
    <Disclosure>
      <DisclosureButton className="group flex w-full items-center justify-between">
        <span className="text-sm font-medium transition-colors">{t('common.description')}</span>
        <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel className="text-sm">{description}</DisclosurePanel>
    </Disclosure>
  )
}

export default Description
