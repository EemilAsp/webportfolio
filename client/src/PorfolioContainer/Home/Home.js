import React from 'react'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'
import Particle from './Particles/Particle'


export default function Home() {
  return (   
    <>
      <Particle/>
    <div className='home_container'>
        <Header/>
        <Profile/>
        <Footer/>
    </div>
    </>
  )
}
