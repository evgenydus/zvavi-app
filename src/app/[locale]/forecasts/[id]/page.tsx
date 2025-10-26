import { PageWrapper } from '@/UI/containers'
import { ForecastContainer } from '@/UI/forecast'

const ForecastPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params

  return (
    <PageWrapper>
      <ForecastContainer forecastId={Number(params.id)} />
    </PageWrapper>
  )
}

export default ForecastPage
