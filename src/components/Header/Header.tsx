import React, { useState } from 'react';
import './Header.css';
import PersonAvatar from "../../Assets/icons/personAvartar.svg"
import Notification from "../../Assets/icons/notification.svg"
import TestMode from "../../Assets/icons/testMode.svg"
import LiveMode from "../../Assets/icons/liveMode.svg"

const Header = () => {
    const [mode, setMode] = useState("test");

    const handleModeToggle = () =>{
        const newMode = mode === "test" ? "live" : "test";
        setMode(newMode)
    }
  return (
    <div className='nav'>
      <div className="header">
        <p>Dashboard</p>
        <div className='header-nav' >
            <div className='mode' >
                <p className={`${mode === "test" ? "test" : "live"}`} >{mode === "test" ? "Test" : mode === "live" ? "Live" : ""} </p> <img className='toggle' src={mode === "test" ? TestMode : LiveMode} alt="Mode"   onClick={handleModeToggle} />
            </div>
            <img className='notification-img' src={Notification} alt="Notification" />
            <img className='person-img' src={PersonAvatar} alt="Profile picture" />
        </div>
      </div>
    </div>
  );
};

export default Header;
