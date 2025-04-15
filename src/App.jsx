import React from "react";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Main from "./Main/Main";
import ContactForm from "./components/ContactForm";
import FooterSection from "./components/FooterSection";
import CarrerPage from "./components/CarrerPage";
import Aboutus from "./components/Aboutus";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/contact-us" element={<ContactForm/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/carrer" element={<CarrerPage/>}/>
      </Routes>
     <FooterSection/>
    </div>
  );
};

export default App;