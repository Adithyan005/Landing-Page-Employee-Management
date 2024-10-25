import React from 'react'
import logo from "../assets/1.png"

const Footer = () => {
  return (
    <main className=''>
      <div className='grid grid-cols-2 gap-12 p-2 h-[6rem] border-t-2 border-b-zinc-900'>
        <div className='flex justify-center items-center gap-2'>
          <img src={logo} alt="" className="w-[7rem]"/>
          <h1>Tango</h1>
        </div>
        <div className='flex justify-center gap-x-10 items-center '>
          <img src="https://www.pngkit.com/png/full/178-1783296_g-transparent-circle-google-logo.png" alt="" className='w-12 h-12 rounded-full shadow-xl'/>
          <img src="https://static-00.iconduck.com/assets.00/zoho-icon-2048x2048-jvw3wrfg.png" alt="" className='w-12 h-12 rounded-full shadow-xl'/>
          <img src="https://logodix.com/logo/1703152.png" alt="" className='w-12 h-12 rounded-full shadow-xl'/>
        </div>
      </div>
    </main>  
  )
}

export default Footer
