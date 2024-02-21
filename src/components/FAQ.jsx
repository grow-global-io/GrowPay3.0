import React from "react";
import Accordion from "../shared/Accordion";
import { styles } from "../styles";
import { faqImg } from "../assets";

const FAQ = () => {
  const accordionData = [
    {
      title: "How can I buy DST tokens?",
      content: "You can purchase tokens by creating an account using our official presale site https://invest.deestream.com",
    },
    {
      title: "Accordion 2",
      content: "This is the content of accordion 2.",
    },
    {
      title: "Accordion 3",
      content: "This is the content of accordion 3.",
    },
  ];
  return (<div className="max-width">

 
    <div className={`${styles.container} my-12`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div>
        <p className="text-9xl font-normal text-secondary font-array">FAQ</p>
        <p className="text-6xl mt-[-50px] ">Frequently Asked Questions</p>
        <img src={faqImg} alt="" className="img-animate" />
      </div>
      <Accordion items={accordionData} />
      </div>
    </div>
    </div>
  );
};

export default FAQ;
