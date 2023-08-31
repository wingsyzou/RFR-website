import React, { useRef, useEffect } from 'react';
import Header from "../components/Header";
import '../css/Services.css';
import washedVsUnwashed from "../assets/washed-vs-unwashed.jpg";
import sanding from "../assets/sanding.jpg";

function Services() {
  const packagesRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#packages') {
      packagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  const servicesList = [
    "Fence Painting and Staining",
    "Deck Painting and Staining",
    "Pressure Washing",
    "Manual and Mechanical Sanding",
    "Wood Filling",
    "Wood Preserving",
    "Minor Wood Repairs",
    "Warranty and Follow-Up Services"
  ]

  const basic = [
    "Pressure Wash Clean",
    "Detailed Sanding",
    "Painting or Staining"
  ]

  const premium = [
    "Pressure Wash Clean",
    "Detailed Sanding",
    "Wood Repair and Filling",
    "Painting or Staining",
    "Warranty"
  ]

  return (
    <div className="services">
      <Header title="All the Services We Provide" />
      <div className="servicesList">
        {servicesList.map((service, index) => (
          <div className="serviceItem" key={index}>
            <span className="serviceIcon">✓</span>
            {service}
          </div>
        ))}
      </div>
      <div className="photos">
        <div className="photo-item">
          <img src={washedVsUnwashed} alt="Picture of pressure washed fence versus to unwashed fence"></img>
          <p className="photo-description">The leftside shows what the fence looked like before, and the rightside shows what it looks like after being pressure washed</p>
        </div>
        <div className="photo-item">
          <img src={sanding} alt="Picture of us sanding a fence"></img>
          <p className="photo-description">After being washed, we use a combination of different sanders to complete the preparation before painting or staining</p>
        </div>
      </div>
      <h1 className="packageTitle" id="packages">Packages</h1>
      <div className="packages" ref={packagesRef}>
        <div className="basic">
          <h2>Basic</h2>
          {basic.map((item, index) => (
            <div className="basicItem" key={index}>
              <span className="bulletpoint">&bull;</span>
              {item}
            </div>
          ))}
        </div>
        <div className="premium">
          <h2>Premium</h2>
          {premium.map((item, index) => (
            <div className="premiumItem" key={index}>
              <span className="bulletpoint">&bull;</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
