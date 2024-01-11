import { Products } from '@/data/products'
import Image from 'next/image'

export const OurProducts = () => {
    return (
        <div className='bg-white flex flex-col gap-4 text-black  justify-center items-center pb-9 '>
            <div className='flex flex-col justify-center items-center pt-8'>
                <h3 className='text-2xl font-bold '>Our Products</h3>
            </div>

            <div className='grid grid-cols-4 gap-2 w-4/5 justify-items-center mt-5'>
            {
                Products.map((prod:any)=>(
                    <div key={prod.title} className='flex flex-col gap-5 mt-4 bg-AthensGray p-3 rounded-md cursor-pointer'>
                        <div className='rounded-md overflow-hidden'>
                            <Image src={prod.img} alt='Image' width={230} height={200} className='rounded-md
                             hover:scale-125 hover:transition-all hover:duration-200'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-semibold'>{prod.title}</p>
                            <p className='text-sm'>{prod.des}</p>
                            <p className='font-bold text-sm'>{prod.price}</p>
                        </div>
                    </div>
                ))
            }
          </div>
          <div >
            <button className='border px-8 border-brown text-brown p-2 mt-4'>Show More</button>
          </div>
        </div>
    )
}
