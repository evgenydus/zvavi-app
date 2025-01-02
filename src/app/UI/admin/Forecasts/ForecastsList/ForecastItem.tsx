import { format } from 'date-fns'
import { timeFormat } from '@/business/constants'

import Column from './Column'

import type { Forecast } from '@/data/hooks'

const ForecastItem = ({ forecast }: { forecast: Forecast }) => (
  <div className="flex items-center gap-4 px-4 py-1">
    <Column>{forecast.forecaster}</Column>
    <Column>{format(forecast.createdAt, timeFormat)}</Column>
    <Column>{format(forecast.validTo, timeFormat)}</Column>
    <Column>{forecast.hazardLevel}</Column>
    <Column>{forecast.status}</Column>
  </div>
)

export default ForecastItem
