import React from "react";

const SelectedProject = ({ project, onCancel }) => {
  const dateFormatter = new Date(project.dueDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  
  return (
    <div>
      <header>
        <div>
          <h1>{project.title}</h1>
        </div>
        <p>{dateFormatter}</p>
        <p>{project.description}</p>
      </header>
          <button onClick={onCancel}>delete</button>
    </div>
  );
};

export default SelectedProject;
