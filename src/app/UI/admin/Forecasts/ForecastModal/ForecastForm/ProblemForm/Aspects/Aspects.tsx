import ElevationZone from './ElevationZone'

const Aspects = () => {
  return (
    <div className="flex flex-col gap-3">
      <ElevationZone zone="highAlpine" />
      <ElevationZone zone="alpine" />
      <ElevationZone zone="subAlpine" />
    </div>
  )
}

export default Aspects
