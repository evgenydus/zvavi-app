import { ForecastContainer } from '@/UI/forecast'
import { PageWrapper } from '@/UI/containers/PageWrapper'

const ForecastPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params

  return (
    <PageWrapper>
      <ForecastContainer forecastId={params.id} />
    </PageWrapper>
  )
}

export default ForecastPage
