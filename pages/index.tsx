import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Features } from '../components/Features'
import HeroSection from '../components/Hero'
import { NavBar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Pricing from '../components/Pricing'

const Home: NextPage = () => {
  return (
    <>

      <NavBar />
      <HeroSection />
      <Pricing />
      <Features />

    </>
  )
}

export default Home
