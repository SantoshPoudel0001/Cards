import React from 'react';
import background1 from "../image/Frame1.png";
import image from "../image/image.png";

const HostingExperience = () => {
  return (
    <div className="container mx-auto">
     
      <div
        className="w-full h-auto md:h-[500px] bg-cover bg-center flex mt-10"
        style={{ backgroundImage: `url(${background1})` }}
      >
        <div className="grid md:grid-cols-[40%_60%] grid-cols-1 gap-32 w-full h-full">
     
     
          <div className="flex items-end justify-start">
            <img src={image} alt="WHOIS Logo" className="mb-0" />
          </div>


          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-[45px] text-white leading-tight mb-5 font-bold">
                WHOIS Lookup By Nest Nepal
              </h1>
              <p className="text-white mb-6">
                Easily check domain ownership, registration details, and more
                with Nest Nepal’s WHOIS Lookup. Get all the details you need in
                one place, without any hassles.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      
      <div className="w-full px-4 py-10 bg-gray-100">
        <div className="flex flex-col items-center">
        
          <div className="flex items-center w-full md:w-1/2 mb-6">
            <input
              type="text"
              placeholder="Enter your Name"
              className="flex-grow px-4 py-2 first-letter:rounded-l-md focus:outline-none"
            />
            <select className="px-4 py-2 ">
              <option>.com</option>
              <option>.net</option>
              <option>.org</option>
              <option>.xyz</option>
              <option>.biz</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-2  hover:bg-blue-700">
              Search
            </button>
          </div>

         </div>
         </div>
             </div>
  );
};

export default HostingExperience;
