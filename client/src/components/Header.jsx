import React, { useState } from "react";
import { styles } from "../styles";
import { logonavbar } from "../assets";
import { Link } from "react-router-dom";
import { ButtonWhite } from "./Button";
import './Header.css'

const Header = () => {
  const [active ,setActive]=useState("")
  const [isactive ,setIsactive]=useState(false)
  const headerTolgler=()=>{
    if(active==""){
      setActive("active")
      setIsactive(true)
    }else{
      setActive("")
      setIsactive(false)
    }

  }
  return (
    <>
    <div className="sticky top-0 z-10">
    <div className="bg-primary py-5 ">
      <div className={`${styles.container}  flex flex-row justify-between `}>
        <div className="w-3/5 lg:w-1/5 flex justify-start items-center">
          <img src={logonavbar} className=" w-3/4 lg:w-4/5" />
        </div>
        <div className=" flex justify-end items-center pe-3 lg:hidden  w-3/5 text-white">
                  <button class={`navbar-toggler ${active}`} type="button" onClick={headerTolgler}>
                    <span class="navbar-toggler-icon"></span>
                </button>

        </div>
        <ul className=" hidden lg:flex w-3/5  justify-center items-center ">
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
        <div className=" hidden lg:flex w-1/5 text-white  justify-center items-center">
          <p className="mx-6 text-white hover:text-#e3dfdf text-md duration-600 cursor-pointer">
            <Link to={'/login'}>login</Link>
          </p>
          <ButtonWhite path={'/signup'}/>
        </div>
      </div>
      
    </div>
    <div className={`w-full bg-custom-blue  lg:hidden  p-4 hidden   ${active}`}>
    <ul className="  flex w-3/5  flex-col  justify-center items-start">
          <li className="mx-6 text-white hover:text-#e3dfdf text-lg duration-600 cursor-pointer my-3 font-semibold">
            Benefits
          </li>
          <li className="mx-6 text-white hover:text-#e3dfdf text-lg duration-600 cursor-pointer my-3 font-semibold">
            How it works
          </li>
          <li className="mx-6 text-white hover:text-#e3dfdf text-lg duration-600 cursor-pointer my-3 font-semibold">
            Token
          </li>
          <li className="mx-6 text-white hover:text-#e3dfdf text-lg duration-600 cursor-pointer my-3 font-semibold">
            Whitepaper
          </li>
          <li className="mx-6 text-white hover:text-#e3dfdf text-lg duration-600 cursor-pointer my-3 font-semibold">
            FAQ
          </li>
          {/* <li className="mx-6 text-white hover:text-#e3dfdf text-lg duration-600 cursor-pointer my-3 font-medium">
            login
          </li> */}
        </ul>
        <div className=" flex w-1/5 flex-col text-white  justify-center items-start">
          <p className="mx-6 text-white hover:text-#e3dfdf text-lg duration-600 cursor-pointer my-">
            <Link to={'/login'}>login</Link>
          </p>
        <div className="ms-10 mt-5"> <ButtonWhite path={'/signup'} /></div> 
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
