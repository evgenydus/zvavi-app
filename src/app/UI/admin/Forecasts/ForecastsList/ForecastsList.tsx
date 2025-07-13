import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'

import { useBoolean } from '@/UI/hooks'

import { Button } from '@/UI/components/inputs'
import Column from './Column'
import ForecastItem from './ForecastItem'
import { ForecastModal } from '../ForecastModal'

import type { FullForecast } from '@/business/types'

const ForecastsList = ({ forecasts }: { forecasts: FullForecast[] }) => {
  const tAdmin = useTranslations('admin')
  const [isForecastModalOpen, { setFalse: closeModal, setTrue: openModal }] = useBoolean(false)
  const [selectedForecast, setSelectedForecast] = useState<FullForecast | undefined>()

  const handleForecastEdit = (forecast: FullForecast) => {
    setSelectedForecast(forecast)
    openModal()
  }

  const handleCloseModal = () => {
    closeModal()
    setSelectedForecast(undefined)
  }

  return (
    <>
      <Button className="my-4 ml-auto" onClick={openModal}>
        <PlusIcon className="size-5" />
        {tAdmin('forecast.createForecastButton')}
      </Button>

      <div className="w-full">
        <div className="flex w-full items-center gap-4 rounded-t bg-black/5 px-4 py-1.5">
          <Column className="font-semibold">{tAdmin('forecasts.list.columns.forecaster')}</Column>
          <Column className="font-semibold">{tAdmin('forecasts.list.columns.createdAt')}</Column>
          <Column className="font-semibold">{tAdmin('forecasts.list.columns.validUntil')}</Column>
          <Column className="font-semibold">{tAdmin('forecasts.list.columns.status')}</Column>
          <Column className="pr-4 text-right font-semibold">
            {tAdmin('forecasts.list.columns.actions')}
          </Column>
        </div>

        <ul className="flex flex-col">
          {forecasts.map((forecast) => (
            <li key={forecast.id} className="border-b last:border-0">
              <ForecastItem forecast={forecast} onEdit={handleForecastEdit} />
            </li>
          ))}
        </ul>
      </div>

      <ForecastModal
        forecast={selectedForecast}
        isOpen={isForecastModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default ForecastsList
