import React from "react";
import Logo from "../assets/wood.png";
import {Link} from "react-router-dom";
import "../css/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
        <Link to="/"> Rapid Fence Renewals </Link>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/packages"> Packages </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button><ReorderIcon /></button>
      </div>
    </div>
  )
}

export default Navbar
