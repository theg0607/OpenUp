"use client"
import React, { useState } from 'react'
import { Signup } from './Signup'
import Signin from './Signin'


function Main() {
  const [mode,setMode]=useState("Signin")
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
