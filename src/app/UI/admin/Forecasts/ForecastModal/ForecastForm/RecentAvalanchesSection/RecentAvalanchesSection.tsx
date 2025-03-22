import { useCallback, useState } from 'react'

import { initialAvalancheData } from '../constants'
import { useBoolean } from '@/UI/hooks'
import { useTranslations } from 'next-intl'

import { AvalancheForm } from './AvalancheForm'
import { AvalanchesList } from './AvalanchesList'
import { Button } from '@/UI/components/inputs'
import { PlusIcon } from '@heroicons/react/20/solid'

import type { Avalanche } from '@/business/types'

type RecentAvalanchesSectionProps = {
  avalanches: Avalanche[]
  setAvalanches: (value: React.SetStateAction<Avalanche[]>) => void
}

const RecentAvalanchesSection = ({ avalanches, setAvalanches }: RecentAvalanchesSectionProps) => {
  const tAvalanches = useTranslations('admin.forecast.form.recentAvalanches')

  const [avalancheData, setAvalancheData] = useState<Avalanche>(initialAvalancheData)
  const [isFormOpen, { setFalse: closeForm, setTrue: openForm }] = useBoolean(false)

  const handleAvalancheAdd = useCallback(() => {
    setAvalanches((prev) => [...prev, avalancheData])
    closeForm()
    setAvalancheData(initialAvalancheData)
  }, [avalancheData, closeForm, setAvalanches])

  const handleCancel = useCallback(() => {
    closeForm()
    setAvalancheData(initialAvalancheData)
  }, [closeForm])

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{tAvalanches('title')}</h3>

        <Button className="ml-auto" disabled={isFormOpen} onClick={openForm}>
          <PlusIcon className="size-5" />
          {tAvalanches('labels.addAvalanche')}
        </Button>
      </div>

      <AvalanchesList avalanches={avalanches} isAdding={isFormOpen} />

      {isFormOpen && (
        <AvalancheForm
          avalancheData={avalancheData}
          onAvalancheAdd={handleAvalancheAdd}
          onCancel={handleCancel}
          setAvalancheData={setAvalancheData}
        />
      )}
    </section>
  )
}

export default RecentAvalanchesSection
