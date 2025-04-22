import React from 'react';
import Gfglogo from '../assets/Gfglogo .png';

const CommunityPartner = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10">
       <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-black text-center mb-12 sm:mb-16 lg:mb-20 2xl:mb-24 tracking-tight">
  <span style={{ color: "#00B4D9" }}>O</span>
  <span>fficial </span>
  <span style={{ color: "#00B4D9" }}>A</span>
  <span>ffiliates</span>
</h1>

        <img
          src={Gfglogo}
          alt="Community Partner Logo"
          className="w-28 h-28 object-contain rounded-full border mb-4 mx-auto"
        />
    </div>
  );
};

export default CommunityPartner;
