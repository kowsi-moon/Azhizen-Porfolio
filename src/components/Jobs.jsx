import React, { useState } from "react";
import JobApplicationForm from "./JobPosting"; // Update path as necessary

const Jobs = () => {
  const jobListings = [
    {
      title: "Senior Product Designer",
      category: "Design",
      level: "Advanced level",
      type: "Remote",
    },
    {
      title: "Senior Product Designer",
      category: "Design",
      level: "Advanced level",
      type: "Remote",
    },
    {
      title: "Senior Product Designer",
      category: "Design",
      level: "Advanced level",
      type: "Remote",
    },
    {
      title: "Senior Product Designer",
      category: "Design",
      level: "Advanced level",
      type: "Remote",
    },
  ];

  const [favorites, setFavorites] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const toggleFavorite = (index) => {
    if (favorites.includes(index)) {
      setFavorites(favorites.filter((favIndex) => favIndex !== index));
    } else {
      setFavorites([...favorites, index]);
    }
  };

  const openJobPopup = (job) => {
    setSelectedJob(job);
  };

  const closeJobPopup = () => {
    setSelectedJob(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="hidden md:block text-black text-center text-[50px] font-poppins font-bold uppercase mb-6">JOBS</h1>

      {/* Desktop Filters */}
      <div className="hidden md:flex justify-center items-center mb-8">
        <div className="p-[80px_70px] w-[1000px] flex flex-col items-center rounded-[10px] bg-white">
          <div className="flex justify-center items-center gap-[30px] rounded-[10px] bg-white p-4">
            <select className="p-2 rounded border border-gray-300 w-full md:w-40">
              <option>Experience level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <select className="p-2 rounded border border-gray-300 w-full md:w-40">
              <option>Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
            <select className="p-2 rounded border border-gray-300 w-full md:w-40">
              <option>Categories</option>
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
            </select>
            <button className="bg-gradient-to-r from-[#0078B4] to-[#00B4D9] text-white p-2 rounded w-full">
  Find Jobs
</button>

          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden flex flex-col items-center gap-5 mb-8">
        <select className="p-2 rounded border-2 border-blue-500 bg-white w-full focus:border-blue-500 focus:outline-none">
          <option>Experience level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <select className="p-2 rounded border-2 border-blue-500 bg-white w-full focus:border-blue-500 focus:outline-none">
          <option>Type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
        </select>
        <select className="p-2 rounded border-2 border-blue-500 bg-white w-full focus:border-blue-500 focus:outline-none">
          <option>Categories</option>
          <option>Design</option>
          <option>Development</option>
          <option>Marketing</option>
        </select>
        <button className="bg-gradient-to-r from-[#0078B4] to-[#00B4D9] text-white p-2 rounded w-full">
  Find Jobs
</button>

      </div>

      <div className="flex justify-center items-center mt-8">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="text-center mb-4 text-lg font-semibold">08 Live Results</div>

          {jobListings.map((job, index) => (
            <button
              key={index}
              onClick={() => openJobPopup(job)}
              className="bg-white text-black rounded-lg p-6 w-full max-w-[350px] md:max-w-[1000px] flex justify-between items-start shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0px_0px_15px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
              <div className="flex flex-col">
                <h2 className="text-black font-poppins text-[25px] md:text-[35px] font-medium mb-4">
                  {job.title}
                </h2>
                <div className="text-left flex flex-col">
                  <p className="text-black font-poppins text-[16px] md:text-[18px] font-medium self-stretch">
                    {job.category}
                  </p>
                  <p className="text-black font-poppins text-[16px] md:text-[18px] font-medium self-stretch">
                    {job.level}, {job.type}
                  </p>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(index);
                }}
                className="w-10 h-10 flex-shrink-0 focus:outline-none self-end mt-4 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  {favorites.includes(index) ? (
                    <path
                      d="M20 35.5833L17.5833 33.3833C9 25.6 3.33333 20.45 3.33333 14.1667C3.33333 9.01667 7.36667 5 12.5 5C15.4 5 18.1833 6.35 20 8.46667C21.8167 6.35 24.6 5 27.5 5C32.6333 5 36.6667 9.01667 36.6667 14.1667C36.6667 20.45 31 25.6 22.4167 33.3833L20 35.5833Z"
                      fill="#FF0000"
                    />
                  ) : (
                    <path
                      d="M20.1668 30.9167L20.0002 31.0833L19.8168 30.9167C11.9002 23.7333 6.66683 18.9833 6.66683 14.1667C6.66683 10.8333 9.16683 8.33333 12.5002 8.33333C15.0668 8.33333 17.5668 10 18.4502 12.2667H21.5502C22.4335 10 24.9335 8.33333 27.5002 8.33333C30.8335 8.33333 33.3335 10.8333 33.3335 14.1667C33.3335 18.9833 28.1002 23.7333 20.1668 30.9167ZM27.5002 5C24.6002 5 21.8168 6.35 20.0002 8.46667C18.1835 6.35 15.4002 5 12.5002 5C7.36683 5 3.3335 9.01667 3.3335 14.1667C3.3335 20.45 9.00016 25.6 17.5835 33.3833L20.0002 35.5833L22.4168 33.3833C31.0002 25.6 36.6668 20.45 36.6668 14.1667C36.6668 9.01667 32.6335 5 27.5002 5Z"
                      fill="black"
                    />
                  )}
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-[#a4dadf] rounded-lg w-full max-w-7xl max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={closeJobPopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <JobApplicationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
