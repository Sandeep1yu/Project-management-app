import React from 'react'
import Input from './Input'
import './NewProject.css';
import { useRef } from 'react';
import Modal from './Modal';



const NewProject = ({onAdd, onCancel}) => {
  const modal = useRef();
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
    if(enteredTitle.trim()==='' || enteredDescription.trim()==='' || enteredDueDate.trim()==='') {
      modal.current.open();
      return;
      
    }
  }


  return (
    <>
    <Modal ref={modal} buttonCaption="Close" className="modal_component">
      <h2>Invalid Input</h2>
      <p>Please ... provide a valid input</p>
      <p>Make sure to enter a valid input in the input field</p>
    </Modal>
    <div className='input_container'>
    <menu className='btn_wrapper'>
    <ul className="btn_list">
        <li><button className='btn_cancel' onClick={onCancel}>Cancel</button></li>
        <li><button className='btn_save' onClick={handleSave}>Save</button></li>

    </ul>
    </menu>

    <div>
        <Input type="text" ref={inputRef} label="Title"/>
        <Input ref={descriptionRef} label="Description" textarea/>
        <Input type="date" ref={dueDateRef} label="Due Date"/>
    </div>
    </div>
    </>
  )
}

export default NewProject