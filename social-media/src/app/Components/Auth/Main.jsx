import React from 'react'
import Signin from './Signin'
import Signup from './Signup'

function Main() {
  return (
    <div className='bg-black'>
        <div className='mx-auto max-w-screen-lg px-4'>
            {
                mode=="signin"?<Signin/>:<Signup/>
            }
        </div>
      
    </div>
  )
}

export default Main
