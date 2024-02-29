import React from 'react'
import { Link } from 'react-router-dom'
import { sideBarlogo, logoLight2x } from '../assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleInfo, faLink } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import SideBar from '../components/SideBar'
import { useState } from 'react'
import { ButtonUpdate } from '../components/Button';

const Balance = () => {
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
    const [clipboard ,setClipboard]=useState('hidden')
    const copylink = () => {
        navigator.clipboard.writeText("https://invest.deestream.com/invite?ref=UD05084");
        setClipboard("")
        setTimeout(() => {
            setClipboard("hidden")
        }, 1000);
       
      }
    return (
        <div className='flex h-screen w-screen'>
            <div className='w-auto h-auto '>
                <SideBar hidden={hidden} img={sidebarimg} size={logosize} />

            </div>
            <div className='grow h-auto bg-custom-green signup-container lg:px-5  p-px-80px '>
                <div className='flex justify-end lg:justify-start items-center '>
                <FontAwesomeIcon icon={faBars} className='text-white text-25px mt-7 ms-4 mb-3 me-3' onClick={toggleSideBar}/>
                </div>

                <div className='w-full flex justify-between flex-col lg:flex-row'>
                    <div className='w-full lg:w-8/12 gap-4   p-0 lg:pe-4'>
                        <div class="bg-primary p-32 rounded-3xl shadow-custom-shadow w-full ">
                            <div className=''>
                                <h4 className='text-white text-24 font-medium oss-font-family '>My DST Token</h4>

                                <div className='balance-border rounded'>
                                    <div >

                                        <div class="flex wrap p-32 flex-col sm:flex-row">
                                            <div class=" flex w-4/6 pt-2 pb-2">
                                                <div class="text-white ">
                                                    <h6 class=" font-medium uppercase mb-1.5 ipm-font-family text-xl ">Token Balance</h6>
                                                    <span class="font-normal text-2xl block leading-4 my-3 ipm-font-family">0 DST </span>
                                                    <p class="text-sm">Equivalent to <span>0 USD</span></p>
                                                </div>
                                            </div>
                                            <div class=" ">
                                                <ButtonUpdate text={"Buy More Token"} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='sap-light'></div>
                                    <div >

                                        <div class=" p-32 ipm-font-family ">

                                            <div class="text-white">
                                                <h5 class="font-medium uppercase mb-1.5 text-lg">Total Token Amount</h5>
                                                <span class="font-normal text-xl block leading-4 my-3">0 DST</span>
                                            </div>
                                              <div class="total-block">
                                                <ul class=" flex flex-wrap w-4/6 justify-between mt-2">
                                                    <li className='text-white '>
                                                        <span class="text-sm font-normal">Purchased Token</span>
                                                        <span class="block text-sm font-medium leading-4">0 DST</span>
                                                    </li>
                                                    <li className='text-white '>
                                                        <span class="text-sm font-normal">Referral Token</span>
                                                        <span class="block text-sm font-medium leading-4">0 DST</span>
                                                    </li>
                                                    <li className='text-white '>
                                                        <span class="text-sm font-normal">Bonuses Token</span>
                                                        <span class="block text-sm font-medium leading-4">0 DST</span>
                                                    </li>
                                                </ul>
                                            </div> 

                                        </div>

                                    </div>
                                    <div className='sap-light'></div>

                                     <div>

                                <div class=" p-32 ipm-font-family text-white">
                                <h5 class="font-medium uppercase mb-1.5 text-lg">Total Contributed</h5>
                                 <span class="font-normal text-xl block leading-4 my-3">0 USD</span>
                                </div>
                            
                                     </div>
                                </div>

                            </div>


                        </div>


                    </div>
                    <div className='w-full lg:w-4/12  my-5 '>
                        <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
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

                            <div class="bg-primary  min-h-240 p-32 rounded-3xl shadow-custom-shadow">
                                <div>
                                    <div className='flex justify-between items-center'>
                                        <h4 className='text-white text-24 font-medium oss-font-family '>Referral URL</h4>
                                        <span><Link className='text-white text-12  font-bold oss-font-family'>MORE </Link></span>
                                    </div>
                                    <p className='ipm-font-family text-white text-19 mt-3'>
                                        Invite your friends & family.
                                    </p>
                                    <div className='ipm-font-family relative justify-between items-center bg-white flex  py-3 px-2 rounded mt-4 '>
                                        <FontAwesomeIcon icon={faLink} className='text-#000-black text-14' />
                                        <input className='border-none leading-5 rounded bg-white w-full text-ligh-black overflow-visible text-19' type='text' value={'https://invest.deestream.com/invite?ref=UD05084'} disabled />
                                        <div className={`text-ligh-black text-19 absolute right-1 clipboard  w-11/12 text-center ${clipboard} `}>copied to clipboard</div>
                                        <button type='button' className='bg-custom-green absolute right-1 top-1 p-2  text-center rounded border-none cursor-pointer leading-5 w-38px h-38px '><FontAwesomeIcon icon={faCopy} className='text-#000-black text-14' onClick={copylink} /></button>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Balance
