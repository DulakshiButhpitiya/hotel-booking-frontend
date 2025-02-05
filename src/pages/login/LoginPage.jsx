import React from 'react'
import './login.css'

const LoginPage = () => {
  return (
    <div className='w-full h-[100vh] pic-bg flex justify-center items-center'>
      <div className='w-[400px] h-[400px] backdrop-blur-lg rounded-lg flex flex-col items-center justify-center relative'>
       
        <h1 className='text-3xl p-[15px] text-white absolute top-[40px] text-center'>Login</h1>
        <input placeholder="Enter your email address" className='w-[80%] bg-[#00000000] border-[1px]
         text-white border-[#] placeholder:text-white h-[50px] px-[5px] mb-5'/>
        <input type="password" placeholder="Enter your password" className='w-[80%] bg-[#00000000] border-[1px]
         text-white border-[#] placeholder:text-white h-[50px] px-[5px]'/>

         <button className='w-[80%] absolute bottom-[40px]  bg-gray-600 text-white h-[50px] '>Login</button>
      </div>
    </div>
  )
}

export default LoginPage