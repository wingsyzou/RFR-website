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
          <p className="about-paragraph">At Rapid Fence Renewals, we are a dynamic duo of passion-driven students. We both started our contracting journeys under <bold>mentorships</bold>, but have now branched off into starting our own contracting business. While we have chosen to focus on working with fences for now, we wish to expand our services into other areas of contracting that involve painting and pressure cleaning.
          </p>
          <p className="about-paragraph">What sets us apart is our <bold>dedication to our clients</bold> and <bold>low prices</bold>. We aim to treat every single client with patience and respect, customer satisfaction is at the core of everything we do. We take pride in the smiles we bring to our clients' faces when they see the transformation of their fences and outdoor spaces. Our commitment to setting low prices stems from our core philosophy, where financial gain is not our primary motivation. Rather, we prioritize customer service and technical skill development. We aim to create lasting impressions and foster strong, long-term relationships with our esteemed clientele.
          </p>
        </div>
        <div className="individual-profiles">
          <div className="profile">
            <img src={Hieu} />
            <h2>Hieu Ta</h2>
            <p>Currently enrolled in the Schulich program at York University. Hieu is interested in the networking side of the business, but at the same time has his own experience in painting projects involving both interior and exterior.</p>
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
