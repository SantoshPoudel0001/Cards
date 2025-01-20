import React, { useState } from "react";

const FAQAccordion = () => {
  const faqs = [
    {
      question: "What is web hosting and how does it work?",
      answer: "Web hosting is a service that allows organizations and individuals to post a website or web page onto the Internet.",
    },
    {
      question: "Is shared hosting the right type of web hosting for my site?",
      answer: "Shared hosting is ideal for small to medium websites with moderate traffic, offering an affordable solution.",
    },
    {
      question: "What content management systems are compatible with Nest Nepal web hosting?",
      answer: "Popular CMS platforms like WordPress, Joomla, and Drupal are compatible with Nest Nepal web hosting.",
    },
    {
      question: "When do you choose shared or dedicated vCPU and RAM resources?",
      answer: "Choose shared resources for smaller websites and dedicated resources for high-traffic or resource-intensive sites.",
    },
    {
      question: "What is cPanel Hosting and what are its benefits?",
      answer: "cPanel hosting provides an intuitive control panel for managing your hosting environment, offering ease of use and powerful tools.",
    },
    {
      question: "Can I migrate my existing website to Nest Nepal’s shared web hosting?",
      answer: "Yes, website migration services are available to transfer your site seamlessly.",
    },
    {
      question: "Can I change my web hosting plan if my website grows, and I need more space?",
      answer: "Yes, you can upgrade your hosting plan anytime to accommodate your website's growing needs.",
    },
    {
      question: "How do I get the domain and SSL that’s included with my shared hosting plan?",
      answer: "The domain and SSL can be claimed during your purchase or setup process through the hosting dashboard.",
    },
    {
      question: "What is AutoSSL and how does it work?",
      answer: "AutoSSL automatically installs SSL certificates to ensure secure connections for your website.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">WordPress Hosting FAQ:</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-t-2"
          >
          
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-xl">
                {activeIndex === index ? "−" : "v"}
              </span>
            </button>

           
            {activeIndex === index && (
              <div className="px-4 py-3 bg-gray-50 text-gray-600 ">
                {faq.answer}
                
              </div>
              
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
