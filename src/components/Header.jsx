import React from 'react'
import UserTag from './UserTag'

const Header = () => {
  return (
    <header className='w-full bg-blue-500 flex h-[100px] relative items-center p-[10px]'>
      <h1 className='text-white text-[2  0px]'>Leonine villa</h1>
    
    <UserTag imageLink="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" name="John Doe1"/>

    
    </header>
  )
}

export default Header