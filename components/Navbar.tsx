import Image from 'next/image'
import React from 'react'
import { RoundedButton } from './misc/RoundedButton'
import { motion } from "framer-motion"
interface NavProps {

}



export const NavBar: React.FC<NavProps> = ({ }) => {


  return (
    <nav className='sticky top-0 border-b-[0.5px] border-white z-50 h-[50px] px-2  space-x-4 flex flex-row w-full justify-center items-center bg-black text-white'>
      <div className='flex-1'>
        <h1 className='text-2xl md:text-3xl'>leadistro</h1>
      </div>

      <motion.div initial={{x: 750}} animate={{x:0}} exit={{x:1000}} transition={{type:'spring',stiffness: 50}}  whileHover={{ scale: 0.85, opacity: 1 }} whileTap={{ scale: 1.095, opacity: 0.80 }} className='text-lg hidden md:inline-block font-semibold cursor-pointer rounded-3xl border-[2.5px] border-white px-[12.5px] py-[1.5px]'>Features</motion.div>
      <motion.div initial={{x: 750}} animate={{x:0}} exit={{x:1000}} transition={{type:'spring',stiffness: 50}}  whileHover={{ scale: 0.85, opacity: 1 }} whileTap={{ scale: 1.095, opacity: 0.80 }} className='text-lg hidden md:inline-block font-semibold cursor-pointer rounded-3xl border-[2.5px] border-white px-[12.5px] py-[1.5px]'>Pricing</motion.div>
      <motion.div initial={{x: 750}} animate={{x:0}} exit={{x:1000}} transition={{type:'spring',stiffness: 50}}  whileHover={{ scale: 0.85, opacity: 1 }} whileTap={{ scale: 1.095, opacity: 0.80 }} className='text-lg hidden md:inline-block font-semibold cursor-pointer rounded-3xl border-[2.5px] border-white px-[12.5px] py-[1.5px]'>About</motion.div>
      <motion.div initial={{x: 750}} animate={{x:0}} exit={{x:1000}} transition={{type:'spring',stiffness: 50}}  whileHover={{ scale: 0.85, opacity: 1 }} whileTap={{ scale: 1.095, opacity: 0.80 }} className='text-lg hidden md:inline-block font-semibold cursor-pointer rounded-3xl border-[2.5px] border-white px-[12.5px] py-[1.5px]'>Download</motion.div>
      <motion.div initial={{x: 750}} animate={{x:0}} exit={{x:1000}} transition={{type:'spring',stiffness: 50}}  whileHover={{ scale: 0.75, opacity: 1 }} whileTap={{ scale: 1.15, opacity: 0.80 }} className={`md:hidden`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </motion.div>

    </nav>
  )
}

