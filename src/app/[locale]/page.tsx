import { AboutUs, CurrentForecastContainer, Partners, JoinUs } from '@/UI/home'
import { PageWrapper } from '../UI/containers/PageWrapper'

const Home = () => (
  <PageWrapper>
    <main className="space-y-8">
      <CurrentForecastContainer />
      <Partners />
      <AboutUs />
      <JoinUs />
    </main>
  </PageWrapper>
)

export default Home
