import React from 'react'
import { styles } from "../styles";
import { logonavbar } from '../assets';
import { Link } from 'react-router-dom';
import {ButtonWhite} from './Button';

const Header = () => {
  return (
    <div>
     <div className='w-screen  bg-#29174b p-12 shadow-custom-shado mb-0'>
        <nav className=''>
            <div  className={`${styles.container}  flex flex-row justify-between `}>
                <div className='w-1/5 flex justify-start items-center'><img src={logonavbar} className='w-4/5'/></div>
                <ul className=' hidden sm:flex w-3/5  justify-center items-center '>
                    <li className='mx-6 text-white hover:text-#e3dfdf text-lg'>Benefits</li>
                    <li className='mx-6 text-white hover:text-#e3dfdf text-lg'>How it works</li>
                    <li className='mx-6 text-white hover:text-#e3dfdf text-lg'>Token</li>
                    <li className='mx-6 text-white hover:text-#e3dfdf text-lg'>Whitepap</li>
                    <li className='mx-6 text-white hover:text-#e3dfdf text-lg'>FAQ</li>
                    </ul>
                <div className=' hidden sm:flex w-1/5 text-white  justify-center items-center'>
                <p className='mx-6 text-white hover:text-#e3dfdf text-lg'>login</p>
                    <ButtonWhite/>
                </div>

            </div>

        </nav>
     </div>
      
    </div>
  )
}

export default Header
