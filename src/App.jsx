import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import ChooseUsSection from './view/ChooseUsSection'
import HowWorkSection from './view/HowWorkSection'
import PowerfulTokenSection from './view/PowerfulTokenSection'
import BenefintsSection from './view/BenefintsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-7xl text-center text-blue-400'>
      Hello world
    </h1>
    <ChooseUsSection/>
 <HowWorkSection/>
 <PowerfulTokenSection/>
 <BenefintsSection/>

    <FAQ />
    <Footer />
    </>
  )
}

export default App
