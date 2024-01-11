import { Slider } from './slider'

export const ShowCase = () => {
    return (
        <div className='flex text-black w-full max-w-[1500px] '>
            <div className='flex flex-col gap-3 w-1/2  p-[130px] '>
                <h2 className='text-5xl font-bold'>50+ Beautiful rooms inspiration</h2>
                <p className=' text-black/80 font-semibold'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <div>
                    <button className=' bg-brown p-3 px-7 text-white'>Explore More</button>
                </div>
            </div>

            {/* slider  */}
            <div className='overflow-hidden  mt-4'>
                <Slider />
            </div>
        </div>
    )
}