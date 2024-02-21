import React from 'react'
import { upArrow } from '../assets'

const Button = () => {
  return (
  
     <div className='flex  justify-center items-center text-xl  w-max py-4 px-6 text-black bg-custom-green font-medium border-1 border-custom-green rounded-41 transition-all duration-600'>
     Join Presale
     <img src={upArrow} className='ms-2'/>
     </div>
   
  )
}
const ButtonWhite = () => {
  return (
  
     <div className='flex  justify-center items-center text-xl  w-max py-3 px-6 text-black bg-white font-medium border-1 rounded-41 transition-all duration-600'>
    Sign Up
    
     </div>
   
  )
}


export  {Button ,ButtonWhite};

