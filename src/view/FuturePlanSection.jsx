import React from 'react'
import { styles } from "../styles";
import FuturePlanCard from '../components/FuturePlanCard';

const FuturePlanSection = () => {
    const futurePlanData = [
        {
         content: ["Create smart contract","Website deployment","Audit on token","Presale launch","Start marketing campaign one"],
        },
        {
         content: ["Launch on exchanges","Presale tokens airdrop","Start marketing campaign two","Allow token holders to create governance","Apple & Google play store application"],
        },
        {
         content: ["Token burn event","Start marketing campaign three","Brand ambassador program","Bug bounty","Sponsors"],
        },
        
      
      ];
  return (
    <div className={`${styles.container} my-12`}>
    <div className='mb-12 bt-10' >
   <p className="text-9xl font-normal text-secondary font-array text-center">ROADMAP</p>
   <p className="text-6xl mt-[-50px] text-center ">Future Plans</p>
 
 </div>
 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'> 
       {
          futurePlanData.map((item,index)=>{
        return <FuturePlanCard index={index} content={item.content}/>

          })
       }

    </div> 

</div>
  )
}

export default FuturePlanSection
