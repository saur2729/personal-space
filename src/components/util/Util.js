import React, { useEffect, useState } from "react";

import { FaFacebook, FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import "./Util.css";


export function Divider() {
  // TODO : make changes to pass width, height and type(vertical, horizontal)
  return <div className="horizontal-rule" />;
}

export function Age() {
  const [dobVal, setDobVal] = useState("");
  useEffect(() => {
    const divisor = 1000 * 60 * 60 * 24 * 365.24219;
    const birthTime = new Date("1992-02-27T07:20:00");
    let secTimer = setInterval(() => {
      setDobVal(((Date.now() - birthTime) / divisor).toFixed(11));
    }, 100);

    return () => clearInterval(secTimer);
  }, []);

  return <span>{dobVal}</span>;
}

export function ResumeCard(props) {
  const img_h = props.dimg_siz.split(":")[0];
  const img_w = props.dimg_siz.split(":")[1];
  return (
    <div className="box">
      <div className="box-img" style={{marginRight: "20px", marginTop: props.img_top}}>
        <img
          src={props.dimg}
          alt={props.alt}
          style={{ width: img_w + "px", height: img_h + "px" }}
        />
      </div>
      <div className="box-text">
        <div className="box-text-header">{props.title}</div>
        <div className="box-sec-text">
          {props.role}
          <p style={{marginRight: 0, float: "right", fontSize: "15px"}}>{props.dur}</p>
        </div>
      </div>
      <br />
    </div>
  );
}

export function DegreeCard(props) {
  return (
    <div className="box">
      <div className="box-text">
        <div className="box-text-header" style={{fontSize: "25px"}}>{props.degree}</div>
        <div className="box-sec-text" style={{fontSize: "17px"}}>
          {props.univ}
          <p style={{marginRight: 0, float: "right", fontSize: "14px"}}>{props.dur}</p>
        </div>
      </div>
      <br />
    </div>
  );
}

export function TextChips(props) {
  var tags = props.tags.split(",")
  return(
    <div>
      {tags.map((a, id) => {
        return <span className="chip" key={id} >{a.trim()}</span>
      })}
    </div>
  );
}

export function ContactIcons() {
  return(
    <div className="contact-icons">
      <FaLinkedinIn className="contact-icons-list" color="#999" size="25px" onClick={() => window.open('https://www.linkedin.com/in/saurabh-singh-377426ab/')} />
      <FaGithub className="contact-icons-list" color="#999" size="25px" onClick={() => window.open('https://github.com/saur2729')} />
      <FaFacebook className="contact-icons-list" color="#999" size="25px" onClick={() => window.open('https://www.facebook.com/SaurabhzRule/')} />
      <FaRegEnvelope className="contact-icons-list" color="#999" size="25px" onClick={() => window.open("mailto:saur2706@gmail.com")} />
  </div>
  )
}
export default { Divider, Age, ResumeCard, TextChips, ContactIcons, DegreeCard };

