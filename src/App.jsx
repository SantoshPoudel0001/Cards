import "./App.css";
import img1 from "./image/1.png";
import img2 from "./image/2.png";
import img3 from "./image/3.png";
import imga from "./image/a.png";
import Faq from "./component/faq";
import Card from "./component/Card";
import HostingExprence from "./component/HostingExprence";
import Paragraph from "./component/paragraph";


import Hero from "./component/Hero";
import Herozoho from "./component/Herozoho";
import Workspace from "./component/Workspace";
import CloudSolution from "./component/CloudSolution";

function App() {
  return (
    <div className="">
      <div className="container w-full align-middle bg-gradient-to-r from-[#FAFDFF] to-[#F5F5FF] p-8">
        <div className="grid grid-cols-2 w-full font-[Poppins]  ">
          {/* Left side */}
          <div className="flex items-start justify-center flex-col">
            <p className="font-bold text-[13.5px]">
              Your trusted hosting partner
            </p>
            <div>
              <p className="font-bold text-6xl">
                The <span className="text-blue-600">Nest</span>
                <br></br> Standard
              </p>
            </div>
            <p className="font-bold text-[13.5px] mb-6 mt-6">
              Scale the summit of hosting excellence.
            </p>
            <button
              type="button"
              className="text-white w-[202.5px] h-[53.1px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
            >
              Contact Now
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center justify-center">
            <ul className="space-x-4 relative divide-y-[1px] gap-4 flex flex-col items-start justify-center y-3.6 p-4.5 m-4.5">
              <div>
                <li className="flex items-top font-[400] mb-2.5 mt-2.5 ml-5">
                  <img
                    src={img1}
                    alt="Bullet 1"
                    className=" mr-3 mt-1.5 w-[13.55px] h-[13.55px]"
                  />
                  <span className="text-lg　">
                    {" "}
                    Automatic Data Protection - Advanced security and regular
                    backups keep your data safe
                  </span>
                </li>
              </div>

              <div>
                <li className="flex place-items-top mb-2.5 mt-2.5">
                  <img
                    src={img2}
                    alt="Bullet 2"
                    className=" mr-3 mt-1.5 w-[13.55px] h-[13.55px]"
                  />
                  <span className="text-lg m">
                    {" "}
                    Blazing fast performance - Optimized server ensures fast
                    load times, enhancing customer experience
                  </span>
                </li>
              </div>
              <div>
                <li className="flex items-top mb-2.5 mt-2.5">
                  <img
                    src={img3}
                    alt="Bullet 3"
                    className=" mr-3 mt-1.5 w-[13.55px] h-[13.55px]"
                  />
                  <span className="text-lg">
                    {" "}
                    Optimized for High Traffic - Handle spikes in traffic
                    effortlessly without compromising performance.
                  </span>
                </li>
              </div>
              <div>
                <li className="flex items-top mb-2.5 mt-2.5">
                  <img
                    src={img1}
                    alt="Bullet 4"
                    className=" mr-3 mt-1.5 w-[13.55px] h-[13.55px]"
                  />
                  <span className="text-lg  ">
                    {" "}
                    Fast and Reliable Support - Get quick assistance from our
                    expert team whenever you need it.
                  </span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="container ">
        
  <div className="flex items-start border-t-2 border-b-2 p-4 ">
    
    {/* Left side: Text and Border */}
    <div>
      <p className="text-[20px] px-6">Trusted and</p>
      <p className="text-[20px]">recommended over</p>
      <div className="w-[3px] h-[70px] bg-black   ml-48 -mt-16"></div>
    </div>

    {/* Right side: Grid */}
    <div className="grid lg:grid-cols-4 gap-4 ml-4 sm:grid-cols-1 md:grid-cols-2 ">
      <div>
        <p className="text-xl font-boldS"> Trustpilot</p>
        <img src={imga} />
        <p>TrustScore 4.9 10,461 reviews </p>
        </div>
        
      <div> <p className="text-xl font-boldS"> Trustpilot</p><img src={imga} />
      
        <p>4,634 Reviews | 4.4/5</p></div>
      <div> <p className="text-xl font-boldS"> Trustpilot</p><img src={imga} />
        <p>TrustScore 4.9 10,461 reviews</p></div>
      <div> <p className="text-xl font-boldS"> Trustpilot</p><img src={imga} />
        <p>TrustScore 4.9 10,461 reviews</p></div>





     
     
      </div>
    

  </div>
</div>

<Faq/>
<Card/>
<HostingExprence/>
<Paragraph/>

<Hero/>
<Herozoho/>
<Workspace/>
<CloudSolution/>
    </div>
    
  );
}

export default App;
