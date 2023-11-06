import React from 'react'
import no_project from '../assets/no_project.png';
import Button from './Button';
import  './NoProjectSelect.css'

const NoProjectSelect = ({onStartProject}) => {
  return (
    <div className='no_project_container'>
        <img src={no_project} alt="" />
        <h2 className='text'>No project selected</h2>
        <p className='paragraph_text'>Select a project or get started with new project</p>
        <p>
            <Button onClick={onStartProject}>Create new project</Button>
        </p>
    </div>
  )
}

export default NoProjectSelect