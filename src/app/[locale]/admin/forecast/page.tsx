'use client'

import { useEffect, useState } from 'react'
import { Forecast } from '@/UI/admin/forecast'

const ForecastPage = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div>
      <Forecast />
    </div>
  )
}

export default ForecastPage
