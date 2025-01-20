import React from 'react'
import imgaa from '../image/Cloud.png'
import imgab from '../image/bg.png'

const CloudHosting = () => {
  return (
    <div className='container mt-10 px-10 font-[Poppins]'>
      <div className="w-full h-auto lg:h-[480px]">
        <div className='grid grid-cols-1 lg:grid-cols-[65%_35%] gap-7'>
          {/* Left Section: Text + Image */}
          <div className='flex flex-col lg:flex-row bg-gradient-to-r from-white to-[#F6FBFF] rounded-md'>
            <div className='w-full lg:w-2/5 px-4'>
              <p className='text-[#6A6A6A] text-[16px]'>Web Hosting in Nepal</p>
              <h1 className='font-bold text-[24px] lg:text-[40px] leading-10 font-[Montserrat]'>
                Unleash the power of <span> Cloud Hosting </span>
              </h1>
              <p className='text-[14px] lg:text-[16px]'>
                Elevate your online business with optimized hosting solutions, ensuring fast, secure, and scalable ecommerce platforms for enduring success and continuous growth.
              </p>
              <div className='flex flex-col lg:flex-row space-y-4 lg:space-x-3 pt-10'>
                <div>
                  <button className='px-4 py-3 bg-blue-700 text-white hover:bg-slate-300'>
                    Check Plans
                  </button>
                </div>
                <button className='px-4 py-2 bg-transparent border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'>
                  Get a quotation
                </button>
              </div>
            </div>
            <div className='w-full lg:w-[520px] h-auto'>
              <img src={imgaa} alt="Cloud Hosting" className='object-cover w-full h-full' />
            </div>
          </div>

          {/* Right Section: 3-Year Plan + Background Image */}
          <div>
            <div className='grid grid-rows-[60%_40%] w-full h-[476px] gap-7'>
              <div className='bg-[#5468FF] text-white rounded-md'>
                <div className='flex flex-col items-center justify-center h-full text-center'>
                  <h1 className='text-[18px] lg:text-[20px]'>3-year purchase required.</h1>
                  <h1 className='text-[22px] lg:text-[23px] w-[60%] font-bold'>
                    Available only at Rs. 1,099 /mo
                  </h1>
                  <button className='px-5 py-3 bg-white text-black mt-4'>
                    Host Website
                  </button>
                </div>
              </div>

              <div
                className="h-full w-full bg-cover bg-center object-fit flex items-center justify-center rounded-md sm  "
                style={{ backgroundImage: `url(${imgab})` }}
              >
                <h1 className='text-[18px] lg:text-[20px] font-semibold text-white'>
                  Scale UP with Cloud Hosting
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloudHosting;
