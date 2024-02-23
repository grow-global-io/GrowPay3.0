import React from 'react'
import payout from './../assets/bluepayouts.svg'

const ChooseUsCard = ({img,heading,content}) => {
  return (
    <div className='bg-custom-gradient p-8 rounded-xl my-5 '>
        <div>
            <span>
                <img src={img}/>
            </span>
        </div>
        <h3 className='text-2xl mt-3 mb-5 mx-0 font-medium '>{heading}</h3>
        <div>
            <p className='text-lg font-normal text-custom-gray leading-lh-text '>
           {content}
            </p>
        </div>
      
    </div>
  )
}

export default ChooseUsCard

