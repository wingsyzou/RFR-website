import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/Home.css";

function Home() {
  const [postalCode, setPostalCode] = useState("")
  const navigate = useNavigate()

  const handleChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/book-now')
  };

  return (
    <div className="home">
      <div className="header">
        <h1> Your Partner in Fence Restoration </h1>
      </div>
      <div className="consultation">
        <Link to="/services"> All Services </Link>
        <Link to="/services/packages"> Packages </Link>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
          />
          <button type="submit"> Book A Consultation </button>
        </form>
      </div>
      <div className="reviews">

      </div>
    </div>
  );
}

export default Home;
