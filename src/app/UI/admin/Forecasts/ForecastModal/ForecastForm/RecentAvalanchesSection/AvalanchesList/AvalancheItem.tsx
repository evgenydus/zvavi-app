import type { Avalanche } from '@/business/types'

const AvalancheItem = ({ avalanche }: { avalanche: Avalanche }) => {
  return <div>{avalanche.size}</div>
}

export default AvalancheItem
