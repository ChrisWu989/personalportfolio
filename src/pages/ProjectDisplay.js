import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
    <h1> {project.name}</h1>
    <img src={project.image} />
    <p>
      <b>Skills:</b> {project.skills}
    </p>
    <p>
        <a href={project.demo}> 
            <OpenInBrowserIcon /> 
        </a>
        <a href={project.github}> 
            <GitHubIcon /> 
        </a>
    </p>
  </div>
  );
}

export default ProjectDisplay