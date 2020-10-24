import React, {useEffect, useState} from 'react'

import './Content.css';
import myImg from '../../static/img/my_pic.png';

function LeftContent() {
  const [screenSize, setscreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setscreenSize(window.innerWidth));
  }, [])

  const main_class = screenSize < 1280 ? "left-content" : "left-content left-fixed";

  return (
    <div className={main_class}>
      <a className="left-logo" href="/">
        <img className="left-logo-img" alt="Saurabh Singh" src={myImg} />
      </a>
      <br />
      <div className="left-name-header">
        <h1>Saurabh Singh</h1>
      </div>
      <div className="left-email">
        <a class="mailto" href="mailto:saur2706@gmail.com">saur2706@gmail.com</a>
      </div>
      <br />
      <div className="horizontal-rule"></div>
      <br /><br />
      <div>
        About -

      </div>
    </div>
  )
}

export default LeftContent

