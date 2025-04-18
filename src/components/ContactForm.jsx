import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting data:', formData);
    try {
      const docRef = await addDoc(collection(db, 'contactForms'), {
        ...formData,
        timestamp: new Date(),
      });
      console.log('Document written with ID:', docRef.id);
      alert("Message Sent Successfully!");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      console.error('Error adding document:', error.message, error.code);
      alert("Submission Failed: " + error.message);
    }
  };

  return (
    <div className="bg-white">
      {/* SYSTEM VIEW ONLY - UNCHANGED */}
      <div className="hidden md:block p-8 pt-16 mt-20">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-pooppins font-bold text-black">
            Contact our <span style={{ color: "#00B4D9" }}>Team</span>
          </h1>
          <p className="text-gray-500 mt-8">Any questions or remarks? Just leave a message!</p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-center items-start">
          {/* Form */}
          <div className="md:w-2/ p-4">
            <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
              {/* First & Last Name */}
              <div className="flex space-x-8">
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm mb-2 font-bold">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-1.5 border border-gray-900 rounded text-sm"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm mb-2 font-bold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-1.5 border border-gray-900 rounded text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 text-sm mb-2 font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-1.5 border border-gray-900 rounded text-sm"
                />
              </div>

              {/* Country & Phone */}
              <div className="w-full">
                <label className="block text-gray-700 text-sm mb-2 font-bold">Country & Phone Number</label>
                <div className="flex space-x-3">
                  <div className="w-1/4">
                    <select className="w-full p-1.5 border border-gray-900 rounded text-sm">
                      <option>IND</option>
                    </select>
                  </div>
                  <div className="w-3/4">
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full p-1.5 border border-gray-900 rounded text-sm"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 text-sm mb-2 font-bold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave a message"
                  className="w-full p-1.5 border border-gray-900 rounded h-24 text-sm"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-1.5 text-white rounded text-sm"
                style={{ background: "linear-gradient(135deg, #0078B4 0%, #00B4D9 100%)" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="ml-20 flex justify-end p-4">
            <div className="md:w-full">
              <h2 className="text-xl font-semibold">Chat with us</h2>
              <p className="text-gray-500 mt-2">Speak to our friendly team via live chat</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <img src={icon1} alt="Chat Icon" className="mr-2 w-4 h-4" />
                  <span className="underline">Start a live chat</span>
                </li>
                <li className="flex items-center">
                  <img src={icon2} alt="Email Icon" className="mr-2 w-4 h-4" />
                  <a href="mailto:azhizensolutions@gmail.com" className="underline">Shoot us on Email</a>
                </li>
                <li className="flex items-center">
                  <img src={icon3} alt="LinkedIn Icon" className="mr-2 w-4 h-4" />
                  <a href="https://www.linkedin.com/company/azhizensolutions/" target="_blank" rel="noopener noreferrer" className="underline">Message us on Linkedin</a>
                </li>
                <li className="flex items-center">
                  <img src={icon4} alt="Instagram Icon" className="mr-2 w-4 h-4" />
                  <a href="https://www.instagram.com/azhizensolutions" target="_blank" rel="noopener noreferrer" className="underline">Message us on Instagram</a>
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">Call us</h2>
              <p className="text-gray-500 mt-2">Call our team Mon - Fri from 8 Am to 6 Pm</p>
              <li className="flex items-center">
                <img src={icon6} className="mr-2 w-4 h-4" />
                <span className="underline">+91 9750603988</span>
              </li>

              <h2 className="text-xl font-semibold mt-6">Visit us</h2>
              <p className="text-gray-500 mt-2">Chat to us in person at our company</p>
              <li className="flex items-center">
                <img src={icon5} className="mr-2 w-4 h-4" />
                <a href="https://www.google.co.in/maps/place/Azhizen+Solutions+Pvt+Rounded corners and shadows.Ltd.,/@11.3591653,77.8218212,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba965003111cd9d:0xade9181c8a953dcf!8m2!3d11.3591653!4d77.8266921!16s%2Fg%2F11x5__hc3_?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%" className="underline">Tiruchengode, Namakkal</a>
              </li>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW ONLY - MODIFIED */}
      <div className="block md:hidden p-4 xs:p-3 sm:p-5 bg-white rounded-lg shadow mt-30 w-full">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-lg xs:text-base sm:text-xl font-bold text-black mb-6 text-center">
            Contact Our <span style={{ color: "#00B4D9" }}>Team</span>
          </h2>

          <div className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Location Info */}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm xs:text-xs sm:text-base font-semibold">India</h3>
                  <img src={icon5} className="w-4 h-4 flex-shrink-0" alt="Location" />
                </div>
                <div className="mt-3 space-y-2">
                  <p className="font-medium text-xs sm:text-sm">CEO - Bharath Kumar R</p>
                  <p className="font-medium text-xs sm:text-sm">Namakkal</p>
                  <p className="text-gray-600 text-xs sm:text-sm break-words">
                    K.S.R College of Engineering, Tiruchengode
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <img src={icon6} className="w-4 h-4" alt="Phone Icon" />
                  <p className="font-semibold text-xs sm:text-sm">
                    Phone: <span className="font-normal underline">+91 9750603988</span>
                  </p>
                </div>
                <p className="font-semibold text-xs sm:text-sm">
                  Hours: <span className="font-normal">Mon - Fri, 8 AM to 6 PM</span>
                </p>
                <div className="flex items-center gap-2">
                  <img src={icon2} className="w-4 h-4" alt="Email Icon" />
                  <p className="font-semibold text-xs sm:text-sm">
                    Email:{" "}
                    <a href="mailto:azhizensolutions@gmail.com" className="font-normal underline break-words">
                      azhizensolutions@gmail.com
                    </a>
                  </p>
                </div>
                <p className="font-semibold text-xs sm:text-sm">
                  Site:{" "}
                  <a href="https://www.azhizen.com" className="font-normal underline break-words">
                    www.azhizen.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;