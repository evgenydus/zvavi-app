import { AboutUs, CurrentForecastContainer, Partners, JoinUs } from '@/UI/home'

const Home = () => (
  <main className="space-y-8 px-4">
    <CurrentForecastContainer />
    <Partners />
    <AboutUs />
    <JoinUs />
  </main>
)

export default Home
