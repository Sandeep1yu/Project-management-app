import React from "react";
import "./ProjectSidebar.css";
import Button from "./Button";

const ProjectsSidebar = ({ onStartProject, projects, onSelectProject }) => {
  return (
    <aside className="sidebar">
      <h2>Your Projects</h2>
      <div className="btn_container">
        <Button onClick={onStartProject}>+ Add Projects</Button>
      </div>
      <ul className="project_item">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <button className="projects_title" onClick={()=> onSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
