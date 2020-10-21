import React from 'react'


import Randompara from './Randompara'
import Navbar from './menu/Navbar'

import './Landing.css'

export default function Landing() {
  return (
    <div>
      <div className="top-menu">
        <Navbar />
      </div>

      <div className='content'>
        <Randompara />
      </div>

    </div>
  )
}
