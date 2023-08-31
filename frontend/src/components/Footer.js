import React from "react";
import "../css/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YoutubeIcon from "@mui/icons-material/YouTube";


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon /> <PinterestIcon /> <YoutubeIcon />
        </div>
      <p> &copy; 2023 - Rapid Fence Renewals </p>
    </div>
  )
}

export default Footer
