import React from 'react'
import { NavLink } from "react-router-dom";

import {MenuItems} from './MenuItems'

import './Navbar.css'
import hamMenu from '../../static/img/hm.png'

function Navbar() {
  const clickSideBar = () => {
    return (
      console.log("You clicked me")
    )
  }
  return (
    <nav className="NavbarItems">
      <div className="navbar-logo">
        <NavLink to="/" style={{textDecoration: "None"}}> Saurabh Singh </NavLink>
      </div>
      <div className="menu-icon">
        <img src={hamMenu} alt="" style={{height:"25px", marginTop:0, float:'right'}} onClick={clickSideBar} />
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
