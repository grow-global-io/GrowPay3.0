import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import ChooseUsSection from "./view/ChooseUsSection";
import HowWorkSection from "./view/HowWorkSection";
import PowerfulTokenSection from "./view/PowerfulTokenSection";
import BenefintsSection from "./view/BenefintsSection";
import Firstsection from "./view/Firstsection";
import Header from "./components/Header";
import FuturePlanSection from "./view/FuturePlanSection";
import StrmResltnSection from "./view/StrmResltnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional, smooth scrolling animation
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
      <Toaster position="top-center"/>
    <div className="fixed right-5 bottom-3 w-10 h-10 flex justify-center items-center bg-primary rounded-full cursor-pointer" onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} className="text-2xl text-white "/></div>  
      
    </>
  );
}

export default App;
