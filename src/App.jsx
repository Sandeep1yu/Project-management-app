import { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import NoProjectSelect from "./components/NoProjectSelect.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [selectedState, setSelectedState] = useState({
    selectedItem: undefined,
    projects: [],
  });

  const handleSelectProject = (id) => {
    setSelectedState((prevState) => {
      return {
        ...prevState,
        selectedItem: id,
      };
    });
  };

  const addProjectItem = () => {
    setSelectedState((prevState) => {
      return {
        ...prevState,
        selectedItem: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setSelectedState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedItem: projectId,
        projects: [...selectedState.projects, newProject],
      };
    });
  };

  const deleteProject = () => {
    setSelectedState((prevState) => {
      return {
        ...prevState,
        selectedItem: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedItem
        ),
      };
    });
  };
  const handleCancelProject = () => {
    setSelectedState((prev) => {
      return {
        ...prev,
        selectedItem: undefined,
      };
    });
  };

  const selectProject = selectedState.projects.find(
    (project) => project.id === selectedState.selectedItem
  );
  let content = (
    <SelectedProject
      onDelete={deleteProject}
      project={selectProject}
      onCancel={handleCancelProject}
    />
  );
  if (selectedState.selectedItem === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (selectedState.selectedItem === undefined) {
    content = <NoProjectSelect onStartProject={addProjectItem} />;
  }

  return (
    <main className="main">
      <ProjectsSidebar
        onStartProject={addProjectItem}
        projects={selectedState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
