import React, {useEffect, useState} from 'react'

import './Util.css'


export function Divider() {
  // TODO : make changes to pass width, height and type(vertical, horizontal)
  return (
    <div className="horizontal-rule" />
  )
}

export function Age() {
  const [dobVal, setDobVal] = useState('');
  useEffect(() => {
    const divisor = 1000 * 60 * 60 * 24 * 365.24219;
    const birthTime = new Date('1992-02-27T07:20:00');
    let secTimer = setInterval( () => {
      setDobVal(((Date.now() - birthTime) / divisor).toFixed(11))
    },100)

    return () => clearInterval(secTimer);
}, []);

  return (
    <span>{dobVal}</span>
  )
}

export default {Divider, Age}
