import { GalleryShowcAse } from "./GalleryShowcase";

export const Gallery = () => {
  return (
    <div className='text-black  flex flex-col'>
          <div className='flex flex-col justify-center items-center pt-8'>
            <h3 className='text-2xl font-bold '>Share your setup with</h3>
            <h1 className='text-4xl font-bold'>#DogindarFav</h1>
          </div>

          <div className="p-5">
             <GalleryShowcAse/>
          </div>

    </div>
  )
}