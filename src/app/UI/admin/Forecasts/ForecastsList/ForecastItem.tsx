import { format } from 'date-fns'
import { dateFormat } from '@/business/constants'

import Column from './Column'

import type { Forecast } from '@/business/types'

const ForecastItem = ({ forecast }: { forecast: Forecast }) => (
  <div className="flex items-center gap-4 px-4 py-1">
    <Column>{forecast.forecaster}</Column>
    <Column>{format(forecast.createdAt, dateFormat)}</Column>
    <Column>{format(forecast.validUntil, dateFormat)}</Column>
    <Column>{forecast.status}</Column>
  </div>
)

export default ForecastItem
