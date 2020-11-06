import React, {useEffect, useState} from 'react'
import { Route , Redirect} from "react-router-dom";

import Navbar from './menu/Navbar'
import LeftContent from './content/LeftContent'
import Home from './content/Home'
import About from './content/About'
import Resume from './content/Resume'
import Contact from './content/Contact'
import {Divider} from './util/Util'

import './Landing.css'

export default function Landing() {
  const [screenSize, setscreenSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setscreenSize(window.innerWidth));
  }, [])

  return (
    <div>
      <div className="top-menu">
        <Navbar />
      </div>

      <div className='content'>
        <div className='left-pane'>
          <LeftContent />
        </div>

        {
          screenSize < 1280 &&
          <Divider />
        }

        <div className='right-pane'>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route component={() => (<div>404 Not found </div>)} /> */}
        </div>

      </div>

    </div>
  )
}
