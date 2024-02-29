import React from 'react'
import { tokenSymbol } from '../assets'
import { ButtonGreen } from '../components/Button'
import { Link } from 'react-router-dom'
import { rightArrow,twitterLogo,telegramLogo,sideBarlogo ,logoLight2x} from '../assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink,faBars} from "@fortawesome/free-solid-svg-icons";
import {faCopy} from "@fortawesome/free-regular-svg-icons";
import SideBar from '../components/SideBar'
import { useState,useEffect } from 'react'
import './User.css'


const User = () => {
    const [hidden, setHidden]=useState('')
    const [istoggle, setIstoggle]=useState(false)
    const [sidebarimg,setSidebarimg]=useState(logoLight2x)
    const [logosize,setLogosize]=useState('180px')
    const toggleSideBar=()=>{
       if(!istoggle){
        setHidden('hidden')
        setIstoggle(true)
        setSidebarimg(sideBarlogo)
        setLogosize('32px')
       }else{
        setHidden("")
        setIstoggle(false)
        setSidebarimg(logoLight2x)
        setLogosize('180px')
       }

    }
    // --------------------
    const [clipboard ,setClipboard]=useState('hidden')
    const copylink = () => {
        navigator.clipboard.writeText("https://invest.deestream.com/invite?ref=UD05084");
        setClipboard("")
        setTimeout(() => {
            setClipboard("hidden")
        }, 1000);
       
      }
      useEffect(()=>{
        if(!(localStorage.getItem("token"))){
          window.location.href = '/login';
        }
      },[])
    return (
        <div className='flex h-screen w-screen'>
            <div className='w-auto h-auto '>
                <SideBar hidden={hidden} img={sidebarimg} size={logosize}/>

            </div>
            <div className='grow h-auto bg-custom-green signup-container lg:px-5  p-px-80px'>
                <div className='flex justify-end lg:justify-start items-center '>
                <FontAwesomeIcon icon={faBars} className='text-white text-25px mt-7 ms-4 mb-3 me-3' onClick={toggleSideBar}/>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
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
                            <ul className='flex text-white ipm-font-family  '>
                                <li className='w-auto me-12 lg:min-w-33%'><span className='font-medium text-s tracking-wider mx-3'>~</span><span className='block text-14 leading-4'>USD</span></li>
                                <li className='w-auto me-12 lg:min-w-33%'><span className='font-medium text-s tracking-wider mx-3'>~</span><span className='block text-14 leading-4'>ETH</span></li>
                                <li className='w-auto me-12 lg:min-w-33%'><span className='font-medium text-s tracking-wider mx-3'>~</span><span className='block text-14 leading-4'>BTC</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-primary  min-h-240 p-32 rounded-3xl shadow-custom-shadow">
                        <h6 className='text-white text-24 pb-3 oss-font-family'>Stage One
                            <span className='uppercase ms-1.5 bg-#00d285-green badge'>running</span>
                        </h6>
                        <h3 className='text-custom-green text-24 font-medium oss-font-family'>1 DST = 0.04 USD
                            <span className='text-14 block uppercase ipm-font-family font-medium text-#cbcbcb-light'>1 USD = 0.00034 ETH</span>
                        </h3>
                        <div className='mt-6'>
                            <ButtonGreen path={'#'} text={'Buy Now'} />
                        </div>
                    </div>
                    <div class="bg-primary  min-h-240 p-32 rounded-3xl shadow-custom-shadow">
                        <div>
                            <h6 className='text-white text-24 pb-3 oss-font-family '>Your Account Status</h6>
                            <div className='h-2'></div>
                            <ul className='inline-flex items-center flex-wrap oss-font-family m-m-minus ipm-font-family text-14 '><li className='m-m-plus bg-white hover:bg-#00d285-green px-2 py-1 rounded-md'>verified</li></ul>
                            <div className='h-7'></div>
                            <div>
                                <h6 className='text-white text-24 pb-3 oss-font-family '>Receiving Wallet</h6>
                                <div className='h-1 text-12 flex justify-between  ipm-font-family text-white '>
                                    Add Your Wallet Address
                                    <Link className='nline-flex uppercase text-12 font-bold items-center '>ADD</Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
                    <div class="bg-primary  min-h-396 p-32 rounded-3xl shadow-custom-shadow lg:my-12">
                        <div className='pt-2'><h5 className='text-white text-24 pb-3 oss-font-family'>Token Sales Progress</h5></div>
                        <ul className='flex justify-between'>
                            <li className='font-14 uppercase font-medium leading-6 text-#cbcbcb-light'><span className='text-white block text-14 .ipm-font-family '>Raised Amount</span>14,144,814 DST</li>
                            <li className='font-14 uppercase font-medium leading-6 text-#cbcbcb-light'><span className='text-white block font-14 .oss-font-family'>Total Token</span>35,000,000 DST</li>

                        </ul>
                        <div className='progress-bar '>
                        <div class="progress-percent " data-percent="46.5"  ></div>
                        </div>
                    </div>
                    <div class="bg-primary  min-h-396 p-32 rounded-3xl shadow-custom-shadow lg:my-12">
                        <div className='ipm-font-family text-white text-19'>
                            Invite your friends and family and receive free tokens. The referral link may be used during a token contribution, in the pre-sale and the ICO.
                            <br />
                            Check your referrals <Link className='text-custom-green'> Here</Link>!
                            <div className='h-2'></div>
                            <div>
                                <h4 className='text-white text-24 font-medium oss-font-family mt-8'>Referral URL</h4>
                                <div className='ipm-font-family relative justify-between items-center bg-white flex  py-3 px-2 rounded mt-4 mb-3'>
                                    <FontAwesomeIcon icon={faLink} className='text-#000-black text-14' />
                                    <input className='border-none leading-5 rounded bg-white w-full text-ligh-black overflow-visible text-19' type='text' value={'https://invest.deestream.com/invite?ref=UD05084'} disabled/>
                                    <div className={`text-ligh-black text-19 absolute right-1 clipboard  w-11/12 text-center ${clipboard} `}>copied to clipboard</div>
                                    <button type='button' className='bg-custom-green absolute right-1 top-1 p-2  text-center rounded border-none cursor-pointer leading-5 w-38px h-38px '><FontAwesomeIcon icon={faCopy} className='text-#000-black text-14' onClick={copylink}/></button>

                                </div>
                                <p className='text-#758698-light ipm-font-family text-base'>Use above link to refer your friend and get referral bonus.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-primary  min-h-396 p-32 rounded-3xl shadow-custom-shadow lg:my-12">
                        <div>
                            <h5 className='text-white text-24 font-medium oss-font-family '>Our community</h5>
                        </div>
                        <div className='mt-4'>
                            <a className='' href='https://twitter.com/deestreamlive'>
                                <div className='flex justify-between items-center p-3 trans-black rounded-3xl  text-white bg-trans-black'>
                                <div className='flex items-center gap-4'>
                                    <div className='h-40px w-40px bg-#322d2d-black p-3 rounded-xl flex justify-center items-center'><img src={twitterLogo} className='w-3 w-22px'/></div>
                                    <p className='text-custom-green font-bold text-lg leading-6 oss-font-family'>Twitter</p>
                                </div>
                                <img src={rightArrow} className='w-3'/>
                               </div>
                            </a>
                            <div className='h-2'></div>
                            <a className='' href='https://t.me/deestreamlive'>
                                <div className='flex justify-between items-center p-3 trans-black rounded-3xl  text-white bg-trans-black'>
                                <div className='flex items-center gap-4'>
                                    <div className='h-40px w-40px bg-#322d2d-black p-3 rounded-xl flex justify-center items-center'><img src={telegramLogo} className='w-3 w-22px'/></div>
                                    <p className='text-custom-green font-bold text-lg leading-6 ipm-font-family'>Telegram</p>
                                </div>
                                <img src={rightArrow} className='w-3'/>
                               </div>
                            </a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default User
