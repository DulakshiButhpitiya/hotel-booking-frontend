import React from 'react'
import './register.css'
import { useState } from 'react'
import axios from 'axios'


const RegisterPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    function handleRegister(){
        axios.post("http://localhost:5000/api/users/register",{firstName:firstName,lastName:lastName,email:email,phone:phone,password:password,confirmPassword:confirmPassword}).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        }
        )
    
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')
    // const [phone, setPhone] = useState('')
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // function handleRegister(){
    //     axios.post("http://localhost:5000/api/users/register",{
    //         email:email,
    //         password:password,
    //         confirmPassword:confirmPassword,
    //         phone:phone,

        }

        

  return (
    <div className='w-full h-[100vh] pic-big flex justify-center items-center '>
        <div className='w-[400px] h-[600px] backdrop-blur-lg rounded-lg flex flex-col items-center justify-center relative'>
            <h1 className='text-3xl p-[15px] text-white absolute top-[20px] text-center mb-20'>Register</h1>
            <input placeholder="Enter your first name" className='w-[80%] bg-[#00000000] border-[1px] text-white border-[#] placeholder:text-white h-[50px] px-[5px] mb-5' 
            defaultValue={firstName}
            onChange={(e)=>setFirstName(e.target.value)}/>
            
            <input placeholder="Enter your last name" className='w-[80%] bg-[#00000000] border-[1px] text-white border-[#] placeholder:text-white h-[50px] px-[5px] mb-5' 
            defaultValue={lastName}
            onChange={(e)=>setLastName(e.target.value)}/>
            
            <input placeholder="Enter your email" className='w-[80%] bg-[#00000000] border-[1px] text-white border-[#] placeholder:text-white h-[50px] px-[5px] mb-5' 
            defaultValue={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            
            <input type="number" placeholder="Enter your phone number" className='w-[80%] bg-[#00000000] border-[1px] text-white border-[#] placeholder:text-white h-[50px] px-[5px] mb-5' 
            defaultValue={phone}
            onChange={(e)=>setPhone(e.target.value)}/>
            
            <input type="password" placeholder="Enter your password" className='w-[80%] bg-[#00000000] border-[1px] text-white border-[#] placeholder:text-white h-[50px] px-[5px] mb-5' 
            defaultValue={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            
            <input type='password' placeholder="Confirm your password" className='w-[80%] bg-[#00000000] border-[1px] text-white border-[#] placeholder:text-white h-[50px] px-[5px] mb-5' 
            defaultValue={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}/>
            
            <button className='w-[80%] absolute bottom-[40px] bg-gray-600 text-white h-[50px]'>Register</button>
        </div>
    </div>
  )
}

export default RegisterPage