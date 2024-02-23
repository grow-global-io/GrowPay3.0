import React from 'react'

const FuturePlanCard = ({index,content}) => {
  return (
    <div className={`m-mt-${3*index}0`} >
    
    <div className='bg-white px-8 pt-6 pb-13 mt-5 rounded-lg bg-bckgrd-benefitcrd'>
        
        <div>
         <div className='inline-block bg-custom-blue px-2 py-1 rounded '>
            <p className='text-custom-green font-normal text-xs uppercase'>Step-0{index+1}</p>
         </div>
         <h3 className='text-2xl mt-2.5 mb-3.5 font-medium '>Phase {index+1}</h3>
            <p className='text-lg font-normal text-custom-gray leading-lh-text'>
                {content.map((item,i)=>{
                    return <li>{item}</li>
                })}
        
            </p>
        </div>

    </div>
    </div>
  )
}

export default FuturePlanCard
