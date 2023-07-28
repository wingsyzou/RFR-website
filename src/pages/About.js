import React from "react";
import '../css/About.css';
import Header from "../components/Header";
import Hieu from "../assets/hieu.jpg";
import Wing from "../assets/wing.jpg";

function About() {
  return (
    <div className='about'>
        <Header />
        <div className="about-us">
          <h1>About Us</h1>
          <p1>At Rapid Fence Renewals, we are a dynamic duo of passion-driven students. We both started our contracting journeys under mentorships, but have now branched off into starting our own contracting business. While we have chosen to focus on working with fences for now, we wish to expand our services into other areas of contracting that involve painting and pressure cleaning.

          What sets us apart is our dedication to our clients and low prices. We aim to treat every single client with patience and respect, customer satisfaction is at the core of everything we do. We take pride in the smiles we bring to our clients' faces when they see the transformation of their fences and outdoor spaces. In addition, we quote our clients at below the market price because money is not our main motivation, instead we are more interested in honing our customer service and tool handling skills.
          </p1>
        </div>
        <div className="individual-profiles">
          <div className="profile">
            <img src={Hieu} />
            <h2>Hieu Ta</h2>
            <p>Currently a cock and balls torture enjoyer</p>
          </div>
          <div className="profile">
            <img src={Wing} />
            <h2>Wing Zou</h2>
            <p>Currently enrolled in a computer science and economics double major program at the University of Toronto, St. George location. With a solid foundation in contracting, Wing's summers during highschool were spent working alongside his uncle, a seasoned contractor. Guided by his uncle's expertise, he honed his skills by contributing to diverse projects, including building decks, putting up drywall, and painting various surfaces.</p>
          </div>
        </div>
    </div>
  )
}

export default About
