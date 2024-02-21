import React from 'react'
import { styles } from "../styles";
import { deeStream } from '../assets';
import {Button} from '../components/Button';
import { payout,privacy,ads } from '../assets';


const Firstsection = () => {
  return (
    <div className='bg-background-of-firstsection w-screen h-auto pb-8 pt-8'>
        <div className={`${styles.container} my-12`}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
                <div className='flex justify-center flex-col'>
                    <h1 className='text-white w-medium text-30 sm:text-68 leading-lh-heading tracking--136'>
                    The First Ever Decentralized Streaming Platform
                    </h1>
                    <p className='text-white  text-lg mt-6 sm:mb-12 mb-8'>
                    The world's first decentralized streaming platform built on the blockchain.
                    </p>
                    <div className=''><Button/></div>
                    <ul className='flex flex-row justify-around sm:justify-between pt-8 sm:p-pt-85 '>
                        <li className='text-white flex  text-14 sm:text-xl font-medium'>  <img src={payout} className=' me-1 sm:me-3'/>Instant Payouts</li>
                        <li className='text-white flex text-14 sm:text-xl font-medium'>  <img src={privacy} className='me-1 sm:me-3'/>00% Privacy</li>
                        <li className='text-white flex text-14 sm:text-xl font-medium'>  <img src={ads} className=' me-1 sm:me-3'/>Lower Fees</li>
                    </ul>
                   

                </div>
                <div className='flex justify-center items-center mt-8 sm:mt-0'>
                <img src={deeStream} className='w-3/5 lg:mt-12 xl:w-full'/>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Firstsection
