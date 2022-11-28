import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Features } from '../components/Features'
import HeroSection, { Hero } from '../components/Hero'
import { NavBar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
   
    </>
  )
}

export default Home
