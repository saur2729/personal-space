import React from "react";
import { Route , Redirect} from "react-router-dom";


import Navbar from './menu/Navbar'
import LeftContent from './content/LeftContent'
import Home from './content/Home'
import About from './content/About'
import Resume from './content/Resume'
import Contact from './content/Contact'
import Projects from './content/Projects'
import {Divider} from './util/Util'
import "./Landing2.css";

function Landing2() {
  return (
    <div className="wrapper">
      <div className="top-nav">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="left-nav"><LeftContent /></div>
        <div className="right-nav">
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </div>
  );
}

export default Landing2;
