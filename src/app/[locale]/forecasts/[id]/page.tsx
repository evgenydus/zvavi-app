import { PageWrapper } from '@/UI/containers/PageWrapper'
import { ForecastContainer } from '@/UI/forecast'

const ForecastPage = async (props: { params: Promise<{ id: number }> }) => {
  const params = await props.params

  return (
    <PageWrapper>
      <ForecastContainer forecastId={params.id} />
    </PageWrapper>
  )
}

export default ForecastPage
