import React from 'react'

const AboutUs = () => {
    return (
        <div className='bg-blue-50 w-full h-[468px] mt-[185px]'>
            <div className='flex justify-between grid-cols-2'>
                <div className='col-span-1'>
                    <img className='w-[384px] h-[468px] ml-[205px]' src='/10.jpeg' />
                </div>

                <div className='col-span-1 ml-[200px] mt-[107px]'>
                    <h1>About Us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                    <button className='w-[132px] h-[42px] py-[3px] px-[26px] bg-[#E23744] rounded-[21px]'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs