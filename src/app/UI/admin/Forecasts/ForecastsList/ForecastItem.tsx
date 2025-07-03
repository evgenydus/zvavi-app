import { TrashIcon } from '@heroicons/react/24/outline'
import classnames from 'classnames'
import { format } from 'date-fns'

import { dateFormat } from '@/business/constants'
import { useForecastDelete } from '@/data/hooks/forecasts'

import { IconButton } from '@/UI/components'
import Column from './Column'

import type { Forecast } from '@/business/types'

const ForecastItem = ({ forecast }: { forecast: Forecast }) => {
  const { error, mutateAsync: deleteForecast } = useForecastDelete()

  const handleDelete = async () => {
    try {
      await deleteForecast(forecast.id)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      console.error(error)
    }
  }

  return (
    <div className="flex items-center gap-4 px-4 py-1">
      <Column>{forecast.forecaster}</Column>
      <Column>{format(forecast.createdAt, dateFormat)}</Column>
      <Column>{format(forecast.validUntil, dateFormat)}</Column>
      <Column>{forecast.status}</Column>
      <Column className="pr-4 text-right">
        <IconButton
          className={classnames('inline-flex size-7')}
          icon={<TrashIcon className="size-5 stroke-inherit" />}
          onClick={handleDelete}
          type="button"
        >
        </IconButton>
      </Column>
    </div>
  )
}

export default ForecastItem
