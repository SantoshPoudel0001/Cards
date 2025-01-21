


import React from "react";

import Calander from "../image/111.png";

import Bg from "../image/bg2.png";

const Workspace= () => {
  return (
    <div className=" h-auto min-h-screen  ">
      <div className="grid lg:grid-cols-2 grid-cols-1 pl-10px gap-">
        <div>
          <div className="text-black flex flex-col pt-10 px-6 lg:px-12">
          <div>
  <span
    className="inline-block bg-gradient-to-r from-[#63A3FF] via-[#FFA7A7] via-[#FFE68D] via-[#8EBCFF] via-[#68CB74] to-[#FFC9C9] text-white font-bold px-4 py-2 rounded-md"
  >
    Google Workspace
  </span>
</div>
            

            <p className="font-bold text-[32px] lg:text-[48px] font-[Montserrat] leading-tight mt-5 mb-5">
            Boost your productivity with google Workspace
            </p>
            <div>
              <ul className="list-inside list-disc">
                <li>
                Work seamlessly with your team from anywhere.

                </li>
                <li>
                Handle accounts and settings with ease.
                </li>
                <li>
                Keep your data safe with Google’s trusted protection.
                </li>
                <li>
                Get 24/7 assistance tailored for your business.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap space-x-4 mt-5">
              <button className="py-3 px-4 bg-[#1818B3] text-white">
                Contact Us
              </button>
              <button>WhatsApp Us &#8599;</button>
            </div>

           </div>
           </div>
       
        {/* Right Side */}
        <div
          className="relative bg-cover bg-center py-16 hidden lg:flex text-center w-full h-[530px] items-center justify-center text-white"
          style={{
            backgroundImage: `url(${Bg})`,
          }}
        >
          
          <div className="absolute top-[88%] left-[8%] w-[250px] h-[240px] bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2">
            <div className="w-[36.5px] h-[36.5px]  z-20 flex justify-center items-center">
              <img src={Calander} alt="Calendar Icon" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">Book appointment</h2>
              <p className="text-sm mt-2">
              Speak with our experts about your goals
              </p>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              aria-label="Schedule Consultation Call"
            >
              Schedule Now
            </button>
          </div>
          <div className="absolute top-[12%] left-[85%] w-[201px] h-[200px] bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2">
            <p>3-year purchase required. </p>
            <div className="text-center">
              <h2 className="text-[17px] font-bold">Available only at Rs. 1,099 /mo </h2>
              <p className="text-sm mt-2">

              </p>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              aria-label="Schedule Consultation Call"
            >
              Host Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
