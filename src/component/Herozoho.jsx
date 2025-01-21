import React from "react";
import Home from "../image/bullet/Home.png";
import Calander from "../image/111.png";
import Email from "../image/bullet/Group.png";
import Power from "../image/bullet/power-up 1.png";
import Star from "../image/bullet/star.png";
import At from "../image/bullet/@.png";
import Bg from "../image/Bgiphone.png";
import phone from "../image/Iphone.png";

const Herozoho = () => {
  return (
    <div className="bg-slate-50 h-auto min-h-screen relative">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <div className="text-black flex flex-col pt-10 px-6 lg:px-12">
            <div>
              <span className="bg-gradient-to-r from-blue-200 via-yellow-200 to-blue-300 text-black p-3">
                ZOHO Mail
              </span>
            </div>

            <p className="font-bold text-[32px] lg:text-[48px] font-[Montserrat] leading-tight mt-5">
              Effortless Email Handling For Business Success
            </p>
            <div>
              <ul className="list-inside list-disc">
                <li>
                  Reliable and secure email hosting designed for businesses.
                </li>
                <li>
                  Seamlessly integrated tools and applications for better
                  productivity.
                </li>
                <li>
                  Advanced security with spam protection and email encryption.
                </li>
                <li>
                  Custom email setups tailored to fit your unique requirements.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap space-x-4 mt-5">
              <button className="py-3 px-4 bg-[#1818B3] text-white">
                Contact Us
              </button>
              <button>WhatsApp Us &#8599;</button>
            </div>

            <div className="flex flex-wrap w-full text-[11.09px] mt-8">
              {[
                {
                  text: "Email retention & e-Discovery",
                  icon: Email,
                },
                {
                  text: "Unparalleled Security & Privacy",
                  icon: Power,
                },
                {
                  text: "Simplified Migration",
                  icon: Star,
                },
                {
                  text: "Custom Domain Email Address",
                  icon: At,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-start px-2 ${
                    index !== 0 ? "border-l border-gray-300" : ""
                  }`}
                >
                  <img src={Home} alt="icon" className="w-[29px] h-[30px]" />
                  <div className="flex items-start mt-2">
                    <img
                      src={item.icon}
                      alt={`${item.text.split(" & ")[0]} icon`}
                      className="w-[12.5px] h-[12.5px] mr-1"
                    />
                    <span>{item.text.split(" & ")[0]}</span>
                  </div>
                  <div>
                    <span>{item.text.split(" & ")[1]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="relative bg-cover bg-center py-16 hidden lg:flex text-center w-[549px] h-[573px] items-center justify-center text-white"
          style={{
            backgroundImage: `url(${Bg})`,
          }}
        >
          <div className="inset-0 flex justify-center items-center">
            <img
              src={phone}
              alt="Phone display with Zoho Mail app"
              className="w-[420px] h-[573px] z-10"
            />
          </div>
          <div className="absolute top-[70%] left-[8%] w-[230px] h-[250px] bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2">
            <div className="w-[36.5px] h-[36.5px]  z-20 flex justify-center items-center">
              <img src={Calander} alt="Calendar Icon" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">Consultation Call</h2>
              <p className="text-sm mt-2">
                Schedule a consultation call with our Zoho experts
              </p>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              aria-label="Schedule Consultation Call"
            >
              Schedule Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herozoho;
