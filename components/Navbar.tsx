import React from 'react'

interface NavProps {

}


export const NavBar: React.FC<NavProps> = () => {

  return (
    <nav className='sticky top-0 z-50 px-2 flex flex-row w-full items-center bg-black text-white'>
     
      <h1 className='text-3xl flex-1'>leadistro</h1>
      <h1 className='text-3xl'>Menu</h1>
    </nav>
  )
}

