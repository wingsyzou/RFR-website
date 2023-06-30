import React from "react";
import Logo from "../assets/wood.png";
import {Link} from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
        <h1>Rapid Fence Renewals</h1>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/packages"> Packages </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  )
}

export default Navbar
