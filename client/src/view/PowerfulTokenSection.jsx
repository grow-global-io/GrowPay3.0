import React from "react";
import { styles } from "../styles";
import { tokenOne, tokenTow, tokenThree, tokenFour, token } from "../assets";
import PowerfulTokenCard from "../components/PowerfulTokenCard";
import { Button } from "../components/Button";

const PowerfulTokenSection = () => {
  const utilityData = [
    {
      img: tokenOne,
      heading: "Rewards Programme ",
      content:
        "All presale investors will receive a 50:50 split with DeeStream for as long as you hold your tokens.",
    },
    {
      img: tokenTow,
      heading: "Voting Rights",
      content:
        "Decentralized governance will allow token holders to shape the future of the platform. Vote and make proposals on upcoming changes and new ideas.",
    },
    {
      img: tokenThree,
      heading: "Early Access",
      content:
        "Presale token holders will have early access to alpha and beta testing on the platform. See what DeeStream is about before others. ",
    },
    {
      img: tokenFour,
      heading: "Rewards Programme ",
      content:
        "Climb the ranks and receive additional benefits like cashback, airdrops and a personal account manager. ",
    },
  ];
  return (
    <div className="min-h-screen bg-radial-gradient  ">
      <div className={`${styles.container} my-12`}>
        <div className="my-16 pt-16">
          <p className="text-9xl font-normal text-secondary font-array text-center">
            UTILITY
          </p>
          <p className="text-6xl mt-[-50px] text-center text-white ">
            Powerful Token
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {utilityData.map((item, index) => {
            return (
              <PowerfulTokenCard
                img={item.img}
                heading={item.heading}
                content={item.content}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-12">
          <Button />
        </div>
      </div>
      <div className={`${styles.container} my-12`}>
        <div className="my-16 pt-16">
          <p className="text-9xl font-normal text-secondary font-array">
            ECOSYSTEM
          </p>
          <p className="text-6xl mt-[-50px]  text-white ">Tokenomics</p>
        </div>
        <div className="w-full flex  flex-col lg:flex-row justify-between">
          <div className="w-11/12 lg:w-7/12 ">
            <ul>
              <li className="flex justify-between items-center py-3 px-4 sm:px-12 border-b-custom">
                <p className=" text-white text-18 sm:text-24 font-medium ">
                  Presale
                </p>
                <p className="text-custom-green  text-18 sm:text-24 font-normal font-array">
                  210,000,000
                </p>
              </li>
              <li className="flex justify-between items-center py-3 px-4 sm:px-12 border-b-custom">
                <p className=" text-white text-18 sm:text-24 font-medium ">
                  Exchanges
                </p>
                <p className="text-custom-green text-18 sm:text-24 font-normal font-array">
                  35,000,000
                </p>
              </li>
              <li className="flex justify-between items-center py-3 px-4 sm:px-12 border-b-custom">
                <p className=" text-white text-18 sm:text-24 font-medium ">
                  Team Tokens
                </p>
                <p className="text-custom-green text-18 sm:text-24 font-normal font-array">
                  15,000,000
                </p>
              </li>
              <li className="flex justify-between items-center py-3 px-4 sm:px-12 border-b-custom">
                <p className=" text-white text-18 sm:text-24 font-medium ">
                  Marketing
                </p>
                <p className="text-custom-green text-18 sm:text-24 font-normal font-array">
                  12,000,000
                </p>
              </li>
              <li className="flex justify-between items-center py-3 px-4 sm:px-12 border-b-custom">
                <p className=" text-white text-18 sm:text-24 font-medium ">
                  Rewards
                </p>
                <p className="text-custom-green text-18 sm:text-24 font-normal font-array">
                  10,000,000
                </p>
              </li>
              <li className="flex justify-between items-center py-3 px-4 sm:px-12 border-b-custom">
                <p className=" text-white text-18 sm:text-24 font-medium ">
                  Partnerships
                </p>
                <p className="text-custom-green text-18 sm:text-24font-normal font-array">
                  6,000,000
                </p>
              </li>
              <li className="flex justify-between items-center py-3 px-4 sm:px-12 border-b-custom">
                <p className=" text-white text-18 sm:text-24 font-medium ">
                  Burning Event
                </p>
                <p className="text-custom-green text-18 sm:text-24 font-normal font-array">
                  6,000,000
                </p>
              </li>
              <li className="flex justify-between items-center py-3 px-4 sm:px-12 border-b-custom">
                <p className=" text-white text-18 sm:text-24 font-medium ">
                  Consultants
                </p>
                <p className="text-custom-green text-18 sm:text-24 font-normal font-array">
                  4,000,000
                </p>
              </li>
              <li className="flex justify-between items-center py-3 px-4 sm:px-12 border-b-custom">
                <p className=" text-white text-18 sm:text-24 font-medium ">
                  Legal Team
                </p>
                <p className="text-custom-green text-18 sm:text-24 font-normal font-array">
                  2,000,000
                </p>
              </li>
              sm:
            </ul>
          </div>
          <div className=" w-11/12 lg:w-5/12 flex justify-center items-center">
            <img src={token} className=" img-animate w-11/12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerfulTokenSection;
