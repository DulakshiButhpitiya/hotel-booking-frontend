import React from 'react'


function UserTag(props) {


  return (
    <div className='absolute right-0 top-0 flex items-center cursor-pointer'>
    <img
    src={props.imageLink}
    className='rounded-full w-[75px] h-[75px]'
    />
    <span className='text-white ml-[5px] text-xl '>{props.name}</span>
    <h1>{props.name}</h1></div>
  )
}

export default UserTag