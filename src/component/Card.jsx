import React from "react";
import background from "../image/Frame.png";
import img1 from "../image/Group.png";

function App() {
  return (
    <div className="container mx-auto">
      <div
        className="w-full h-auto md:h-[477px] bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="grid md:grid-cols-[30%_70%] grid-cols-1 gap-6 p-6">
         
          <div className="flex flex-col justify-center items-start text-white space-y-4">
            <p className="text-lg md:text-xl font-semibold">
              Nepal Based VPS Hosting
            </p>
            <h1 className="text-2xl md:text-[44px] leading-8 md:leading-10 font-bold">
              Fast and Scalable VPS Hosting Powered in Nepal
            </h1>
            <p className="text-sm md:text-base">
              Effortless Scalability for Growing Enterprises: Seamlessly Expand
              Your Resources on Demand, Ensuring Unmatched Performance and
              Flexibility.
            </p>
            <div className="space-x-2">
              <button className="bg-white p-2 text-black hover:bg-slate-600 rounded">
                Get Started
              </button>
              <button className="bg-transparent p-2 text-white hover:bg-slate-300 border border-white rounded">
                Quotation
              </button>
            </div>
            <div className="flex ">
            <div className="flex items-center space-x-2 text-lg md:text-xl">
              <div className="mt-2">
                <span className="text-sm align-top">RS</span>
              </div>
              <div className="text-2xl md:text-[31px] font-bold">
                <span>1200</span>
              </div>
              <div>
                <span className="text-sm align-bottom">per annum</span>
              </div>
              </div>
            </div>
          </div>

         
          <div className="flex justify-center items-center">
            <img
              src={img1}
              alt="Full Cover Image"
              className="object-contain w-full md:w-[90%] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
