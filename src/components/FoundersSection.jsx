import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

import founder1 from "../assets/founder1.png";
import founder2 from "../assets/founder2.png";
import founder3 from "../assets/founder3.png";

const founders = [
  { id: 1, name: "Founder 1", img: founder1, alt: "Founder 1 portrait" },
  { id: 2, name: "Founder 2", img: founder2, alt: "Founder 2 portrait" },
  { id: 3, name: "Founder 3", img: founder3, alt: "Founder 3 portrait" },
];

const FoundersSection = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-[400px]">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12 tracking-tight">
        <span style={{ color: "#00B4D9" }}>O</span>UR &nbsp;
        <span style={{ color: "#00B4D9" }}>F</span>OUNDER'S &nbsp;
        </h2>

        {/* Swiper for Mobile & Desktop with Infinite Loop */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.2} // Default for mobile
          breakpoints={{
            640: { slidesPerView: 2.5 }, // Tablet
            1024: { slidesPerView: 3}, // Desktop
          }}
          spaceBetween={-20}
          loop={true} // Enables infinite loop
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll effect
          coverflowEffect={{
            rotate: 0,
            stretch: -30,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="w-full pb-8"
        >
          {[...founders, ...founders].map((founder, index) => ( // Duplicating slides for a seamless loop
            <SwiperSlide
              key={index}
              className="text-center relative flex flex-col items-center justify-center"
            >
              <div className="relative w-64 h-64 md:w-115 md:h-125 mx-auto rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={founder.img}
                  alt={founder.alt}
                  className="w-full h-150 object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {founder.name}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FoundersSection;
