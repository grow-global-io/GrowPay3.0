import React from 'react'


const HowWorkCard = ({heading,content,img,index}) => {
  return (
    <div className='flex flex-col m-3'>
      <div>
        <div>
            <img src={img} className='h-72'/>
        </div>
    </div>
    <div className='bg-white px-6 pt-6 pb-12 mt-5 rounded-lg'>
        
        <div>
         <div className='inline-block bg-custom-blue px-2 py-1 rounded '>
            <p className='text-custom-green font-normal text-xs uppercase'>Step-0{index+1}</p>
         </div>
         <h3 className='text-2xl mt-2.5 mb-3.5 font-medium '>{heading}</h3>
            <p className='text-lg font-normal text-custom-gray leading-lh-text'>
           {content}
            </p>
        </div>

    </div>
    </div>
  )
}

export default HowWorkCard
