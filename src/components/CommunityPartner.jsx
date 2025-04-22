import React from 'react';
import Gfglogo from '../assets/Gfglogo .png';

const CommunityPartner = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-black text-center mb-8 sm:mb-12 lg:mb-16 tracking-tight">
        <span style={{ color: "#00B4D9" }}>O</span>
        <span>fficial </span>
        <span style={{ color: "#00B4D9" }}>A</span>
        <span>ffiliate's</span>
      </h1>

      <img
        src={Gfglogo}
        alt="Community Partner Logo"
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain rounded-full border mb-4"
      />
    </div>
  );
};

export default CommunityPartner;
