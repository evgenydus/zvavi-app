import { useTranslations } from 'next-intl'
import { useBoolean } from '@/UI/hooks'

import { Button } from '@/UI/components/inputs'
import { ForecastModal } from '../ForecastModal'
import { PlusIcon } from '@heroicons/react/20/solid'
import Column from './Column'
import ForecastItem from './ForecastItem'

import type { Forecast } from '@/business/types'

const ForecastsList = ({ forecasts }: { forecasts: Forecast[] }) => {
  const tAdmin = useTranslations('admin')
  const [isModalOpen, { setFalse: closeModal, setTrue: openModal }] = useBoolean(false)

  return (
    <>
      <Button className="my-4 ml-auto" onClick={openModal}>
        <PlusIcon className="size-5" />
        {tAdmin('forecast.title')}
      </Button>

      <div className="w-full">
        <div className="flex w-full items-center gap-4 rounded-t bg-black/5 px-4 py-1.5">
          <Column className="font-semibold">{tAdmin('forecasts.list.columns.forecaster')}</Column>
          <Column className="font-semibold">{tAdmin('forecasts.list.columns.createdAt')}</Column>
          <Column className="font-semibold">{tAdmin('forecasts.list.columns.validUntil')}</Column>
          <Column className="font-semibold">{tAdmin('forecasts.list.columns.status')}</Column>
        </div>

        <ul className="flex flex-col">
          {forecasts.map((forecast) => (
            <li key={forecast.id} className="border-b last:border-0">
              <ForecastItem forecast={forecast} />
            </li>
          ))}
        </ul>
      </div>

      <ForecastModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default ForecastsList
