import React, {useState, useEffect, useRef} from 'react'
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import {MenuItems} from './MenuItems'

import './Navbar.css'

function Navbar() {
  const wrapperRef = useRef(null);
  // const [openHamMenu, setopenHamMenu] = useState(false)
  const [isVisible, setIsVisible] = useState(false);

  // below is the same as componentDidMount and componentDidUnmount
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  const clickHamMenu = () => {
    return (
      setIsVisible(!isVisible)
    )
  }

  return (
    <nav className="NavbarItems">
      <div className="navbar-logo">
        <NavLink to="/" style={{textDecoration: "None"}}> Saurabh Singh </NavLink>
      </div>
      <div className="menu-icon" ref={wrapperRef}>
        <FaBars size="25" onClick={clickHamMenu} />

        {isVisible &&
          <div className="ham-menu">
            <ul>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink to={item.url}> {item.title} </NavLink>
                  </li>
                )
              })}
            </ul>

          </div>
        }
      </div>

      <ul className="nav-menu">
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
