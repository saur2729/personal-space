import React from "react";

import {Divider} from "../util/Util";
import fb from '../../static/svg/fb.svg'
import mail from '../../static/svg/mail.svg'
import github from '../../static/svg/github.svg'
import linkedin from '../../static/svg/linkedin.svg'
import "./Content.css";
import myImg from "../../static/img/my_pic.png";

function LeftContent() {
  return (
    <div className="left-content">
      <div>
        <a className="left-logo" href="/">
          <img className="left-logo-img" alt="Saurabh Singh" src={myImg} />
        </a>
        <br />
        <div className="left-name-header">
          <h1>Saurabh Singh</h1>
        </div>
        <div className="left-email">
          <a href="mailto:saur2706@gmail.com">saur2706@gmail.com</a>
        </div>
        <br />
        <div className="left-icons">
          <img alt="linkedin" src={linkedin} onClick={() => window.open('https://www.linkedin.com/in/saurabh-singh-377426ab/')}/>
          <img alt="github" src={github} onClick={() => window.open('https://github.com/saur2729')} />
          <img alt="fb" src={fb} style={{width:"3%"}} onClick={() => window.open('https://www.facebook.com/SaurabhzRule/') } />
          <img alt="mail" src={mail} onClick={() => window.open("mailto:saur2706@gmail.com")} />
        </div>
      </div>

      <br />
      <Divider />
      <br />
      <br />
      <div className="left-about">
        <h4>About</h4>
        <p>
          SRE with ~6 years of experience in the banking sector, mostly into
          tools-development, &amp; automation. I hold a bachelors in
          Engineering(CS major) and currently working with Tower Research
          Capital. Before TRC I was at Goldman Sachs &amp; CITIBank(HCL
          payrolle). Also I'm pursuing MScFE from WQU.
        </p>
      </div>
      <br />
      <Divider />
      <br />
      <span style={{fontSize:"5px", color:"#999"}}>Some CopyRight stuff - Oh! doesn't matter. Cheers!!</span>
    </div>
  );
}

export default LeftContent;