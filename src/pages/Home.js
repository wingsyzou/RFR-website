import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";
import OldFence from "../assets/old-fence.png";
import WhiteFence from "../assets/white-fence.png";
import "../css/Home.css";

function Home() {
  const [postalCode, setPostalCode] = useState("");
  const navigate = useNavigate();

  const gallery1 = [
    OldFence,
    WhiteFence
  ];

  const quotes = [
    '"Look how they renewed my fence!" - Karen',
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
