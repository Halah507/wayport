// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="modern-navbar">
      <div className="logo">Wayport</div>
      <button className="toggle-btn menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <ul className={`nav-links ${open ? "open" : ""}`}>
      <li><Link to="/start">Start</Link></li>
      <li><Link to="/preferences">Preferences</Link></li>
        <li><Link to="/medical">Medical</Link></li>
        <li><Link to="/accessibility">Accessibility</Link></li>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/alerts">Alerts</Link></li>
        <li><Link to="/queue">Queue</Link></li>
        <li><Link to="/smartguide">Smart Guide</Link></li>
        <li><Link to="/journey">Journey</Link></li>
        <li><Link to="/summary">Final Summary</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
