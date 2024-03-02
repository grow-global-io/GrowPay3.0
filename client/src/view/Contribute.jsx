import React from 'react'
import { tokenSymbol,bitcoin,bnb,dogecoin,ethereum,shiba,solana,tetherEr,tetherTr,usdc } from '../assets'
import {  sideBarlogo, logoLight2x } from '../assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars,faCircleInfo,faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SideBar from '../components/SideBar'
import { useState } from 'react'
import { ButtonCustomGreen } from '../components/Button'
import './Contribute.css'


const Contribute = () => {
    const [hidden, setHidden] = useState('')
    const [istoggle, setIstoggle] = useState(false)
    const [sidebarimg, setSidebarimg] = useState(logoLight2x)
    const [logosize, setLogosize] = useState('180px')
    const toggleSideBar = () => {
        if (!istoggle) {
            setHidden('hidden')
            setIstoggle(true)
            setSidebarimg(sideBarlogo)
            setLogosize('32px')
        } else {
            setHidden("")
            setIstoggle(false)
            setSidebarimg(logoLight2x)
            setLogosize('180px')
        }

    }
    const [showoption ,setShowoption]=useState("")
    const [isshowoption ,setIsshowoption]=useState(false)
    const showOptionfunc=()=>{
     
        if(showoption==""){
            setShowoption("show")
            setIsshowoption(true)
        }else{
            setShowoption("")
            setIsshowoption(false)
        }

    }
    const [currency,setCurrency]=useState('')
    const [currencyimg,setCurrencyimg]=useState(bitcoin)
    const [currencytext ,setCurrencytext]=useState("Bitcoin (BTC)")
    return (
        <div className='flex h-screen w-screen'>
            <div className='w-auto h-auto '>
                <SideBar hidden={hidden} img={sidebarimg} size={logosize} />

            </div>
            <div className='grow h-auto bg-custom-green signup-container lg:px-5  p-px-80px'>
                {/* <input className='hidden' value={}/> */}
                <div className='flex justify-end lg:justify-start items-center '>
                <FontAwesomeIcon icon={faBars} className='text-white text-25px mt-7 ms-4 mb-3 me-3' onClick={toggleSideBar}/>
                </div>
                <div className='w-full flex justify-between flex-col lg:flex-row'>
                    <div className='w-full lg:w-8/12 gap-4   p-0 lg:pe-4'>
                        <div className='bg-primary p-32 rounded-3xl shadow-custom-shadow'>
                            <div>
                                <h4 class="text-white text-24 oss-font-family font-medium">
                                    Select your currency and the amount you want to invest
                                </h4>
                            </div>

                            <div>
                                <p className='text-white text-lg font-light'>You can buy DST tokens using the below currency options.</p>  
                            </div>
                            <div className='relative mt-2'>
                                <div className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-lg min-h-12 text-white input-border relative flex justify-start items-center ipm-font-family' onClick={showOptionfunc}>
                                    <input className='hidden' value={currency}/>
                                    <img src={currencyimg} className='w-5'/>
                                    <div className='ms-3'>{currencytext}</div>
                                    <FontAwesomeIcon icon={faAngleDown} className='absolute top-4 right-3'/>
                                </div>
                                <div className={`w-full text-white ipm-font-family bg-primary z-10 dropdown-option ${showoption} `}>
                                  <ul>
                                    <li className='flex justify-start items-center px-4 leading-5 text-lg' onClick={()=>{
                                        setCurrency('btc')
                                        setCurrencyimg(bitcoin)
                                        setCurrencytext("Bitcoin (BTC)")
                                    }}>
                                    <img src={bitcoin} className='w-5'/>
                                    <div className='ms-3'>Bitcoin (BTC)</div>
                                    </li>
                                    <li className='flex justify-start items-center px-4 leading-5 text-lg' onClick={()=>{
                                        setCurrency('eth')
                                        setCurrencyimg(ethereum)
                                        setCurrencytext("Ethereum (ETH)")
                                    }}>
                                    <img src={ethereum } className='w-5'/>
                                    <div className='ms-3'>Ethereum (ETH)</div>
                                    </li>
                                    <li className='flex justify-start items-center px-4 leading-5 text-lg' onClick={()=>{
                                        setCurrency('usdterc20')
                                        setCurrencyimg(tetherEr)
                                        setCurrencytext("Tether ERC20 (USDTERC20)")
                                    }}>
                                    <img src={tetherEr} className='w-5'/>
                                    <div className='ms-3'>Tether ERC20 (USDTERC20)</div>
                                    </li>
                                    <li className='flex justify-start items-center px-4 leading-5 text-lg' onClick={()=>{
                                        setCurrency('usdttrc20')
                                        setCurrencyimg(tetherTr)
                                        setCurrencytext("Tether TRC20 (USDTTRC20)")
                                    }}>
                                    <img src={tetherTr} className='w-5'/>
                                    <div className='ms-3'>Tether TRC20 (USDTTRC20)</div>
                                    </li>
                                    <li className='flex justify-start items-center px-4 leading-5 text-lg' onClick={()=>{
                                        setCurrency('bnbbsc')
                                        setCurrencyimg(bnb)
                                        setCurrencytext("BNB smart chain (BNBBSC)")
                                    }}>
                                    <img src={bnb} className='w-5'/>
                                    <div className='ms-3'>BNB smart chain (BNBBSC)</div>
                                    </li>
                                    <li className='flex justify-start items-center px-4 leading-5 text-lg' onClick={()=>{
                                        setCurrency('usdc')
                                        setCurrencyimg(usdc)
                                        setCurrencytext("USDC Coin (USDC)")
                                    }}>
                                    <img src={usdc} className='w-5'/>
                                    <div className='ms-3'> USDC Coin (USDC)</div>
                                    </li>
                                    <li className='flex justify-start items-center px-4 leading-5 text-lg' onClick={()=>{
                                        setCurrency('doge')
                                        setCurrencyimg(dogecoin)
                                        setCurrencytext("Dogecoin (DOGE)")
                                    }}>
                                    <img src={dogecoin} className='w-5'/>
                                    <div className='ms-3'> Dogecoin (DOGE)</div>
                                    </li>
                                    <li className='flex justify-start items-center px-4 leading-5 text-lg' onClick={()=>{
                                        setCurrency('shib')
                                        setCurrencyimg(shiba)
                                        setCurrencytext("Shiba Inu (SHIB)")
                                    }}>
                                    <img src={shiba} className='w-5'/>
                                    <div className='ms-3'>  Shiba Inu (SHIB)</div>
                                    </li>
                                    <li className='flex justify-start items-center px-4 leading-5 text-lg ' onClick={()=>{
                                        setCurrency('sol')
                                        setCurrencyimg(solana)
                                        setCurrencytext("Solana (SOL)")
                                    }}>
                                    <img src={solana} className='w-5'/>
                                    <div className='ms-3'>  Solana (SOL)</div>
                                    </li>
                                  </ul>
                                    
                                </div>

               
                            </div>

                            <div className='mt-4 mb-2'>
                                <h4 class="text-white text-24 oss-font-family font-medium">
                                    Amount to invest
                                </h4>
                            </div>
                            <div><p className='text-white text-lg font-light'>Enter the amount you would like to contribute in order to calculate the amount of tokens you will receive. The calculator below helps to convert the required quantity of tokens into the amount of your selected currency.</p>
                            </div>
                            <div className='flex pb-2 ipm-font-family mt-4'>
                                <div className='relative self-center w-36 '>
                                    <input className='p-p-10-45px input-bordered' value={'10'}/>
                                    <div className='token-pay-currency '>
                                        <span className='input-hint '>
                                        USD
                                        </span>
                                    </div>
                                </div>
                                <div className='inline-flex items-center'>
                                    <div className='text-white mx-2 text-xl'>=</div>
                                    <div className='token-eq-sign'>
                                        <h5 className='text-white text-lg font-bold leading-6 oss-font-family'>0.003</h5>
                                        <div className='uppercase text-12'>eth</div>
                                    </div>
                                    <div className='text-white mx-2 text-xl'>=</div>
                                    <div className='token-eq-sign'>
                                        <h5 className='text-white text-lg font-bold leading-6 oss-font-family'>250</h5>
                                        <div className='uppercase text-12'>dst</div>
                                    </div>
                                    
                                </div>
                                

                            </div>
                            <div className='ps-4 bg-transparent rounded relative leading-5 ipm-font-family pb-2 my-2'>
                                <div className='w-full flex items-center'>
                                    <span className='relative'><FontAwesomeIcon icon={faCircleInfo} className=' text-white'/></span>
                                   <span className='text-#758698-light ms-3'> <strong>0</strong> <span className='text-white'>eth</span> ( <strong>100</strong> <span className='text-white'>DST</span> )
                                    Minimum contribution amount is required.
                                    </span> 
                                </div>
                            </div>
                            <div className='token-overview ipm-font-family my-6'>
                                <div className='flex flex-wrap p-px-15px'>
                                    <div className='col-md-4 '>
                                        <div className='relative py-6'>
                                        <span class="token-overview-title text-white"> Amount purchased </span>
                                        <span class="block font-bold leading-5 text-custom-green text-14">250</span>
                                         </div>
                                    </div>
                                    <div className='col-md-4 '>
                                        <div className='relative py-6'>
                                        <span class="token-overview-title text-white"> + 15% Sale Bonus</span>
                                        <span class="block font-bold leading-5 text-custom-green text-14">37.5</span>
                                         </div>
                                    </div>
                                    <div className='col-md-4 '>
                                        <div className='relative py-6'>
                                        <span class="token-overview-title text-white"> Total DST</span>
                                        <span class="block font-bold leading-5 text-custom-green text-14">287.5</span>
                                         </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div>
            <div class=" mt-3">
                <input type="checkbox" class="" id="agree-terms" />
                <label for="agree-terms" className='text-white text-lg font-light ms-3'>I hereby agree to the token purchase agreement and token sale terms.</label>
            </div>
           
            <div className='mt-6'><ButtonCustomGreen text={'Buy Tokens'}/></div>
        
            

        </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-4/12  my-5 lg:mt-0 '>
                        <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <div class="bg-primary  min-h-240 p-32 rounded-3xl shadow-custom-shadow">
                                <div className='flex items-center mb-8 mt-2'>
                                    <div className='h-14 w-14 rounded-full shrink justify-center items-center inline-flex me-4 bg-custom-white'>
                                        <img src={tokenSymbol} className='w-32px ' />
                                    </div>
                                    <div>
                                        <h6 className='text-custom-green text-14 mt-1 uppercase tracking-wider leading-5 font-medium block mb-3 oss-font-family'>Token Balance</h6>
                                        <span className='text-white font-medium text-2xl leading-4 tracking-tighter ipm-font-family '>0
                                            <span className='font-medium text-xs tracking-wider mx-3'>DST
                                                <em></em>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className='pb-12'>
                                    <h6 className='text-custom-green text-14 mt-1 uppercase tracking-wider leading-5 font-medium block mb-2 oss-font-family'>Your Contribution in</h6>
                                    <ul className='flex text-white ipm-font-family '>
                                        <li className='w-auto me-12 lg:min-w-33%'><span className='font-medium text-s tracking-wider mx-3'>~</span><span className='block text-14 leading-4'>USD</span></li>
                                        <li className='w-auto me-12 lg:min-w-33%'><span className='font-medium text-s tracking-wider mx-3'>~</span><span className='block text-14 leading-4'>ETH</span></li>
                                        <li className='w-auto me-12 lg:min-w-33%'><span className='font-medium text-s tracking-wider mx-3'>~</span><span className='block text-14 leading-4'>BTC</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="bg-primary  min-h-240 p-32 rounded-3xl shadow-custom-shadow">
                                <h6 className='text-white text-24 pb-3 oss-font-family'>Stage One</h6>
                                <span className='uppercase text-#758698-light block text-12 font-medium mb-1 leading-6'>DST Token Price</span>
                                <h3 className='text-white text-24 font-medium oss-font-family'>1 DST <span className='text-custom-green'> = 0.04 USD</span>
                                </h3>
                                <div className='flex  justify-between items-center mt-3 w-5/12 lg:w-full'>
                                    <div>
                                        <span className='uppercase text-#758698-light block text-12 font-medium  leading-6'>Current Bonus
                                        </span>
                                        <div className='text-white text-24  oss-font-family'>15%</div>
                                    </div>
                                    <div className='font-normal italic text-#758698-light block text-12'>End at<br />03 Mar, 2024</div>
                                </div>

                            </div>
                            <div class="bg-primary min-h-240   p-32 rounded-3xl shadow-custom-shadow ">
                                <div className='pt-2'><h5 className='text-white text-24 pb-3 oss-font-family'>Token Sales Progress</h5></div>
                                <ul className='flex  flex-col lg:flex-row justify-between'>
                                    <li className='font-14 uppercase font-medium leading-6 text-#cbcbcb-light mt-2'><span className='text-white block text-14 .ipm-font-family '>Raised Amount</span>14,144,814 DST</li>
                                    <li className='font-14 uppercase font-medium leading-6 text-#cbcbcb-light mt-2'><span className='text-white block font-14 .oss-font-family'>Total Token</span>35,000,000 DST</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Contribute
