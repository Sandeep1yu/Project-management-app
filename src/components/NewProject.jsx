import React from 'react'
import Input from './Input'
import './NewProject.css';
import { useRef } from 'react';

const NewProject = ({onAdd}) => {
  const inputRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = ()=> {
    const enteredTitle = inputRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return (
    <div className='input_container'>
    <menu className='btn_wrapper'>
    <ul className="btn_list">
        <li><button className='btn_cancel'>Cancel</button></li>
        <li><button className='btn_save' onClick={handleSave}>Save</button></li>

    </ul>
    </menu>

    <div>
        <Input type="text" ref={inputRef} label="Title"/>
        <Input ref={descriptionRef} label="Description" textarea/>
        <Input type="date" ref={dueDateRef} label="Due Date"/>
    </div>
    </div>
  )
}

export default NewProject