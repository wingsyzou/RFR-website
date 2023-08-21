import React from 'react';
import Header from "../components/Header";
import '../css/Services.css';

function Services() {
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
      <h1 className="packageTitle">Packages</h1>
      <div className="packages">
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
