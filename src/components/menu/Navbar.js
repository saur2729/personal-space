import React from 'react'
import { NavLink } from "react-router-dom";

import {MenuItems} from './MenuItems'

import './Navbar.css'

function Navbar() {
  return (
    <nav className="NavbarItems">
      <div className="navbar-logo"> Saurabh Singh</div>
      <div className="menu-icon">

      </div>
      <ul className='nav-menu'>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.url}> {item.title} </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
