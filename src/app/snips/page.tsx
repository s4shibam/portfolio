'use client'

import PageWrapper from '@/common/page-wrapper'
import { SNIPS_HEADER } from '@/constants/snips'
import { getRandomGradient } from '@/lib/card-hover-gradients'
import Card from '@/ui/card'
import PageHeading from '@/ui/page-heading'

const Snips = () => {
  return (
    <PageWrapper>
      <PageHeading header={SNIPS_HEADER} />

      <Card
        className="mx-auto flex max-w-xl flex-col items-center gap-6 p-6 text-center font-medium"
        hoverGradient={getRandomGradient()}
      >
        <i className="bx bx-cookie text-6xl md:text-7xl" />
        <p className="text-3xl md:text-4xl">
          Eating cookies and building Snips!
        </p>
        <p className="-mt-4 text-2xl opacity-75 md:text-3xl">
          Have patience please...
        </p>
      </Card>
    </PageWrapper>
  )
}

export default Snips
