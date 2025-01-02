import Column from './Column'
import ForecastItem from './ForecastItem'
import type { Forecast } from '@/data/hooks'

const ForecastsList = ({ forecasts }: { forecasts: Forecast[] }) => (
  <div>
    <h2 className="mb-6 text-center text-3xl font-semibold">Forecasts</h2>
    <div className="w-full">
      <div className="flex w-full items-center gap-4 rounded-t bg-black/5 px-4 py-1.5">
        <Column className="font-semibold">Forecaster</Column>
        <Column className="font-semibold">Created At</Column>
        <Column className="font-semibold">Valid To</Column>
        <Column className="font-semibold">Hazard Level</Column>
        <Column className="font-semibold">Status</Column>
      </div>

      <ul className="flex flex-col">
        {forecasts.map((forecast) => (
          <li key={forecast.createdAt} className="border-b last:border-0">
            <ForecastItem forecast={forecast} />
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default ForecastsList
