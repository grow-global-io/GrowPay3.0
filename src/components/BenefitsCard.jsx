import React from 'react'

const BenefitsCard = ({img,heading,content}) => {
  return (
    <div className='rounded-xl bg-white p-6  w-1/3 m-3 perks-cards hover:scale-102 hover:transition-all duration-500 linear overflow-hidden'>
    <div>
        <img src={img}/>
    </div>
    <h3 className='text-2xl mt-2.5 mb-3.5 font-medium '>{heading}</h3>
    <div>
        <p className='text-lg font-normal  leading-lh-text '>{content}</p>
    </div>
  
</div>
  )
}

export default BenefitsCard
