import Image from 'next/image'
import React from 'react'
import { RoundedButton } from './misc/RoundedButton'

interface NavProps {

}



export const NavBar: React.FC<NavProps> = ({ }) => {


  return (
    <nav className='sticky top-0 border-b-[0.5px] border-white z-50 h-[50px] px-2 bg-opacity-[0.85] flex flex-row w-full justify-center items-center bg-black text-white'>
      <div className='flex-1'>
        <h1 className='text-2xl md:text-3xl'>leadistro</h1>
      </div>
      <div className="flex-row hidden space-x-4 md:block text-white ">
        <span className='text-lg opacity-[0.85] rounded-3xl hover:opacity-100 border-[1.5px] border-white px-[7.5px] py-[1.5px]'>Features</span>
        <span className='text-lg opacity-[0.85] rounded-3xl hover:opacity-100 border-[1.5px] border-white px-[7.5px] py-[1.5px]'>Pricing</span>
        <span className='text-lg opacity-[0.85] rounded-3xl hover:opacity-100 border-[1.5px] border-white px-[7.5px] py-[1.5px]'>About</span>
        <span className='text-lg opacity-[0.85] rounded-3xl hover:opacity-100 border-[1.5px] border-white px-[7.5px] py-[1.5px]'>Download</span>
        <span className='text-lg opacity-[0.85] rounded-3xl hover:opacity-100 border-[1.5px] border-white px-[7.5px] py-[1.5px]'>Welcome</span>
      </div>
      <div className={`translate-x-0 hover:-translate-x-[2px] scale-100 hover:scale-125  md:hidden `}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

    </nav>
  )
}

