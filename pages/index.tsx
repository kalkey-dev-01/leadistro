import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-black h-screen font-extrabold text-white text-9xl'>
      <h1 className='hover:animate-pulse'>Leadistro</h1>
      <h2 className='hover:animate-pulse'>Coming Soon</h2>
      <h3 className='text-5xl'>Welcome</h3>
    </div>
  )
}

export default Home
