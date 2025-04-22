import React, { useState } from "react";
import { Heart, Share2, Check } from "lucide-react"; // Using Lucide React for icons
import { useNavigate } from "react-router-dom";

const JobPosting = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  const navigate=useNavigate()

  return (
    <div className="w-full h-auto bg-white flex flex-col items-center p-4">
      {/* Main card container */}
      <div className="w-full p-6 sm:p-8 lg:p-12 flex flex-col">
        {/* Mobile Top Buttons (Favorite & Share only) */}
        <div className="mb-6 lg:hidden flex justify-end items-center">
          <div className="flex gap-2">
            {/* Favorite Button */}
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className="p-2 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200 transition"
            >
              <Heart
                size={28}
                className={`transition ${
                  isFavorited ? "text-red-500 fill-red-500" : "text-gray-400"
                }`}
              />
            </button>
            {/* Share Button */}
            <button
              onClick={handleShare}
              className="p-2 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200 transition relative"
            >
              {isCopied ? (
                <Check size={28} className="text-green-500" />
              ) : (
                <Share2 size={28} className="text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Top section with text and images */}
        <div className="flex flex-col-reverse lg:flex-row mb-8 gap-6 lg:gap-10">
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Senior Product Designer 3 month Contract
              </h1>
            </div>
            <div className="space-y-5">
              {["Team", "Type", "Schedule", "Level"].map((label, idx) => (
                <div key={idx}>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-gray-800 mt-1 text-base sm:text-lg">
                    {["Design", "Remote", "Contract", "Advanced"][idx]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Images */}
          <div className="flex gap-4 sm:gap-6 w-full lg:w-[500px] mt-6 lg:mt-0">
            <div className="w-[120px] h-[160px] sm:w-[200px] sm:h-[280px] overflow-hidden rounded-lg">
              <img
                src="/product-design-process.png"
                alt="Product design process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 sm:mt-8 w-[160px] sm:w-[210px] h-[210px] sm:h-[280px] overflow-hidden rounded-lg">
              <img
                src="/design-team.png"
                alt="Design team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="space-y-10">
          {["Primary Responsibilities", "Requirements"].map((title, i) => (
            <div key={i}>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
              <ul className="list-disc pl-5 text-gray-700 leading-relaxed text-sm sm:text-base space-y-2">
                {(i === 0
                  ? [
                      "Design intuitive, user-centered interfaces for digital products, balancing aesthetics, functionality, and user experience across web and mobile platforms.",
                      "Lead the creation of wireframes, prototypes, and high-fidelity designs using tools like Figma, Sketch, or Adobe XD to communicate design intent.",
                      "Iterate on user flows, interaction models, and visual designs based on feedback and testing.",
                      "Collaborate with product managers, developers, and stakeholders to define product vision, user flows, and interaction models that align with business goals.",
                      "Conduct user research, usability testing, and feedback analysis to iterate on design and ensure they meet user needs and accessibility standards.",
                      "Establish and maintain design systems, style guides, and pattern libraries to ensure design consistency across the product.",
                    ]
                  : [
                      "5+ years of experience in product or UX design, preferably in tech or SaaS environments.",
                      "Proficiency in design tools such as Figma, Sketch, Adobe Creative Suite.",
                      "Experience designing for both mobile and web platforms.",
                      "Strong portfolio showcasing problem-solving, design systems, and clean interfaces.",
                      "Excellent communication skills and the ability to clearly articulate design decisions.",
                      "Familiarity with accessibility standards (WCAG) and responsive design best practices.",
                    ]
                ).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Desktop Apply Button */}
          <div className="hidden lg:block mt-6">
            <button className="bg-gradient-to-r from-[#0078B4] to-[#00B4D9] text-white font-semibold py-2 px-4 lg:py-3 lg:px-10 rounded-lg hover:brightness-110 transition text-base lg:text-xl w-full lg:w-[250px]" onClick={()=>navigate("/JobApplicationForm")}>
              Apply now
            </button>
          </div>

          {/* Mobile Apply Button - Fixed at the end of content */}
          <div className="lg:hidden mt-6">
            <button className="bg-gradient-to-r from-[#0078B4] to-[#00B4D9] text-white font-semibold py-2 px-4 lg:py-3 lg:px-10 rounded-lg hover:brightness-110 transition text-base lg:text-xl w-full lg:w-[250px]" onClick={()=>navigate("/JobApplicationForm")}>
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPosting;
