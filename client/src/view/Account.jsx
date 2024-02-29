import React from 'react'
import { Link } from 'react-router-dom'
import { sideBarlogo, logoLight2x } from '../assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleInfo, faLink } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import SideBar from '../components/SideBar'
import { useState } from 'react'
import { ButtonUpdate } from '../components/Button';

import './Account.css'
const Account = () => {
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
    const [prsnldata, setPrsnldata] = useState('')
    const [pdactive, setPdactive] = useState("proactive")
    const [setting, setSetting] = useState('hidden')
    const [sactive, setSactive] = useState("")
    const [password, setPassword] = useState('hidden')
    const [pwactive, setPwactive] = useState("  ")
    const showPrsnlData = () => {
        setPrsnldata("")
        setSetting("hidden")
        setPassword("hidden")
        setPdactive("proactive")
        setSactive("")
        setPwactive("")

    }
    const showSetting = () => {
        setPrsnldata("hidden")
        setSetting("")
        setPassword("hidden")
        setPdactive("")
        setSactive("proactive")
        setPwactive("")
    }
    const showPassword = () => {
        setPrsnldata("hidden")
        setSetting("hidden")
        setPassword("")
        setPdactive("")
        setSactive("")
        setPwactive("proactive")
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
                    <FontAwesomeIcon icon={faBars} className='text-white text-25px mt-7 ms-4 mb-3 me-3' onClick={toggleSideBar} />
                </div>
                <div className='w-full flex justify-between flex-col lg:flex-row'>
                    <div className='w-full lg:w-8/12 gap-4   p-0 lg:pe-4'>
                        <div class="bg-primary p-32 rounded-3xl shadow-custom-shadow w-full ">
                            <div className=''>
                                <h4 class="text-white text-24 oss-font-family font-medium">
                                    Amount to invest
                                </h4>
                            </div>
                            <ul className='flex flex-wrap list-none ipm-font-family text-white mb-5 account-border mt-3'>
                                <li class="mb-2.5 me-10">
                                    <span className={`uppercase py-2.5 px-1 font-medium text-#758698-light relative ${pdactive} cursor-pointer`} onClick={showPrsnlData}>Personal Data</span>
                                </li>
                                <li class="mb-2.5 me-10">
                                    <span className={`uppercase py-2.5 px-1 font-medium text-#758698-light relative ${sactive} cursor-pointer`} onClick={showSetting} >Settings</span>
                                </li>
                                <li class="mb-2.5 ">
                                    <span className={`uppercase py-2.5 px-1 font-medium text-#758698-light relative ${pwactive} cursor-pointer`} onClick={showPassword}>Password</span>
                                </li>

                            </ul>
                            <div className={prsnldata}>
                                <div className='flex w-full justify-between flex-wrap gap-6 mt-8'>
                                    <div className='pb-0  input-parent-width flex flex-col '>
                                        <label className='leading-5 text-lg text-white ipm-font-family my-3' htmlFor='name'>Full name</label>
                                        <input type='text' id='name' placeholder='Your Username' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-lg min-h-12 text-white input-border ipm-font-family' />
                                    </div>
                                    <div className='pb-0  input-parent-width flex flex-col'>
                                        <label className='leading-5 text-lg text-white ipm-font-family my-3' htmlFor='email'>Email Address</label>
                                        <input type='email' id='email' placeholder='Your Email' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-lg min-h-12 text-white input-border ipm-font-family' />
                                    </div>
                                    <div className='pb-0  input-parent-width flex flex-col'>
                                        <label className='leading-5 text-lg text-white ipm-font-family my-3' htmlFor='number'>Mobile Number</label>
                                        <input type='text' id='number' placeholder='Enter Mobile Number' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-lg min-h-12 text-white input-border ipm-font-family' />
                                    </div>
                                    <div className='pb-0  input-parent-width flex flex-col'>
                                        <label className='leading-5 text-lg text-white ipm-font-family my-3' htmlFor='date'>Date of Birth</label>
                                        <input type='date' id='date' placeholder='mm/dd/yyyy' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-lg min-h-12 text-white input-border ipm-font-family' />
                                    </div>


                                </div>
                                <div className='mt-6'>
                                    <ButtonUpdate text={"Update Profile"} />
                                </div>
                            </div>

                            <div className={setting}>
                                <div>
                                    <h4 class="text-custom-green text-24 oss-font-family font-medium">
                                        Security setting
                                    </h4>
                                </div>
                                <div>
                                    <div className='flex items-center my-3'>
                                        <div className='flex'>
                                            <input type="checkbox" id="check" className='toggle-input' />
                                            <label for="check" class="button"></label>
                                        </div>
                                        <p className=' text-lg text-white ipm-font-family ms-3'> Save my activities log</p>
                                    </div>
                                    <div className='flex items-center my-7'>
                                        <div className='flex'>
                                            <input type="checkbox" id="check1" className='toggle-input' />
                                            <label for="check1" class="button"></label>
                                        </div>
                                        <p className=' text-lg text-white ipm-font-family ms-3'>Alert me by email in case of unusual activity in my account</p>
                                    </div>

                                </div>
                                <div className=''>
                                    <ButtonUpdate text={"Update"} />
                                </div>



                            </div>
                            <div className={password}>
                                <div className='flex w-full justify-between flex-wrap gap-6 mt-8'>
                                    <div className='pb-0  input-parent-width flex flex-col '>
                                        <label className='leading-5 text-lg text-white ipm-font-family my-3' htmlFor='oldpas'>Old Password</label>
                                        <input type='password' id='oldpas' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-lg min-h-12 text-white input-border ipm-font-family' />
                                    </div>
                                    <div className=' '>
                                        
                                    </div>
                                    <div className='pb-0  input-parent-width flex flex-col'>
                                        <label className='leading-5 text-lg text-white ipm-font-family my-3' htmlFor='newpas'>New Password</label>
                                        <input type='password' id='newpas' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-lg min-h-12 text-white input-border ipm-font-family' />
                                    </div>
                                    <div className='pb-0  input-parent-width flex flex-col'>
                                        <label className='leading-5 text-lg text-white ipm-font-family my-3' htmlFor='conpas'>Confirm New Password</label>
                                        <input type='password' id='conpas' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-lg min-h-12 text-white input-border ipm-font-family' />
                                    </div>
                                </div>
                                <div className='flex items-center blue mt-4'>
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                    <p className='ms-3 text-sm'>Password should be a minimum of 6 digits and include lower and uppercase letter.</p>
                                </div >
                                <div className='flex items-center red mt-2'>
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                    <p className='ms-3 text-sm'>Your password will only change after your confirmation by email.</p>
                                </div>
                                <div className='mt-8'>
                                    <ButtonUpdate text={"Update"} />
                                </div>

                            </div>
                        </div>
                        <div class="bg-primary p-32 rounded-3xl shadow-custom-shadow w-full gap-4 my-5">
                            <div className=''>
                                <h4 class="text-white text-24 oss-font-family font-medium">
                                    Amount to invest
                                </h4>
                            </div>
                            <p className='ipm-font-family text-white text-19 mt-3'>
                                Two-factor authentication is a method for protection of your account. When it is activated you are required to enter not only your password, but also a special code. You can receive this code in mobile app. Even if third party gets access to your password, they still won't be able to access your account without the 2FA code.
                            </p>
                            <div className='flex justify-between items-center mt-6'>
                                <div><ButtonUpdate text={"Enable 2FA"} /></div>
                                <span className='uppercase text-#758698-light flext items-center inline-flex ipm-font-family text-lg'>
                                    <span class="text-white"><small className='font-normal '>Current Status:</small></span> <span class="badge badge-disabled ms-2">Disabled</span>
                                </span>
                            </div>


                        </div>

                    </div>
                    <div className='w-full lg:w-4/12  '>
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
                                        <button type='button' className='bg-custom-green absolute right-1 top-1 p-2  text-center rounded border-none cursor-pointer leading-5 w-38px h-38px '><FontAwesomeIcon icon={faCopy} className='text-#000-black text-14' onClick={copylink}/></button>

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

export default Account
