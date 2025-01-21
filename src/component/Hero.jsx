import React from "react";
import Bg from "../image/adbg11.png";
import adcard from "../image/adcard.png";



const Hero = () => {
  return (
    <div
      className="bg-cover bg-center  h-[599px] px-28  "
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="grid grid-cols-2">
        <div className="  text-white flex flex-col pt-20 px-12">
          <p className="font-semibold text-[14px] font-[Poppins]">
            Adobe for teams
          </p>
          <p className="font-bold text-[48px] font-[Montserrat] leading-tight mt-5 ">
            Migrate to Nest: Your New Digital Home Awaits!
          </p>
          <p className=" text-[16px] font-[DM Sans] mt-5 ">
            Nest Nepal is here to make your website migration process smooth,{" "}
            <br />
            hassle-free, and, best of all, completely free of charge.
          </p>

          <div className="flex space-x-10 mt-5">
            <button className="py-3 px-4 bg-white text-black ">
              Contact Us
            </button>
            <button>WhatsApp Us &#8599;</button>
            <div className="mb-8"></div>
          </div>
        </div>
        <div className="h-screen  justify-cente hidden sm:flex">
          <img
            src={adcard}
            alt=""
            className="object-cover  w-[600px] h-[499px]   mt-12  "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
