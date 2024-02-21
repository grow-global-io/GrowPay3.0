import React from 'react'
import { styles } from "../styles";
import { tokenOne,tokenTow,tokenThree,tokenFour } from '../assets';
import PowerfulTokenCard from '../components/PowerfulTokenCard';

const PowerfulTokenSection = () => {
    const utilityData = [
        {
          img: tokenOne,
          heading: "Rewards Programme ",
          content: "All presale investors will receive a 50:50 split with DeeStream for as long as you hold your tokens.",
        },
        {
          img: tokenTow,
          heading: "Voting Rights",
          content: "Decentralized governance will allow token holders to shape the future of the platform. Vote and make proposals on upcoming changes and new ideas.",
        },
        {
          img:tokenThree,
          heading: "Early Access",
          content: "Presale token holders will have early access to alpha and beta testing on the platform. See what DeeStream is about before others. ",
        },
        {
          img:tokenFour,
          heading: "Rewards Programme ",
          content: "Climb the ranks and receive additional benefits like cashback, airdrops and a personal account manager. ",
        },
      
      ];
  return (
    <div className='w-screen min-h-screen bg-radial-gradient '>
     <div className={`${styles.container} my-12`}>
     <div className='my-16 pt-16' >
        <p className="text-9xl font-normal text-secondary font-array text-center">UTILITY</p>
        <p className="text-6xl mt-[-50px] text-center text-white ">Powerful Token</p>
      
      </div>
      <div className='flex flex-row'>
        {
            utilityData.map((item,index)=>{
                return <PowerfulTokenCard img={item.img} heading={item.heading} content={item.content}/>

            })

        }

      </div>

     </div> 
    </div>
  )
}

export default PowerfulTokenSection
