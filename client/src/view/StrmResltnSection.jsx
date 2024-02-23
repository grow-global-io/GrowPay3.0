import React from 'react'
import { styles } from "../styles";
import { streaming } from '../assets';
import { Button } from '../components/Button';


const StrmResltnSection = () => {
    return (
        <div className='m-mt-100 max-width'>
            <div className={`${styles.container} my-12 h-auto bg-background-of-firstsection flex flex-col lg:flex-row rounded-2xl p-12 sm:p-0`}>
                <div className='w-full lg:w-1/2 flex justify-end items-center '>
                    <div className=' w-full lg:w-9/12'>
                    <h1 className='text-white w-medium text-30 sm:text-40 leading-lh-heading tracking--136'>
                    Join the streaming revolution
                    </h1>
                    <p className='text-white  text-lg mt-6 sm:mb-12 mb-8'>
                    Become part of history. Join the world's first decentralized streaming platform that will enable streamers to take control of their own destiny. 
                    </p>
                    <div className=''><Button/></div>
                    </div>

                </div>
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <img src={streaming} className='w-11/12'/>

                </div>
            </div>
        </div>
    )
}

export default StrmResltnSection
