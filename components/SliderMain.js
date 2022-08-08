import React from "react";
import Reveal from "react-awesome-reveal";
import Link from "next/link";
import { keyframes } from "@emotion/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Typed from "react-typed";
import { IdTypeName } from "./IdInput.tsx";
import { BsCashCoin } from "react-icons/bs";
import Router from "next/router";
import { AiOutlineQrcode } from "react-icons/ai";
import { FaRegistered, FaQrcode } from "react-icons/fa";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const style = {
  accentedButton: ` relative text-lg px-4 lg:px-12 py-3 font-semibold bg-[#e8c020] rounded-lg mr-5 text-white hover:bg-[#ebc046] cursor-pointer`,
  accentedQRButton: ` relative text-lg px-4 lg:px-12 py-3 font-semibold bg-[#e3dfc8] rounded-lg mr-5 text-[#355ce8] hover:bg-[#f5f3e6] cursor-pointer`,
  button: ` relative text-lg font-semibold px-4 lg:px-12 py-3 bg-[#2cab33]  rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#3ec25a] cursor-pointer`,
};

const Slidermain = () => (
  <div className="container" id="main">
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="spacer-single"></div>
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={0}
          duration={600}
          triggerOnce
        >
          <h6 className="">
            <span className="text-uppercase color">Grow LimitLess</span>
          </h6>
        </Reveal>
        <div className="spacer-10"></div>
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={300}
          duration={600}
          triggerOnce
        >
          <h1 className="col-white">Pay crypto directly</h1>
          <h1>
            <b className="col-white">to &nbsp;</b>
            <Typed
              className="col-white"
              strings={[IdTypeName.phone, IdTypeName.email, IdTypeName.wallet]}
              typeSpeed={80}
              backSpeed={40}
              backDelay={2500}
              loop
              showCursor={false}
            />
          </h1>
        </Reveal>
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={600}
          duration={600}
          triggerOnce
        >
          <p className="via-black-500 mt-3 bg-gradient-to-r from-green-400 to-pink-600 bg-clip-text text-xs font-bold text-transparent lg:text-xl">
            Forget the era of wallet address and send crypto directly to phone
            number or email address now.
          </p>
        </Reveal>
        <div className="spacer-10"></div>
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={800}
          duration={900}
          triggerOnce
        >
          <div className="flex">
            <button
              className={style.accentedButton}
              onClick={() => {
                Router.push({
                  pathname: "/pay",
                });
              }}
            >
              <BsCashCoin size={50} /> Pay
            </button>
            <button
              className={style.accentedQRButton}
              onClick={() => {
                Router.push({ pathname: "/qrPay" });
              }}
            >
              <FaQrcode size={50} /> QR
            </button>
            <button
              className={style.button}
              onClick={() => {
                Router.push({ pathname: "/register" });
              }}
            >
              <div className="items-center justify-center">
                <FaRegistered size={50} /> Register
              </div>
            </button>
          </div>
          <div className="mb-sm-30"></div>
        </Reveal>
      </div>
      <div className="col-md-6 xs-hide">
        <Reveal
          className="onStep"
          keyframes={fadeIn}
          delay={900}
          duration={1500}
          triggerOnce
        >
          {/* <img src="./img/misc/nft.png" className="lazy img-fluid" alt="" /> */}
        </Reveal>
      </div>
    </div>
  </div>
);
export default Slidermain;
