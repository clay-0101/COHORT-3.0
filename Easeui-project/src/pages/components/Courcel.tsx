import React, { useCallback } from 'react'
import ComponentDemo from '../ComponentsDemo'
import CarouselOne from '@/components/Carousels/CarouselOne'
import CarouselTwo from '@/components/Carousels/CarouselTwo'
import CarouselThree from '@/components/Carousels/CaroselThree'
import useCarousel from '@/components/Carousels/CodeUsage'
import PropsTable from '@/components/Personal/PropsTable'

type Props = {}

const Courcel = (props: Props) => {
  let { carouselOneCode, carouselTwoCode, carouselThreeCode, propsData } = useCarousel()
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Carousel
        </p>

        <p className="text-lg text-gray-600">
          Showcases multiple items in a sliding, interactive view without overwhelming the screen.
        </p>
      </header>

      <div className="space-y-4">
        <ComponentDemo code={carouselOneCode}>
          <CarouselOne />
        </ComponentDemo>
        <ComponentDemo code={carouselTwoCode}>
          <CarouselTwo />
        </ComponentDemo>
        <ComponentDemo code={carouselThreeCode}>
          <CarouselThree />
        </ComponentDemo>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>

  )
}

export default Courcel