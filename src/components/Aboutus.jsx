import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-white w-full snap-y snap-mandatory overflow-y-auto overflow-x-hidden">
      {/* First Page: About Our Company */}
      <div className="min-h-screen flex items-center justify-center py-8 snap-start">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full sm:max-w-3xl lg:max-w-7xl xl:max-w-[95%]">
          {/* Desktop View */}
          <div className="hidden md:flex flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-12 w-full mx-auto">
            {/* Left Section: About Our Company Text */}
            <div className="md:w-1/2">
              <p className="text-[#00B4D9] font-bold text-xl sm:text-2xl lg:text-3xl uppercase tracking-widest mb-3">
                Pioneer | Produce | Propel
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
                About <span className="text-[#00B4D9]">Azhizen</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                Welcome to Azhizen, where innovation meets excellence. Founded
                with a vision to revolutionize biomedical and engineering
                solutions, we are dedicated to R&D, manufacturing, and
                cutting-edge product development. Our expertise spans across
                biomedical devices, medical technology, engineering husbandry
                machines, AI/ML, edutech, and green tech. Whether it’s crafting
                advanced healthcare solutions, developing automation systems, or
                offering high-quality visual and design services, we are committed
                to transforming ideas into reality.
              </p>
            </div>
            {/* Right Section: Image */}
            <div className="md:w-1/2 flex justify-end">
              <img
                src="/Aboutus1.png"
                alt="About Azhizen"
                className="rounded-lg w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-cover"
              />
            </div>
          </div>

          {/* Mobile and Tablet View */}
          <div className="md:hidden flex flex-col items-center gap-6 mt-20">
            {/* About Our Company Text */}
            <div className="w-full text-center">
              <p className="text-[#00B4D9] font-bold text-lg sm:text-xl uppercase tracking-widest mb-3">
                Economy | Efficiency | Effectiveness
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                About Our Company
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#00B4D9] mb-4">
                Azhizen
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Welcome to Azhizen, where innovation meets excellence. Founded
                with a vision to revolutionize biomedical and engineering
                solutions, we are dedicated to R&D, manufacturing, and
                cutting-edge product development. Our expertise spans across
                biomedical devices, medical technology, engineering husbandry
                machines, AI/ML, edutech, and green tech. Whether it’s crafting
                advanced healthcare solutions, developing automation systems, or
                offering high-quality visual and design services, we are committed
                to transforming ideas into reality.
              </p>
            </div>
            {/* Image */}
            <div className="w-full flex justify-center">
              <img
                src="/Aboutus1.png"
                alt="About Azhizen"
                className="rounded-lg max-w-[250px] sm:max-w-[300px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Page: Our Mission */}
      <div className="min-h-screen flex items-center justify-center py-8 snap-start">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full sm:max-w-3xl lg:max-w-7xl xl:max-w-[95%]">
          {/* Desktop View */}
          <div className="hidden md:flex flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-12 w-full mx-auto">
            {/* Left Section: Image with Grid Box */}
            <div className="md:w-1/2 flex justify-start">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
                <img
                  src="/ceo.jpeg"
                  alt="CEO"
                  className="w-full rounded-[20px] h-64 sm:h-80 lg:h-96 xl:h-[400px] object-cover"
                />
                <div className="absolute top-20 sm:top-24 lg:top-32 left-24 sm:left-28 lg:left-32 bg-white shadow-[-2px_-2px_11px_1px_rgba(0,0,0,0.25)] rounded-[10px] p-2 sm:p-3 w-32 sm:w-36 lg:w-40 flex flex-col justify-center">
                  <p className="text-xs sm:text-sm lg:text-base text-center font-semibold text-gray-900">
                    Mr. Bharath R
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-center font-medium text-[#00B4D9] font-sans">
                    CEO - Azhizen
                  </p>
                </div>
              </div>
            </div>
            {/* Right Section: Mission Text */}
            <div className="md:w-1/2">
              <p className="text-[#00B4D9] text-base sm:text-lg lg:text-xl uppercase tracking-widest font-bold mb-3">
                OUR MISSION
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
                Solutions that stick with you{" "}
                <span className="text-[#00B4D9]">always</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-6">
                At Azhizen, we transform bold ideas into groundbreaking realities
                with creativity, integrity, and a passion for quality. We exceed
                expectations, delivering innovative biomedical, engineering, and
                tech solutions that shape a smarter, sustainable future—one
                project at a time.
              </p>
              <button className="text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-[68px] font-semibold text-sm sm:text-base lg:text-lg transition backdrop-blur-[16px] bg-[linear-gradient(141deg,#0078B4_3.61%,#00B4D9_95.89%)] hover:opacity-90">
                Join Our Team
              </button>
            </div>
          </div>

          {/* Mobile and Tablet View */}
          <div className="md:hidden flex flex-col items-center gap-6">
            {/* Mission Text */}
            <div className="w-full text-center">
              <p className="text-[#00B4D9] text-lg sm:text-xl uppercase tracking-widest font-bold mb-3">
                OUR MISSION
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Solutions that stick with you{" "}
                <span className="text-[#00B4D9]">always</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                At Azhizen, we transform bold ideas into groundbreaking realities
                with creativity, integrity, and a passion for quality. We exceed
                expectations, delivering innovative biomedical, engineering, and
                tech solutions that shape a smarter, sustainable future—one
                project at a time.
              </p>
              <button className="text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-[68px] font-semibold text-sm sm:text-base transition backdrop-blur-[16px] bg-[linear-gradient(141deg,#0078B4_3.61%,#00B4D9_95.89%)] hover:opacity-90">
                Join Our Team
              </button>
            </div>
            {/* Image with Grid Box */}
            <div className="w-full flex justify-center">
              <div className="relative w-[250px] sm:w-[300px] h-48 sm:h-56">
                <img
                  src="/ceo.jpeg"
                  alt="CEO"
                  className="w-full h-full rounded-[6px] object-cover"
                />
                <div className="absolute top-12 sm:top-16 left-32 sm:left-40 bg-white shadow-[-2px_-2px_11px_1px_rgba(0,0,0,0.25)] rounded-[10px] p-2 w-24 sm:w-28 flex flex-col justify-center">
                  <p className="text-xs sm:text-sm font-semibold text-gray-900">
                    Mr. Bharath R
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-[#00B4D9] font-sans">
                    CEO - Azhizen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Page: Our Story */}
      <div className="min-h-screen flex items-center justify-center py-8 snap-start">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full sm:max-w-3xl lg:max-w-7xl xl:max-w-[95%]">
          {/* Desktop View */}
          <div className="hidden md:flex flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-12 w-full mx-auto">
            {/* Left Section: Story Text */}
            <div className="md:w-1/2">
              <p className="text-[#00B4D9] text-base sm:text-lg lg:text-xl uppercase tracking-widest font-bold mb-3">
                OUR STORY
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
                Roots that grow with you
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#00B4D9] mb-4">
                forever
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                It began with a simple idea in 2025: Bharathkumar Ramachandran
                saw a need for innovation and collaboration in a home office,
                we’ve grown into a company that’s helped 50 clients across the
                state. Our journey is fueled by passion, grit, and a promise to
                stand by you—every step of the way.
              </p>
            </div>
            {/* Right Section: Image */}
            <div className="md:w-1/2 flex justify-end">
              <img
                src="/ourstory.png"
                alt="Team"
                className="rounded-[20px] w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg h-64 sm:h-80 lg:h-96 xl:h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Mobile and Tablet View */}
          <div className="md:hidden flex flex-col items-center gap-6">
            {/* Story Text */}
            <div className="w-full text-center">
              <p className="text-[#00B4D9] text-lg sm:text-xl uppercase tracking-widest font-bold mb-3">
                OUR STORY
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Roots that grow with you
              </h1>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#00B4D9] mb-4">
                forever
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                It began with a simple idea in 2025: Bharathkumar Ramachandran
                saw a need for innovation and collaboration in a home office,
                we’ve grown into a company that’s helped 50 clients across the
                state. Our journey is fueled by passion, grit, and a promise to
                stand by you—every step of the way.
              </p>
            </div>
            {/* Image */}
            <div className="w-full flex justify-center">
              <img
                src="/ourstory.png"
                alt="Team"
                className="rounded-[20px] max-w-[250px] sm:max-w-[300px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;