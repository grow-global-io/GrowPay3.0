import React from 'react'
import { Link } from 'react-router-dom'
import { sideBarlogo, logoLight2x } from '../assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SideBar from '../components/SideBar'
import { useState } from 'react'
import './Transactions.css'

const Transactions = () => {
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
    return (
        <div className='flex h-screen w-screen'>
            <div className='w-auto h-auto '>
                <SideBar hidden={hidden} img={sidebarimg} size={logosize} />

            </div>
            <div className='grow h-auto bg-custom-green signup-container lg:px-5  p-px-80px '>
                <div className='flex justify-end lg:justify-start items-center '>
                    <FontAwesomeIcon icon={faBars} className='text-white text-25px mt-7 ms-4 mb-3 me-3' onClick={toggleSideBar} />
                </div>

                <div className='bg-primary p-32 rounded-3xl shadow-custom-shadow w-full'>
                    <div className='mt-4 mb-2'>
                        <h4 class="text-white text-24 oss-font-family font-medium"> Transactions list </h4>
                    </div>
                    <div className='h-3'></div>
                    
                    <div className='w-full overflow-scroll ipm-font-family text-white'>
                        <div>
                            <div className='flex justify-between mb-4'>
                                <div class="col-sm-6 text-left">
                                    <div  class="dataTables_filter lg:text-left">
                                        <label className='w-full relative font-normal text-left whitespace-nowrap inline-block'>
                                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                            <input type="search" class="w-full p-p-8-30 leading-6 text-sm bg-transparent ms-2 h-auto" placeholder="Type in to Search" aria-controls="DataTables_Table_0" />
                                        </label>
                                    </div>
                                </div>
                                <div className='flex flex-wrap text-white'>
                        <div className='w-full relative col-md-12'>
                            <div className='relative'><Link className='btn-xs btn-icon'><FontAwesomeIcon icon={faGear}/></Link></div>
                        </div>
                    </div>
                            </div>
                        </div>
                        <table className='dataTable w-full overflow-x-scroll text-white'>

<thead>
<tr class="data-item data-head bg-black-opacity rounded relative" role="row">
 <th class="px-4 pb-3 text-base leading-5 font-bold" rowspan="1" colspan="1">Tranx NO</th>
 <th class="px-4 pb-3 text-base leading-5 font-bold " rowspan="1" colspan="1">Tokens</th>
 <th class="px-4 pb-3 text-base leading-5 font-bold" rowspan="1" colspan="1">Amount</th>
 <th class="px-4 pb-3 text-base leading-5 font-bold" rowspan="1" colspan="1">USD Amount</th>
 <th class="px-4 pb-3 text-base leading-5 font-bold" rowspan="1" colspan="1">To</th>
 <th class="px-4 pb-3 text-base leading-5 font-bold" rowspan="1" colspan="1">
 <div class="dt-type-text">Type</div></th><th class="data-col sorting_disabled" rowspan="1" colspan="1">
 </th>
 </tr>
 </thead>
 <tbody>
 <tr class="data-item data-head bg-black-opacity rounded relative  ">
 <td valign="top" colspan="7" class="text-center bg-primary rounded p-p-td">No data available in table</td>
 </tr>
 </tbody>
 </table>

                    </div>
                   

                </div>

            </div>

        </div>
    )
}

export default Transactions
