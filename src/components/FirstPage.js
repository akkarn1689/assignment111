import React from 'react';

const FirstPage = () =>{
  return (
    <>
        <div className='flex justify-between grid-cols-2 bg-pink w-full'>
            <div className='col-span-1'>
                <img className='w-[107px] h-[83px] mt-[33px] ml-[100px]' src='/1.jpeg' alt='image 1'/>
                <h1 className='w-[345px] h-[207px] mt-[111px] ml-[100px] font-source-sans-pro text-5xl font-bold text-left text-[#0E2368]'>Discover the <span className='text-[#E23744]'>Best</span> Food and Drinks</h1>
                <h1 className='w-[345px] h-[55px] mt-[26px] ml-[100px] font-open-sans text-left text-[#444957]'>Naturally made Healthcare Products for the better care & support of your body.</h1>
                <button className='w-[190px] h-[63px] mt-[41px] bg-[#E23744] rounded-[34px]'>Explore Now</button>
            </div>
            <div className='col-span-1'>
              <img className='w-[735px] h-[804px] object-cover z-10' src='/3.jpeg' />
              {/* <img className='w-[752px] h-[839px] inset-0 object-cover z-20' src='/2.jpeg' /> */}
            </div>
        </div>
    </>
  )
}

export default FirstPage