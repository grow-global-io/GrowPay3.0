import React from 'react'
import { styles } from "../styles";
import { beneOne,beneTwo,beneThree } from '../assets';
import BenefitsCard from '../components/BenefitsCard';
import { Button } from '../components/Button';

const BenefintsSection = () => {
    const benefitsData = [
        {
          img: beneOne,
          heading: "Instant Payouts",
          content: "With DeeStream you're in control when you want to withdraw your funds. All deposits and withdrawals are instant, eliminating the need for lengthy checks. You can withdraw at any time or allow your account balance to build up.",
        },
        {
          img: beneTwo,
          heading: "Lower Fees",
          content: "Being a decentralized platform allows DeeStream to significantly reduce costs which are passed onto the users. Pay the lowest fees currently in the industry with our platform.",
        },
        {
          img:beneThree,
          heading: "Freedom Of Speech",
          content: "As long as it's legal you are entitled to your own opinion. DeeStream will never ban users for expressing a view that is within the law.",
        },
      
      ];
  return (<div className='max-width'>
    <div className={`${styles.container} my-12`}>
    <div className='mb-12 bt-10' >
   <p className="text-7xl lg:text-9xlfont-normal text-secondary font-array text-center">PERKS</p>
   <p className="text-3xl lg:text-6xl mt-[-40px] lg:mt-[-50px] text-center ">EXCLUSIVE BENEFITS</p>
 
 </div>
 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'> 
       {
           benefitsData.map((item)=>{
               return <BenefitsCard img={item.img} heading={item.heading} content={item.content} />

           })
       }

</div> 
<div className='flex justify-center items-center mt-12 '><Button/></div>

</div>
</div>
  )
}

export default BenefintsSection
