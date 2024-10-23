import React from 'react'
import google from "../assets/3.png"
import zoho from "../assets/5.png"
import tcs from "../assets/6.png"
const Footer = () => {
  return (
    <main className='bg-gray-100'>
      <div className='grid grid-cols-2 p-4'>
        <div>
          <p  className='w-[70vh] text-center font-semibold font-mono'>
          This Platform simplifies HR tasks by streamlining employee data all in one system
          </p>
        </div>
        <div className='flex justify-around gap-5 items-center'>
          <img src={google} alt="" className='w-24 h-12'/>
          <img src={zoho} alt="" className='w-24 h-16'/>
          <img src={tcs} alt="" className='w-24 h-12'/>
        </div>
      </div>
    </main>  
  )
}

export default Footer
