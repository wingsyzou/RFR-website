import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";
import Fence1B from "../assets/fence1-before.jpg";
import Fence1A from "../assets/fence1-after.jpg";
import Fence2B from "../assets/fence2-before.jpg";
import Fence2A from "../assets/fence2-after.jpg";
import Fence3B from "../assets/fence3-before.jpg";
import Fence3A from "../assets/fence3-after.jpg";
import "../css/Home.css";

function Home() {
  const [postalCode, setPostalCode] = useState("");
  const navigate = useNavigate();

  const gallery1 = [
    Fence1A,
    Fence1B,
    Fence2A,
    Fence2B,
    Fence3A,
    Fence3B
  ];

  const quotes = [
    '"These guys are very proffessional despite their age! They offered me a wonderful service at a great price!" - Twee Ta',
    '"They did such a great job! I would definitely recommend" - Sharon',
    '"These guys are great! Nice and kind gentlemen they are!" - Bill',
    '"I did not even know my fences needed to be taken care of. Thanks to Wing and Hieu my fences look brand new!" - Paul'
  ];

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
        <h1>Customer Reviews</h1>
        <div className="row">
          <div className="column-left">
            <div className="review-slot-left">
              <ImageGallery images={gallery1} />
              <div className="quote">
                {quotes[0]}
              </div>
            </div>
          </div>

          <div className="column-right">
            <div className="review-slot-right">
              <ImageGallery images={gallery1} />
              <div className="quote">
                {quotes[1]}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column-left">
            <div className="review-slot-left">
              <ImageGallery images={gallery1} />
              <div className="quote">
                {quotes[2]}
              </div>
            </div>
          </div>

          <div className="column-right">
            <div className="review-slot-right">
              <ImageGallery images={gallery1} />
              <div className="quote">
                {quotes[3]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
