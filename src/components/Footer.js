import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <a href="https://www.instagram.com/chisswu/?hl=en" target="_blank" rel="noreferrer"> <InstagramIcon /> </a>
            <a href="https://github.com/ChrisWu989" target="_blank" rel="noreferrer"> <GitHubIcon /> </a>
            <a href="https://www.linkedin.com/in/chriswu989/" target="_blank" rel="noreferrer"> <LinkedInIcon /> </a>
        </div>
        <p> &copy; Chris Wu All rights reserved. 2022  </p>
    </div>
  )
}

export default Footer