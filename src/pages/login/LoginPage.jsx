import React from 'react'
import './login.css'
import { useState } from 'react'


const LoginPage = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

function handlelogin(){
  console.log(email, password)
}

  return (
    <div className='w-full h-[100vh] pic-bg flex justify-center items-center'>
      <div className='w-[400px] h-[400px] backdrop-blur-lg rounded-lg flex flex-col items-center justify-center relative'>
       
        <h1 className='text-3xl p-[15px] text-white absolute top-[40px] text-center'>Login</h1>
        <input placeholder="Enter your email address" className='w-[80%] bg-[#00000000] border-[1px]
         text-white border-[#] placeholder:text-white h-[50px] px-[5px] mb-5 ' defaultValue={email}
          onChange={(e) =>{ setEmail(e.target.value)}
  }
         />


        <input type="password" placeholder="Enter your password" className='w-[80%] bg-[#00000000] border-[1px]
         text-white border-[#] placeholder:text-white h-[50px] px-[5px]'
         defaultValue={password}
          onChange={(e) =>{ setPassword(e.target.value)}    
  }  />

         <button className='w-[80%] absolute bottom-[40px]  bg-gray-600 text-white h-[50px] 'onClick={handlelogin}>Login</button>
      </div>
    </div>
  )
}

export default LoginPage