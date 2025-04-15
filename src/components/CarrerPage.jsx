import React from 'react';

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 flex justify-center items-center px-4 sm:px-6 py-12">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl">
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 text-center md:text-left mt-8 md:mt-0 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            <span className="block">Launch Your Career with</span>
            <span className="block text-center">Us!</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 mb-6 leading-relaxed text-center">
            <span className="block">Are you ready to make a difference?</span>
            <span className="block mt-2">
              Join our innovative team as an intern and dive into real-world projects that shape the future. We’re looking for curious, driven minds to grow with us in a supportive, dynamic environment.
            </span>
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:careers@example.com"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base lg:text-base"
            >
              Send Your Resume: azhizensolutions.com
            </a>
          </div>
          <p className=" text-center text-sm sm:text-sm lg:text-sm text-gray-500 mt-4 italic">
            Your journey to impact starts here—seize this opportunity!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;