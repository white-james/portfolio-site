import React from "react";
import Navbar from "./components/Navbar";
import BioSection from "./components/BioSection";
import ExperienceSection from "./components/ExperienceSection";
import CertificationsSection from "./components/CertificationsSection";
import ResumeSection from "./components/ResumeSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container py-5 bg-dark text-light">
        <header className="mb-5 text-center">
          <h5>Hi, my name is</h5>
          <h1>James White</h1>
        </header>
        <BioSection />
        <ExperienceSection />
        <CertificationsSection />
        <ResumeSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
