import React, { useEffect } from 'react'
import { logo2x} from '../assets'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Login= () => {
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const loginFunc=async ()=>{
     
      if(!email){
        alert("please enter email")
        return
      }
      if(!password){
        alert("please enter password")
        return
      }
      try{
      const response=await axios.post('http://localhost:8080/login', {
        email:email,
        password:password,
       })
       if (response?.data?.token) {
        // Store token in local storage or cookies
        localStorage.setItem('token', response.data.token);
        alert("User logged in successfully");
        // Redirect to user page
        window.location.href = '/user';
    } else {
        setError(response?.data?.message || "Login failed");
    }
     }catch(err){
      console.log(err)
     }
  
    }
    useEffect(()=>{
      if((localStorage.getItem("token"))){
        window.location.href = '/user';
      }
    },[])
  return (
    <div className='max-width bg-black min-h-screen h-auto signup-container flex justify-center items-center'>
    <div className='login-subcontainer h-auto bg-primary shadow-custom-shadow py-14 px-11 rounded-3xl'>
       <div ><img src={logo2x} className='block mx-auto w-48'/></div>
       <div>
           <h2 className='font-bold text-24 text-white mb-4'>Sign in</h2>
       </div>
       <form>
            <div className='flex w-full justify-between flex-wrap gap-6 mt-8'>
               <div className='pb-0  w-full'><input type='email' placeholder='Your Username' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-xl min-h-12 text-white input-border'value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }} /></div>
               <div className='pb-0  w-full'><input type='password' placeholder='Your Email' className='w-full h-12 rounded-full bg-transparent px-4 leading-5 text-xl min-h-12 text-white input-border' value={password}  onChange={(e)=>{
                  setPassword(e.target.value)
                }} /></div>
            </div>
            <div className='w-full py-6 flex justify-between'>
               <div>
               <input type='checkbox' id='check'/>
               <label className='text-white text-lg ms-4' htmlFor='check'>Remember me</label>
               </div>
               <div className='text-lg'>
              <Link className='text-custom-green'>Forgot password?</Link> 

               </div>
              
            </div>
            <div className='w-full'><button className='w-full h-12 rounded-full  px-4 leading-5 text-xl min-h-12 text-black bg-custom-green'type='button' onClick={loginFunc} >Sign in</button></div>
        
            <div className='text-lg text-center mt-4 text-white'>Don’t have an account? <Link className='text-custom-green' to={'/signup'}>Sign up here</Link>   </div>
       </form>

    </div>
   </div>
  )
}

export default Login
