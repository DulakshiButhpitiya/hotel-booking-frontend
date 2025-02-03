import React from 'react'
import Header from '../../components/Header'

const HomePage = () => {
  return (
    <div> <Header />
    <div className='w-full h-screen bg-blue-900 flex flex-col items-center'>
      <div className='border border-white bg-white h-[100px] w- [700px] rounded-lg flex justify-center items-center'>
      
      <input type="date"/>
      <input type="date"/>
      <select>
        <option>Luxury</option>
        <option>Normal</option>
        <option>LOw</option>
      </select>
      <button>BOOK Now</button>

      </div>
      <h1 className='text-white text-[50px]'>
        Welcome to the Leonine Villa</h1></div>
        </div>
  )
}

export default HomePage