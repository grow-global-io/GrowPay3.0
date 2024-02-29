import React, { useState,useEffect } from 'react'
import { logo2x } from '../assets'
import { Link } from 'react-router-dom'
import axios from 'axios'
const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const signUpFunc = async () => {
    if (!username) {
      alert("please enter user name")
      return
    }
    if (!email) {
      alert("please enter email")
      return
    }
    if (!password) {
      alert("please enter password")
      return
    }
    if (!repassword) {
      alert("please enter repeat password")
      return
    }
    if (password != repassword) {
      alert("password should be same")
      return
    }
    // try {
      const response = await axios.post('http://localhost:8080/signup', {
        username: username,
        email: email,
        password: password,
      })
      if (response?.data?.data) {
        alert("account created succefully")
        window.location.href = '/user'
      } else {
        alert(response?.data?.message)
      }
    // } catch (err) {
    //   console.log(err)
    // }

  }
  useEffect(()=>{
    if((localStorage.getItem("token"))){
      window.location.href = '/user';
    }
  },[])
  return (
    <div className='max-width bg-black min-h-screen h-auto signup-container flex justify-center items-center'>
      <div className='signup-subcontainer h-auto bg-primary shadow-custom-shadow py-9 px-11 rounded-3xl'>
        <div ><img src={logo2x} className='block mx-auto w-48' /></div>
        <div>
          <h2 className='font-bold text-24 text-white mb-4'>Sign up</h2>
          <small className='text-custom-green text-14 font-bold leading-5 tracking-widest'>Create your Account</small>
        </div>
        {/* <form> */}
        <div className='flex w-full justify-between flex-wrap gap-6 mt-8'>
          <div className='pb-0  input-parent-width'><input type='text' placeholder='Your Username' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-xl min-h-12 text-white input-border' value={username} onChange={(e) => {
            setUsername(e.target.value)
          }}  /></div>
          <div className='pb-0  input-parent-width'><input type='email' placeholder='Your Email' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-xl min-h-12 text-white input-border' value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}  /></div>
          <div className='pb-0  input-parent-width'><input type='password' placeholder='Password' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-xl min-h-12 text-white input-border' value={password}  onChange={(e) => {
            setPassword(e.target.value)
          }} /></div>
          <div className='pb-0  input-parent-width'><input type='password' placeholder='Repeat Password' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-xl min-h-12 text-white input-border'value={repassword}  onChange={(e) => {
            setRepassword(e.target.value)
          }} /></div>

        </div>
        <div className='w-full py-6'>
          <input type='checkbox' id='check' />
          <label className='text-white text-lg ms-4' htmlFor='check'>I agree to the <Link className='text-custom-green'>Terms & Conditions</Link>  and <Link className='text-custom-green'>Privacy Policy </Link></label>
        </div>
        <div className='w-full'><button className='w-full h-12 rounded-full  px-4 leading-5 text-xl min-h-12 text-black bg-custom-green' type='button' onClick={signUpFunc}>Create Account</button></div>
        <div className='h-12'></div>
        <div className='text-lg text-center mt-4 text-white'>Already have an account? <Link className='text-custom-green' to={'/login'}>Sign in</Link>  instead </div>
        {/* </form> */}

      </div>
    </div>
  )
}

export default SignUp
