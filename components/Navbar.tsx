import Image from 'next/image'
import React from 'react'

import { motion } from "framer-motion"
interface NavProps {

}



export const NavBar: React.FC<NavProps> = ({ }) => {


  return (
    <nav className='sticky top-0 border-b-[1px] rounded-br-2xl rounded-bl-2xl border-white z-50 h-[50px] px-2  space-x-4 flex flex-row w-full justify-center items-center bg-black text-white'>
      <div className=' flex flex-1 gap-x-3 '>
        <Image src={require('../assets/Logoupdate.svg')} width={50} height={50} className='  drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]' alt='logo' />
      </div>
      <div className='text-lg hidden md:inline-block font-semibold cursor-pointer rounded-3xl border-[2.5px] border-white px-[12.5px] py-[1.5px]'>Features</div>
      <div className='text-lg hidden md:inline-block font-semibold cursor-pointer rounded-3xl border-[2.5px] border-white px-[12.5px] py-[1.5px]'>Pricing</div>
      <div className='text-lg hidden md:inline-block font-semibold cursor-pointer rounded-3xl border-[2.5px] border-white px-[12.5px] py-[1.5px]'>About</div>

      <div className='text-lg hidden md:inline-block font-semibold cursor-pointer rounded-3xl border-[2.5px] border-white px-[12.5px] py-[1.5px]'>Download</div>
      <div className={`md:hidden`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

    </nav>
  )
}

