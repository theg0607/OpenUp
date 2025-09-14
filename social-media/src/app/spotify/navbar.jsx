import React from 'react'

function Navbar() {
  return (
    <div className='h-20 bg-stone-800 flex justify-around items-center '> 
      <div className='border-2 w-1/4 font-bold text-3xl text-blue-400 text-center'>Akash Rajput</div>
      <div className='align-middle flex justify-around border-2 w-1/3 text-white'>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}

export default Navbar
