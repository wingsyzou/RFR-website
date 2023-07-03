import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1> Your Partner in Fence Restoration </h1>
      </div>
      <div className="consultation">
        <div className="consultation-content">
          <p> Book a free consultation to inquire about our services </p>  
        </div>
        <div className="consultation-button">
          {/* Add book function. E.g., asking for a quote */}
          <button> BOOK NOW </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
