import React from 'react'
import { Footer, Header } from '..'
import { MainDetails } from '../core/Details'
// import Footer from '../shared/Footer/Footer'

export const MainLayout = () => {
  return (
    <div>
      <Header/>
      <MainDetails/>
      <Footer/>
    </div>
  )
}
