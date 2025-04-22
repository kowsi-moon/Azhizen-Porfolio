import React, { useState } from 'react';
import profile from '../assets/Profile1.png';
import { useLocation } from 'react-router-dom'; 
import jobListings from './jobs.json'; // Assuming jobs.json is in the same directory

const JobApplicationForm = () => {
  const location = useLocation();  // Get location object
  const { job } = location.state || {};  // Get job object from the location state

  // If job is undefined, you can handle the error gracefully
  if (!job) return <div>No job information available.</div>;

  console.log(job);

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [resumeFile, setResumeFile] = useState(null);

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', role: '', years: '' }]);
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...experience];
    updated[index][field] = value;
    setExperience(updated);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institution: '', degree: '', year: '' }]);
  };

  const handleEducationChange = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 9 * 1024 * 1024) {
      setResumeFile(file);
    } else {
      alert('File size must be less than 9MB');
    }
  };

  const handleSubmit = () => {
    if (!resumeFile) {
      alert('Please upload your resume!');
      return;
    }

    alert('Form submitted!');
    console.log('Submitting form...');
    console.log({ experience, education, resumeFile });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4 mt-35">
      <div className="w-full max-w-5xl bg-white p-4 sm:p-6 lg:p-12">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-medium font-poppins text-black mb-6">
          {job.title} {/* Dynamically display the selected job title */}
        </h1>

        {/* Personal Info */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Personal Information</h2>
          <p className="text-sm text-gray-500 mb-4">Fields marked with * are required.</p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="w-24 h-24 mx-auto sm:mx-0">
              <img src={profile} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            <button className="text-blue-600 text-sm font-medium hover:underline">Change</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['First name', 'Last name', 'Email', 'Confirm Email', 'Place of Residence'].map((label, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}*</label>
                <input
                  type={label.toLowerCase().includes('email') ? 'email' : 'text'}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={label}
                />
              </div>
            ))}
           {/* Phone Number Section */}
           <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone number*</label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <select className="sm:w-24 p-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-b-md sm:rounded-l-none sm:rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone number"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Experience</h2>
            <button
              onClick={handleAddExperience}
              className="flex items-center space-x-1 border border-blue-500 text-blue-500 px-3 py-1 rounded-md hover:bg-blue-50 text-sm"
            >
              <span>+</span>
              <span>Add</span>
            </button>
          </div>
          {experience.length > 0 &&
            experience.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <input
                  className="p-2 border rounded-md"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                />
                <input
                  className="p-2 border rounded-md"
                  placeholder="Role"
                  value={exp.role}
                  onChange={(e) => handleExperienceChange(index, 'role', e.target.value)}
                />
                <input
                  className="p-2 border rounded-md"
                  placeholder="Years"
                  value={exp.years}
                  onChange={(e) => handleExperienceChange(index, 'years', e.target.value)}
                />
              </div>
            ))}
          <hr className="border-gray-300" />
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Education</h2>
            <button
              onClick={handleAddEducation}
              className="flex items-center space-x-1 border border-blue-500 text-blue-500 px-3 py-1 rounded-md hover:bg-blue-50 text-sm"
            >
              <span>+</span>
              <span>Add</span>
            </button>
          </div>
          {education.length > 0 &&
            education.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <input
                  className="p-2 border rounded-md"
                  placeholder="Institution"
                  value={item.institution}
                  onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                />
                <input
                  className="p-2 border rounded-md"
                  placeholder="Degree"
                  value={item.degree}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                />
                <input
                  className="p-2 border rounded-md"
                  placeholder="Year"
                  value={item.year}
                  onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                />
              </div>
            ))}
          <hr className="border-gray-300" />
        </div>

        {/* Profiles */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Your Profiles</h2>
          <p className="text-sm text-gray-500 mb-5">Fields marked with * are required.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio/Website</label>
              <input
                type="url"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://yourportfolio.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn*</label>
              <input
                type="url"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
          </div>
        </div>

        {/* Resume Upload */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Resume*</h2>
          <div className="w-full border-2 border-dashed border-blue-300 bg-white-50 p-6 sm:p-8 rounded-md text-center text-sm">
            <label htmlFor="resume-upload" className="cursor-pointer text-blue-600 hover:underline">
              Choose a file <span className="text-black"> to drop here</span>
            </label>
            <input
              id="resume-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleResumeChange}
            />
            <p className="text-xs text-black-400 mt-2">10 mb size limit</p>
          </div>
        </div>

        {/* Message to Hiring Team */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Message to the Hiring Team</h2>
          <p className="text-sm text-gray-500 mb-5">Let the company know about your interest working there</p>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="I'm excited about this opportunity because..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto rounded bg-gradient-to-br from-[#0078B4] to-[#00B4D9] text-white px-6 py-3 hover:brightness-110 transition text-base sm:text-lg font-medium"
            >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;