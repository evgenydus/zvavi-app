import { ForecastContainer } from '@/UI/forecast'
import { PageWrapper } from '@/UI/containers/PageWrapper'

const ForecastPage = async (props: { params: { id: number } }) => {
  const params = await props.params

  return (
    <PageWrapper>
      <ForecastContainer forecastId={params.id} />
    </PageWrapper>
  )
}

export default ForecastPage
