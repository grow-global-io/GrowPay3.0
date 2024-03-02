import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Firstsection from "./view/Firstsection";
import ChooseUsSection from "./view/ChooseUsSection";
import HowWorkSection from "./view/HowWorkSection";
import PowerfulTokenSection from "./view/PowerfulTokenSection";
import BenefintsSection from "./view/BenefintsSection";
import StrmResltnSection from "./view/StrmResltnSection";
import FuturePlanSection from "./view/FuturePlanSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll",()=>{
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    })

 }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };

  return (
    <>
      <Header />
      <Firstsection />
      <ChooseUsSection />
      <HowWorkSection />
      <PowerfulTokenSection />
      <BenefintsSection />
      <StrmResltnSection />
      <FuturePlanSection />
      <FAQ />
      <Footer />
      <Toaster position="top-center" />
      {showScrollButton && (
        <div
          className="fixed right-5 bottom-3 w-10 h-10 flex justify-center items-center bg-primary rounded-full cursor-pointer"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-2xl text-white" />
        </div>
      )}
    </>
  );
}

export default App;
