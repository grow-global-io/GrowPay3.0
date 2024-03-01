import React from 'react'
import { styles } from "../styles";
import ChooseUsCard from '../components/ChooseUsCard';
import chooseImg from './../assets/chooseimg.png'
import { payOut,lock,speach } from '../assets';


const ChooseUsSection = () => {
    const chooseUsData = [
        {
          img: payOut,
          heading: "Instant Payouts",
          content: "With DeeStream you're in control when you want to withdraw your funds. All deposits and withdrawals are instant, eliminating the need for lengthy checks. You can withdraw at any time or allow your account balance to build up.",
        },
        {
          img: lock,
          heading: "Lower Fees",
          content: "Being a decentralized platform allows DeeStream to significantly reduce costs which are passed onto the users. Pay the lowest fees currently in the industry with our platform.",
        },
        {
          img: speach,
          heading: "Freedom Of Speech",
          content: "As long as it's legal you are entitled to your own opinion. DeeStream will never ban users for expressing a view that is within the law.",
        },
      
      ];
  return (<div className='max-width'>
    <div className={`${styles.container} my-12`}>
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
    <div className='flex justify-center items-center'>
    <img src={chooseImg} alt="" className="img-animate w-3/5 lg:mt-12 xl:w-full" />
    </div>
    
     <div>
     <p className="text-7xl lg:text-9xl font-normal text-secondary font-array">BENEFITS</p>
        <p className=" text-3xl lg:text-6xl mt-[-40px] lg:mt-[-50px]  mb-8">Why choose us?</p>
    
   {
     chooseUsData.map((item,index)=>{
        return <ChooseUsCard img={item.img} heading={item.heading} content={item.content} />
     })
   }
     </div>

    </div>
  </div>
  </div>
  )
}

export default ChooseUsSection
