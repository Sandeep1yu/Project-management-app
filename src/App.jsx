import { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import NoProjectSelect from "./components/NoProjectSelect.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const [selectedState, setSelectedState] = useState({
    selectedItem: undefined,
    projects: [],
  });

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
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...selectedState.projects, newProject],
      };
    });
  };

  console.log(selectedState);
  let content;
  if (selectedState.selectedItem === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (selectedState.selectedItem === undefined) {
    content = <NoProjectSelect onStartProject={addProjectItem} />;
  }

  return (
    <main className="main">
      <ProjectsSidebar onStartProject={addProjectItem} />
      {content}
    </main>
  );
}

export default App;
