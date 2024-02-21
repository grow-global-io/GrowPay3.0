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

function App() {
  const [count, setCount] = useState(0);

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
    </>
  );
}

export default App;
