import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-7xl text-center text-blue-400'>
      Hello world
    </h1>
    <Footer />
    </>
  )
}

export default App
