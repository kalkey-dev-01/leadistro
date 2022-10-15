import Image from 'next/image'
import React from 'react'
import { RoundedButton } from './misc/RoundedButton'

interface NavProps {

}


export const NavBar: React.FC<NavProps> = () => {

  return (
    <nav className='sticky top-0 border-b-[0.5px] border-white z-50 h-[80px] px-2 bg-opacity-[0.975] flex flex-row w-full items-center bg-black text-white'>
      <div className='flex-1'>
        <Image src={require('../assets/logo.svg')} width={50} height={50} alt={'Leadistro Logo'} />
      </div>

      <RoundedButton className=''>
        <span className='bg-white text-black rounded-2xl px-2'>Download</span> Leadistro
      </RoundedButton>
    </nav>
  )
}

