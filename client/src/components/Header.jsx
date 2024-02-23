import React from "react";
import { styles } from "../styles";
import { logonavbar } from "../assets";
import { Link } from "react-router-dom";
import { ButtonWhite } from "./Button";

const Header = () => {
  return (
    <div className="bg-primary py-5">
      <div className={`${styles.container}  flex flex-row justify-between `}>
        <div className="w-1/5 flex justify-start items-center">
          <img src={logonavbar} className="w-4/5" />
        </div>
        <ul className=" hidden xl:flex w-3/5  justify-center items-center ">
          <li className="mx-6 text-white hover:text-#e3dfdf text-md duration-600 cursor-pointer">
            Benefits
          </li>
          <li className="mx-6 text-white hover:text-#e3dfdf text-md duration-600 cursor-pointer">
            How it works
          </li>
          <li className="mx-6 text-white hover:text-#e3dfdf text-md duration-600 cursor-pointer">
            Token
          </li>
          <li className="mx-6 text-white hover:text-#e3dfdf text-md duration-600 cursor-pointer">
            Whitepaper
          </li>
          <li className="mx-6 text-white hover:text-#e3dfdf text-md duration-600 cursor-pointer">
            FAQ
          </li>
        </ul>
        <div className=" hidden xl:flex w-1/5 text-white  justify-center items-center">
          <p className="mx-6 text-white hover:text-#e3dfdf text-md duration-600 cursor-pointer">
            <Link to={'/login'}>login</Link>
          </p>
          <ButtonWhite path={'/signup'}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
