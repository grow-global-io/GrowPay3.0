import React from "react";
import { styles } from "../styles";
import { logo, twitter, telegram } from "../assets";
const Footer = () => {
  return (
    <div className="max-width">

  
    <div className={`${styles.container} px-5 py-5   rounded-md bg-primary w-full`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4 justify-center">
        <img src={logo} className="max-h-24" />
        <ul className="grid lg:grid-cols-5 grid-cols-3 justify-center gap-5">
          <li className="text-white text-lg">Benefits</li>
          <li className="text-white text-lg">How it works</li>
          <li className="text-white text-lg">Token</li>
          <li className="text-white text-lg"> Paper</li>
          <li className="text-white text-lg">FAQ</li>
        </ul>
        <div className="flex gap-5 lg:justify-end my-5 lg:my-0">
          <img src={twitter} alt="twitter"  className="cursor-pointer hover:opacity-80"/>
          <img src={telegram} alt="telegram" className="cursor-pointer hover:opacity-80" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 py-5">
        <div className="flex gap-5">
          <p className="text-white text-lg">©2024 DeeStream</p>
          <a className="text-white text-lg" href="mailto:support@deestream.com">support@deestream.com</a>
        </div>
        <div className="flex gap-5 lg:justify-end">
          <a className="text-white text-lg" href="">Privacy Policy</a>
          <a className="text-white text-lg" href="">Terms & Conditions</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
