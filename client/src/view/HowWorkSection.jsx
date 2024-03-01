import React from 'react'
import { styles } from "../styles";
import HowWorkCard from '../components/HowWorkCard';
import { inCutEthereum ,inCutPencil,workThree } from '../assets';


const HowWorkSection = () => {
    const howWorkData = [
        {
          img: inCutPencil,
          heading: "Create An Account",
          content: "Complete a simple form to create your account. Once you have verified your email address you're ready to go.",
        },
        {
          img: inCutEthereum,
          heading: "Stream & Watch",
          content: "Now you're ready to stream to the world. Share your stream channel with your fans or pick your favourite entertainment to watch.",
        },
        {
          img: workThree,
          heading: "Earn & Have Fun",
          content: "AEarn money by receiving gifted subs, Dee gifts and packages. Funds are paid instantly into your balance. Connect with your favourite streamers anywhere, anytime.",
        },
      
      ];

  return (
    <div className='max-width'>
    <div className={`${styles.container} my-12`}>
         <div className='mb-12 bt-10' >
        <p className="text-7xl lg:text-9xl font-normal text-secondary font-array text-center">3-STEPS</p>
        <p className="text-3xl lg:text-6xl mt-[-40px] lg:mt-[-50px] text-center ">How it works</p>
      
      </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'> 
            {
                howWorkData.map((item,index)=>{
                    return <HowWorkCard img={item.img} heading={item.heading} content={item.content} index={index}/>

                })
            }

         </div> 

   </div>
   </div>
  )
}

export default HowWorkSection
