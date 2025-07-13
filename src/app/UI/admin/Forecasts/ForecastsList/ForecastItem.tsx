import { format } from 'date-fns'

import { dateFormat } from '@/business/constants'
import { useForecastDelete } from '@/data/hooks/forecasts'

import ActionButtons from './ActionButtons'
import Column from './Column'

import type { FullForecast } from '@/business/types'

type ForecastItemProps = {
  forecast: FullForecast
  onEdit: (forecast: FullForecast) => void
}

const ForecastItem = ({ forecast, onEdit }: ForecastItemProps) => {
  const { error, mutateAsync: deleteForecast } = useForecastDelete()

  const handleDelete = async () => {
    try {
      await deleteForecast(forecast.id)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      console.error(error)
    }
  }

  const handleEdit = () => {
    onEdit(forecast)
  }

  return (
    <div className="flex items-center gap-4 px-4 py-1">
      <Column>{forecast.forecaster}</Column>
      <Column>{format(forecast.createdAt, dateFormat)}</Column>
      <Column>{format(forecast.validUntil, dateFormat)}</Column>
      <Column>{forecast.status}</Column>
      <Column className="pr-4">
        <ActionButtons className="justify-end" onDelete={handleDelete} onEdit={handleEdit} />
      </Column>
    </div>
  )
}

export default ForecastItem
