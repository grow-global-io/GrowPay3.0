import React, { useState } from "react";
import { downArrow, question, upArrow } from "../assets";

const AccordionItem = ({ title, content, index }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className=" bg-white mt-5 px-5 py-2 rounded-md">
      <div className="flex gap-3 items-center">
        <img src={question} alt="question" />
        <p>Question {index}</p>
      </div>
      <p className="accordion-title text-xl font-semibold my-3" onClick={() => setIsActive(!isActive)}>
        {title}
        {/* <span className="accordion-toggle">{isActive ? {upArrow} : "+"}</span> */}
        <img src={isActive?upArrow:downArrow} alt="upArrow"/>
      </p>
      <div className={`accordion-content ${isActive ? "active" : ""}`}>
        {content}
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} index={index+1} />
      ))}
    </div>
  );
};

export default Accordion;
