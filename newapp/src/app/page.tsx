import { BrowseRange } from '@/components/core/HomePage/BrowseRange'
import { Gallery } from '@/components/core/HomePage/Gallery'
import { HomePage } from '@/components/core/HomePage/HomePage'
import { OurProducts } from '@/components/core/HomePage/OurProducts'
import { ShowCase } from '@/components/core/HomePage/ShowCase'

export default function Home() {
  return (
<main className="flex min-h-screen justify-center items-center w-full bg-white">
      <div className="border bg-white">
        <div className="max-w-[1600px] mx-auto">
          <HomePage />
          <BrowseRange />
          <OurProducts />
          <ShowCase />
          <Gallery />
        </div>
      </div>
    </main>
  )
}