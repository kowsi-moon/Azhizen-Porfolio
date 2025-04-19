import React from "react";
import ceo from '../assets/ceo.jpeg';

const Aboutus = () => {
  return (
    <div className="bg-white w-full overflow-y-auto overflow-x-hidden">
      {/* Debug Section: Confirm Mobile vs Desktop */}
      <div className="md:hidden bg-red-200 p-4 text-center">
        <p className="text-gray-800 font-bold">Mobile View (Debug)</p>
      </div>
      <div className="hidden md:block bg-blue-200 p-4 text-center">
        <p className="text-gray-800 font-bold">Desktop View (Debug)</p>
      </div>

      {/* First Page: About Our Company */}
      <div className="min-h-screen flex items-center justify-center py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[95%]">
          {/* Desktop View */}
          <div className="hidden md:flex flex-row justify-between items-center gap-8 w-full mx-auto">
            <div className="md:w-1/2">
              <p className="text-[#00B4D9] font-bold text-xl sm:text-2xl lg:text-3xl uppercase tracking-widest mb-3">
                Pioneer | Produce | Propel
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-[#00B4D9]">Azhizen</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
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
            <div className="md:w-1/2 flex justify-end">
              <img
                src="/Aboutus1.png"
                alt="About Azhizen"
                className="rounded-lg w-full max-w-sm lg:max-w-md h-auto object-cover"
                onError={() => console.error("Failed to load Aboutus1.png")}
              />
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex flex-col items-center gap-0 mt-0 mb-0">
          <div className="w-full text-center">
              <p className="text-[#00B4D9] font-bold text-lg uppercase tracking-widest mb-3">
              Pioneer | Produce | Propel
              </p>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                About Our Company
              </h1>
              <h2 className="text-2xl font-bold text-[#00B4D9] mb-4">Azhizen</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Welcome to Azhizen, where innovation meets excellence. Founded
                with a vision to revolutionize biomedical and engineering
                solutions, we are dedicated to R&D, manufacturing, and
                cutting-edge product development. Our expertise spans across
                biomedical devices, medical technology, engineering husbandry
                machines, AI/ML, edutech, and green tech.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <img
                src="/Aboutus1.png"
                alt="About Azhizen"
                className="rounded-lg max-w-[250px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Page: Our Mission */}
      <div className="min-h-screen flex items-center justify-center py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[95%]">
          {/* Desktop View */}
          <div className="hidden md:flex flex-row justify-between items-center gap-8 w-full mx-auto">
            <div className="md:w-1/2 flex justify-start">
              <div className="relative w-full max-w-sm lg:max-w-md">
                <img
                  src={ceo}
                  alt="CEO"
                  className="w-full rounded-[20px] h-80 lg:h-96 object-cover"
                />
                <div className="absolute top-15 left-28 bg-white shadow-md rounded-[10px] p-3 w-36 flex flex-col justify-center ml-60">
  <p className="text-sm text-center font-semibold text-gray-900">Mr. Bharath R</p>
  <p className="text-sm text-center font-medium text-[#00B4D9]">CEO - Azhizen</p>
</div>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-[#00B4D9] text-lg uppercase tracking-widest font-bold mb-3">
                OUR MISSION
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Solutions that stick with you{" "}
                <span className="text-[#00B4D9]">always</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                At Azhizen, we transform bold ideas into groundbreaking realities
                with creativity, integrity, and a passion for quality. We exceed
                expectations, delivering innovative biomedical, engineering, and
                tech solutions that shape a smarter, sustainable future—one
                project at a time.
              </p>
              <button className="text-white px-5 py-2.5 rounded-[68px] font-semibold text-base bg-[linear-gradient(141deg,#0078B4_3.61%,#00B4D9_95.89%)] hover:opacity-90">
                Join Our Team
              </button>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex flex-col items-center gap-0 mt-0 mb-0">
            <div className="w-full text-center">
              <p className="text-[#00B4D9] text-lg uppercase tracking-widest font-bold mb-3">
                OUR MISSION
              </p>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Solutions that stick with you{" "}
                <span className="text-[#00B4D9]">always</span>
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                At Azhizen, we transform bold ideas into groundbreaking realities
                with creativity, integrity, and a passion for quality.
              </p>
              <button className="text-white px-4 py-2 rounded-[68px] font-semibold text-sm bg-[linear-gradient(141deg,#0078B4_3.61%,#00B4D9_95.89%)] hover:opacity-90">
                Join Our Team
              </button>
            </div>
            <div className="w-full flex justify-center">
              <div className="relative w-[250px] h-56">
                <img
                 src={ceo}
                  alt="CEO"
                  className="w-full h-full rounded-[6px] object-cover"
                />
                <div className="absolute top-16 left-32 bg-white shadow-md rounded-[10px] p-2 w-24 flex flex-col justify-center ml-20">
                  <p className="text-xs font-semibold text-gray-900">
                    Mr. Bharath R
                  </p>
                  <p className="text-xs font-medium text-[#00B4D9]">
                    CEO - Azhizen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Page: Our Story */}
      <div className="min-h-screen flex items-center justify-center py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[95%]">
          {/* Desktop View */}
          <div className="hidden md:flex flex-row justify-between items-center gap-8 w-full mx-auto">
            <div className="md:w-1/2">
              <p className="text-[#00B4D9] text-lg uppercase tracking-widest font-bold mb-3">
                OUR STORY
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Roots that grow with you
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00B4D9] mb-4">
                forever
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                It began with a simple idea in 2025: Bharathkumar Ramachandran
                saw a need for innovation and collaboration in a home office,
                we’ve grown into a company that’s helped 50 clients across the
                state. Our journey is fueled by passion, grit, and a promise to
                stand by you—every step of the way.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <img
                src="/ourstory.png"
                alt="Team"
                className="rounded-[20px] w-full max-w-sm lg:max-w-md h-80 lg:h-96 object-cover"
              />
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex flex-col items-center gap-0 mt-0 mb-0">
            <div className="w-full text-center">
              <p className="text-[#00B4D9] text-lg uppercase tracking-widest font-bold mb-3">
                OUR STORY
              </p>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Roots that grow with you
              </h1>
              <h1 className="text-2xl font-bold text-[#00B4D9] mb-4">forever</h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                It began with a simple idea in 2025: Bharathkumar Ramachandran
                saw a need for innovation and collaboration in a home office,
                we’ve grown into a company that’s helped 50 clients across the
                state.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <img
                src="/ourstory.png"
                alt="Team"
                className="rounded-[20px] max-w-[250px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;