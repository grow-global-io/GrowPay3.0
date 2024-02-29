import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { logoLight2x,user,trader,transaction, dashboard,home,powerOff,coinStack } from '../assets'
import { useState } from 'react'


const SideBar = ({hidden,img,size}) => {

  const path=window.location.pathname;
 
  console.log(path)
  const logOut=()=>{
    localStorage.removeItem("token")
    window.location.reload();
  }

  return (
    <div className={` ${hidden=="hidden"?"w-70px":"w-400px"} bg-primary shadow-custom-shadow h-full absolute lg:static z-10 `}>
      <div className='p-p-20 mb-12'>
        <Link to={'#'}>
        <img src={img} className={`w-${size}`} />
        </Link>
      </div>
      <div className='flex justify-center items-center w-full ipm-font-family  text-white '>
      <ul className='flex flex-col w-full '>
        <li className={`py-2 px-3 ${path=="/user"?"active":""} `}><Link to={'/user'} className='p-3 justify-start bg-transparent flex'>
          <img src={dashboard} className='w-22px'/>
            <span className={`font-bold ms-3 leading-6 text-14 ${hidden}  `}>My Dashboard</span>
          
          </Link>
        </li>
        <li className={`py-2 px-3 ${path=="/user/contribute"?"active":""}`}><Link to={'/user/contribute'} className='p-3 justify-start bg-transparent flex'>
          <img src={coinStack} className='w-22px'/>
          <span className={`font-bold ms-3 leading-6 text-14 ${hidden} `}>Buy Tokens</span>
          
          </Link>
        </li>
        <li className={`py-2 px-3 ${path=="/user/transactions"?"active":""}`}><Link to={'/user/transactions'} className='p-3 justify-start bg-transparent flex'>
          <img src={transaction} className='w-22px'/>
          <span className={`font-bold ms-3 leading-6 text-14 ${hidden}`}>Transactions</span>
          
          </Link>
        </li>
        <li className={`py-2 px-3 ${path=="/user/account"?"active":""}`}><Link to={'/user/account'} className='p-3 justify-start bg-transparent flex'>
          <img src={user} className='w-22px'/>
          <span className={`font-bold ms-3 leading-6 text-14 ${hidden}  `}>Profile</span>
          
          </Link>
        </li>
        <li className={`py-2 px-3 ${path=="/user/account/balance"?"active":""}`}><Link to={'/user/account/balance'} className='p-3 justify-start bg-transparent flex'>
          <img src={trader} className='w-22px'/>
          <span className={`font-bold ms-3 leading-6 text-14 ${hidden} `}>My Tokens</span>
          
          </Link>
        </li>
        <li className='py-2 px-3'><Link to={'/'} className='p-3 justify-start bg-transparent flex'>
          <img src={home} className='w-22px'/>
          <span className={`font-bold ms-3 leading-6 text-14 ${hidden}  `}>Dee Stream</span>
          
          </Link>
        </li>
        
      </ul>
      </div>
      <div className='text-white mt-12'>
        <ul>
        <li className='py-3 px-3 ' onClick={logOut}><Link to={'#'} className='p-3 justify-start bg-transparent flex'>
          <img src={powerOff} className='w-22px'/>
          <span className={`font-medium ms-3 leading-6 text-17 ${hidden} `}>Logout</span>
          
          </Link>
        </li>
        </ul>
        {/* <span className={`font-medium ms-3 leading-6 text-17 px-10 ipm-font-family break-words ${hidden}`}>Logged as chandrajyoti123</span> */}
      </div>
      
    </div>
  )
}

export default SideBar
