import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/backyard.jpg";
import "../css/Home.css";

function Home() {
  return (
    <div className="home" style={{ background: `url(${Banner})` }}>
      <div className="headerContainer">
        <h1> Your Partner in Fence Restoration </h1>

        {/* add book function. ie asking for quote */}
        <button> BOOK NOW </button>  

      </div>
    </div>
  );
}

export default Home;
