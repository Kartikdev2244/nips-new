import { browse } from '@/data/Browse'
import Image from 'next/image'
import React from 'react'

export const BrowseRange = () => {
  return (
    <div className='bg-white flex flex-col  gap-4 text-black  justify-center items-center'>
          <div className='flex flex-col justify-center items-center pt-8'>
            <h3 className='text-2xl font-bold '>Browse The Range</h3>
            <p className='text-black/80'>Lorem ipsum dolor sit amet consectetur</p>
          </div>

          <div className='flex gap-2 w-4/5 justify-evenly mt-5'>
            {
                browse.map((brows)=>(
                    <div key={brows.title} className='flex flex-col gap-5'>
                        <div className='overflow-hidden rounded-md'>
                            <Image src={brows.img} alt='Image' width={300} height={200} className='rounded-md cursor-pointer hover:scale-125 hover:transition-all hover:duration-200'/>
                        </div>
                        <p className='text-lg font-semibold text-center'>{brows.title}</p>
                    </div>
                ))
            }
          </div>
    </div>
  )
}