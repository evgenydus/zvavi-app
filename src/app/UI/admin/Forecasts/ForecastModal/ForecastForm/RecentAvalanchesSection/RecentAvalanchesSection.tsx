import { useCallback, useState } from 'react'
import _uniqueId from 'lodash/uniqueId'
import { useTranslations } from 'next-intl'

import { Button } from '@/UI/components/inputs'
import { AvalancheForm } from './AvalancheForm'
import { AvalanchesList } from './AvalanchesList'
import type { FormState } from '../common'
import { initialAvalancheData } from '../constants'

import type { Avalanche } from '@/business/types'
import { PlusIcon } from '@/UI/icons'

type RecentAvalanchesSectionProps = {
  avalanches: Avalanche[]
  setAvalanches: (value: React.SetStateAction<Avalanche[]>) => void
}

const RecentAvalanchesSection = ({ avalanches, setAvalanches }: RecentAvalanchesSectionProps) => {
  const tAvalanches = useTranslations('admin.forecast.form.recentAvalanches')

  const [formState, setFormState] = useState<FormState>(null)

  const handleCreateFormOpen = useCallback(() => {
    setFormState({ mode: 'create' })
  }, [])

  const handleFormClose = useCallback(() => {
    setFormState(null)
  }, [])

  const handleSubmit = useCallback(
    (data: Avalanche) => {
      const preparedAvalanche: Avalanche = {
        id: data.id || _uniqueId('avalanche-'),
        ...data,
      }

      setAvalanches((prev) => {
        const isAvalancheExists = prev.some((a) => a.id === data.id)

        if (isAvalancheExists) {
          return prev.map((avalanche) => (avalanche.id === data.id ? preparedAvalanche : avalanche))
        }

        return [...prev, preparedAvalanche]
      })

      handleFormClose()
    },
    [setAvalanches, handleFormClose],
  )

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{tAvalanches('title')}</h3>

        <Button className="ml-auto" disabled={formState !== null} onClick={handleCreateFormOpen}>
          <PlusIcon size={20} />
          {tAvalanches('labels.addAvalanche')}
        </Button>
      </div>

      {formState?.mode === 'create' && (
        <AvalancheForm
          avalancheData={initialAvalancheData}
          onClose={handleFormClose}
          onSave={handleSubmit}
        />
      )}

      <AvalanchesList
        avalanches={avalanches}
        formState={formState}
        onDelete={setAvalanches}
        onFormClose={handleFormClose}
        onFormOpen={setFormState}
        onFormSave={handleSubmit}
      />
    </section>
  )
}

export default RecentAvalanchesSection
