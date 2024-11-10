import React from 'react'
import logo from "../assets/1.png"
import google from "../assets/google.png"
import zoho from "../assets/zoho.jpg"
import tcs from "../assets/tcs.png"
import wipro from "../assets/wipro.png"
import cognizant from "../assets/cognizant.png"

const Footer = () => {
  return (
    <main className=''>
      <div className='grid grid-cols-2 gap-12 p-2 h-[6rem] border-t-2 border-b-zinc-900'>
        <div className='flex justify-start items-center gap-2'>
          <img src={logo} alt="" className="w-[7rem]"/>
          <h1>Tango</h1>
        </div>
        <div className='flex justify-end gap-x-10 items-center '>
          <img src={google} alt="" className='w-16 rounded-md'/>
          <img src={zoho} alt="" className='w-16 rounded-md'/>
          <img src={tcs} alt="" className='w-16 rounded-md'/>
          <img src={wipro} alt="" className='w-16 rounded-md'/>
          <img src={cognizant} alt="" className='w-16 rounded-md'/>
        </div>
      </div>
    </main>  
  )
}

export default Footer
