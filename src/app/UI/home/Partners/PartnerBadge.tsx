import Image from 'next/image'

import type { Partner } from '@/data/constants/partners'

const PartnerBadge = ({ partner }: { partner: Partner }) => {
  const { logo, name, url } = partner

  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <div className="flex size-24 items-center justify-center rounded-2xl bg-black/5 p-2">
        <Image alt={name} height={80} src={logo} />
      </div>
    </a>
  )
}

export default PartnerBadge
