import React, { useState } from 'react'
import "./Clock.css"

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    let [currTime, setCurrTime] = useState();

    const updateTime = ()=>{
        let time = new Date().toLocaleTimeString();
        setCurrTime(time);
    }
    setInterval(updateTime, 1000)
  return (
    <div className='container'>
        <div className="clock">
            <span>{time}</span>
        </div>
    </div>
  )
}

export default Clock
