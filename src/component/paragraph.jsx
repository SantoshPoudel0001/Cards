import React from 'react';
import img2 from '../image/paragraph.png';
import img3 from '../image/eye.png';

const Paragraph = () => {
  return (
    <div className=" container px-4 sm:px-6 md:px-10">
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 mb-12">
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              What is WHOIS?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-justify leading-6 md:leading-7">
              WHOIS is the acronym for "who is" but is actually a protocol doing database
              queries regarding records of internet resources, such as IP addresses and
              domain names. The output of this protocol is in plain text. It was first
              described in a draft by the Internet Society, as its current version appears
              in RFC 3912. For those who wish a more direct functionality, most UNIX systems
              have a command-line utility that issues queries directly—the "whois" command.
              RWhois, or Referral WHOIS, enhances this protocol for further functionality.
              At Nest Nepal, we ensure seamless domain registration and management,
              leveraging tools like WHOIS to provide complete transparency.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={img2}
            alt="Illustration of WHOIS concept"
            className="w-full object-fill pb-4 sm:pb-6"
          />
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 mb-12">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white shadow rounded p-4 sm:p-6 md:p-8"
          >
            <div>
              <div className="flex items-center mb-4 md:mb-6">
                <img src={img3} alt="" className="w-10 sm:w-12 mr-4" />
                <h2 className="text-blue-500 text-base sm:text-lg md:text-xl font-bold">
                  Why is WHOIS Important, and Who Can Use It?
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-justify leading-5 sm:leading-6">
                WHOIS is the acronym for "who is" but is actually a protocol doing database
                queries regarding records of internet resources, such as IP addresses and
                domain names. The output of this protocol is in plain text. It was first
                described in a draft by the Internet Society, as its current version appears
                in RFC 3912. For those who wish a more direct functionality, most UNIX systems
                have a command-line utility that issues queries directly—the "whois" command.
                RWhois, or Referral WHOIS, enhances this protocol for further functionality.
                At Nest Nepal, we ensure seamless domain registration and management,
                leveraging tools like WHOIS to provide complete transparency.
              </p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white shadow rounded p-4 sm:p-6 md:p-8"
          >
            <div>
              <div className="flex items-center mb-4 md:mb-6">
                <img src={img3} alt="" className="w-10 sm:w-12 mr-4" />
                <h2 className="text-blue-500 text-base sm:text-lg md:text-xl font-bold">
                  Why is WHOIS Important, and Who Can Use It?
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-justify leading-5 sm:leading-6">
                WHOIS is the acronym for "who is" but is actually a protocol doing database
                queries regarding records of internet resources, such as IP addresses and
                domain names. The output of this protocol is in plain text. It was first
                described in a draft by the Internet Society, as its current version appears
                in RFC 3912. For those who wish a more direct functionality, most UNIX systems
                have a command-line utility that issues queries directly—the "whois" command.
                RWhois, or Referral WHOIS, enhances this protocol for further functionality.
                At Nest Nepal, we ensure seamless domain registration and management,
                leveraging tools like WHOIS to provide complete transparency.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paragraph;
