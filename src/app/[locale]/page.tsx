import { CurrentForecastContainer } from '@/UI/home/CurrentForecast'
import { Partners } from '@/UI/home/Partners'

const Home = () => (
  <main className="space-y-8 px-4">
    <CurrentForecastContainer />
    <Partners />
  </main>
)

export default Home
