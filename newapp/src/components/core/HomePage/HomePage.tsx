import React from 'react'

export const HomePage = () => {
    return (
        <div className='bg-white h-screen  background text-black flex justify-end items-center'>

            <div className='bg-white flex flex-col gap-2 mt-5 mr-[58px] w-4/12 p-9 rounded-md'>
                <p className='font-semibold text-sm p-1'>New Arrival</p>

                <p className='font-bold text-5xl text-brown flex flex-col p-1'>Discover Our <span>New Collection</span></p>

                <p className='p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

                <div>
                    <button className='shadow text-white bg-brown p-4 text-xs font-semibold'>BUY NOW</button>
                </div>
            </div>
        </div>
    )
}