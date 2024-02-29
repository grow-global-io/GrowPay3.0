import React from "react";
import { upArrow } from "../assets";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="flex  justify-center items-center  text-xl  w-max py-3 px-5 sm:py-4 sm:px-6 text-black bg-custom-green font-medium border-1 border-custom-green rounded-41 transition-all duration-600 cursor-pointer">
      Join Presale
      <img src={upArrow} className="ms-2" />
    </div>
  );
}; 
const ButtonWhite = ({path}) => {
  return (
    <div className="flex  justify-center items-center text-md  w-max py-3 px-6 text-black bg-white font-medium border-1 rounded-41 transition-all duration-600 cursor-pointer">
     <Link to={path}>Sign Up</Link> 
    </div>
  );
};

const ButtonGreen = ({path,text}) => {
  return (
    <div className="flex  justify-center items-center text-md  w-full py-3 px-6 text-black bg-custom-green font-medium border-1 rounded-41 ipm-font-family buttonOnHover ">
     <Link to={path}>{text}</Link> 
    </div>
  );
};

const ButtonCustomGreen = ({text}) => {
  return (
    <div className="flex  justify-center items-center  text-lg  w-max py-2 px-6 sm:py-3 sm:px-8 text-black bg-custom-green font-normal border-1  rounded-41 transition-all duration-600 cursor-pointer ipm-font-family buttonOnHover ">
      {text}
      <img src={upArrow} className="ms-2" />
    </div>
  );
}; 
const ButtonUpdate = ({text}) => {
  return (
    <div className="flex  justify-center items-center  text-lg  w-max py-2 px-6 sm:py-2.5 sm:px-10 text-black bg-custom-green font-normal border-1  rounded-41 cursor-pointer ipm-font-family buttonOnHover ">
      {text}
    
    </div>
  );
}; 

export { Button, ButtonWhite,ButtonGreen,ButtonCustomGreen,ButtonUpdate };
