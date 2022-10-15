import React from 'react'

interface NavProps {

}


export const NavBar: React.FC<NavProps> = () => {

  return (
    <nav className='sticky top-0 border-b-[0.5px] border-white z-50 h-12 px-2 bg-opacity-[0.975] flex flex-row w-full items-center bg-black text-white'>     
      <h1 className='text-3xl flex-1'>leadistro</h1>
      <h1 className='text-3xl'>Menu</h1>
    </nav>
  )
}

