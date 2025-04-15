import React, { useState } from "react";
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';

const services = [
  { id: "service1", title: "Custom Hardware Design", img: service1, description: "We deliver advanced hardware prototyping with custom PCB design. Tailored solution for embedded systems and IoT innovation." },
  { id: "service2", title: "Rapid Prototyping", img: service2, description: "Our team accelerates development with swift prototyping. From concept to functional hardware in record time." },
  { id: "service3", title: "AI/ML & Firmware Integration", img: service3, description: "We integrate AI/ML capabilities and firmware updates. Smart, adaptable systems built for the future." },
  { id: "service4", title: "Research & Development", img: service4, description: "Experts in Research and Development employ rigorous methodologies and validation processes. All solutions are developed in strict adherence to industry standards." }
];

const ServicesSection = () => {
  const [visibleContent, setVisibleContent] = useState(null);

  const toggleContent = (serviceId) => {
    setVisibleContent((prev) => (prev === serviceId ? null : serviceId));
  };

  return (
    <section className="relative bg-white w-full overflow-x-hidden">
      <div className="md:bg-[#00B4D9] md:absolute md:inset-0 md:h-full md:w-[100vw]"></div>
      <div className="relative w-full px-2 sm:px-2 lg:px-4 py-8 sm:py-12 lg:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black md:text-white text-center mb-8 sm:mb-12">
          SERVICES WE PROVIDE
        </h2>
        
        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {services.map((service) => (
            <div key={service.id} className="text-center mx-auto w-full max-w-xs">
              <div
                className="relative rounded-lg shadow-lg w-full h-56 sm:h-64 cursor-pointer overflow-hidden"
                onClick={() => toggleContent(service.id)}
              >
                <img
                  src={service.img}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black text-white text-base sm:text-lg font-semibold py-3 text-center rounded-b-lg">
                  {service.title}
                </div>
              </div>
              <div
                className={`mt-4 transition-all duration-500 ease-in-out text-center mx-auto w-full ${
                  visibleContent === service.id ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-black text-sm sm:text-base leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet and Desktop View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full mx-auto">
          {services.map((service, index) => (
            <div key={service.id} className="flex flex-col text-center">
              {index % 2 !== 0 && (
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-left">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base text-left">{service.description}</p>
                </div>
              )}
              <div className="relative rounded-lg shadow-lg w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={service.img}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  alt={service.title}
                />
              </div>
              {index % 2 === 0 && (
                <div className="mt-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-left">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base text-left">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;