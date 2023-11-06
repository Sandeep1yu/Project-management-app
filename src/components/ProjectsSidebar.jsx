import React from 'react'
import './ProjectSidebar.css';
import Button from './Button';

const ProjectsSidebar = ({onStartProject}) => {
  return (
    <aside className="sidebar">
        <h2>Your Projects</h2>
        <div className='btn_container'>
            <Button onClick={onStartProject}>
                + Add Projects
            </Button>
        </div>
        <ul>

        </ul>
    </aside>
  )
}

export default ProjectsSidebar;