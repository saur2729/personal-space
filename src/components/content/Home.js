import React from 'react'
import {NavLink} from 'react-router-dom';

import {Divider} from '../util/Util'


function Home() {
  console.log(new Date().getTimezoneOffset()/60 * (-1))
  return (
    <div className="up-box">
    <span
      style={{
        fontSize: "30px",
        fontFamily: "Raleway",
        letterSpacing: ".1em",
        color: "grey",
      }}
    >
      Welcome to this space.
    </span>
    <Divider /> <br />
    <span
      style={{
        fontSize: "15px",
        fontFamily: "'Montserrat', serif",
        letterSpacing: ".1em",
      }}>
      Namaste <span role="img" aria-label="Namaste emoji">🙏</span>  <br /><br />
      Welcome to my page. Please feel to free to browse through the different menu tabs to know <NavLink to="/about"> about me</NavLink> and my career.
      </span>

    <br />
  </div>
  )
}

export default Home
