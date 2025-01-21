import React from 'react';
import img from '../image/Azu.png';

const CloudSolution = () => {
  return (
    <div className="pt-[-40%]">
      <div className="mx-auto py-8  pt-[-596px]">
      <div
  className="h-[804px] w-full pt-[10%] pl-10 bg-cover bg-center sm:bg-white"
  style={{
    backgroundImage: `url(${img})`,
    backgroundImage: window.innerWidth >= 640 ? `url(${img})` : 'none', // This removes the image on small screens
  }}
>
          <div>
       
            <div>
              <span
                className="inline-block bg-gradient-to-r p-2 from-[#35B8ED] to-[#5B7CFF] text-white font-bold"
              >
                Microsoft Azure
              </span>
            </div>

       
            <p className="font-bold text-[32px] lg:text-[48px] w-full sm:w-[50%] font-[Montserrat] leading-tight mt-5 mb-5">
              Secure and Scalable Cloud Solutions with Azure
            </p>


            <div>
            <p className="w-full sm:w-[40%] font-[Poppins]">
  Unlock the full potential of your business with Azure's cutting-edge cloud solutions. Scale effortlessly, integrate seamlessly, and deliver globally—all while staying ahead in a rapidly evolving digital world.
</p>

            </div>

       
            <div className="flex flex-wrap space-x-4 mt-5">
              <button className="py-3 px-4 bg-[#1818B3] text-white">
                Contact Us
              </button>
              <button>WhatsApp Us &#8599;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSolution;
