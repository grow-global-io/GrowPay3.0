import React from 'react'

const PowerfulTokenCard = ({img,heading,content}) => {
  return (
    <div className='mx-4 '>
        <div className='flex items-center justify-center'> <img src={img}/></div>
     
      <h3 className=' text-white text-2xl mt-2.5 mb-3.5 font-medium text-center'>{heading}</h3>
      <p className=' text-white text-lg font-normal  leading-lh-para text-center'>{content}</p>
    </div>
  )
}

export default PowerfulTokenCard
