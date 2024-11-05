import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Chris</h2>
        <div className="prompt">
          <p>
            Aspiring software engineer and recent graduate from UC San Diego.
          </p>
          <a href="https://www.linkedin.com/in/chriswu989/"> 
            <LinkedInIcon /> 
          </a>
          <a href="mailto:chrwu2001@gmail.com?body=My custom mail body">
            <EmailIcon />
          </a>
          <a href="https://github.com/ChrisWu989"> 
            <GitHubIcon /> 
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>Python, Java, JavaScript, C, C++, SQL, HTML, CSS</span>
          </li>
          <li className="item">
            <h2>Technologies /Frameworks</h2>
            <span>
              NodeJS, ExpressJS, ReactJS, MySQL, MongoDB, BootStrap, Django, Flask, Mathematica, Figma, Git, Docker, Postman
            </span>
          </li>
          <li className="item">
            <h2>Interests</h2>
            <span>Gaming, Animation, PC Building, Keyboards, Basketball</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home