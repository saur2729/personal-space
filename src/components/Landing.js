import React, {useEffect, useState} from 'react'
import { Route , Redirect} from "react-router-dom";

import Navbar from './menu/Navbar'
import LeftContent from './content/LeftContent'
import Home from './content/Home'
import About from './content/About'
import Resume from './content/Resume'

import './Landing.css'

export default function Landing() {
  const [screenSize, setscreenSize] = useState(window.innerWidth);
  const [dobVal, setDobVal] = useState('');

  useEffect(() => {
    const divisor = 1000 * 60 * 60 * 24 * 365.24219;
    const birthTime = new Date('1992-02-27T07:20:00');
    let secTimer = setInterval( () => {
      setDobVal(((Date.now() - birthTime) / divisor).toFixed(11))
    },100)

    return () => clearInterval(secTimer);
}, []);

  useEffect(() => {
    window.addEventListener("resize", () => setscreenSize(window.innerWidth));
  }, [])

  // console.log("Screen Size is - "+screenSize);

  return (
    <div>
      <div className="top-menu">
        <Navbar />
      </div>

      <div className='content'>
        <div className='left-pane'>
          <LeftContent />
        </div>

        {/* To fix the divider */}
          {
            screenSize < 1280 &&
            <div className='hr-divider'>---</div>
          }

        <div className='right-pane'>
          Age - {dobVal}
          <br /><br />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
        </div>

      </div>

    </div>
  )
}
