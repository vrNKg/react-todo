import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCompleted, removeCompleted, removeActive, openModal } from '../../redux/reducer.js'
import editIcon from '../../images/edit.svg'
import acceptIcon from '../../images/accept.svg'
import deleteIcon from '../../images/delete.svg'
import ToDoEditModal from '../../components/EditModal/EditModal'
import './ToDoList.css'

export default function ToDoList() {

  const [id, setId] = useState(0),
    [textOnChange, setTextOnChange] = useState(''),
    dispatch = useDispatch(),
    buttonActive = useSelector((store) => store.buttonActive),
    buttonCompleted = useSelector((store) => store.buttonCompleted),
    activeToDos = useSelector((store) => store.activeTodos),
    completedToDos = useSelector((store) => store.completedTodos),
    isOpen = useSelector((store) => store.isOpen)

  return(
    <ul className='list-items'>
      {(!buttonActive & !buttonCompleted) ?
        (<div>List</div>)
        : 
        buttonActive ? 
        (activeToDos.map((task) =>
        <li 
        className='list-item'
        key={task.id}>
            {task.task}
            <div className='buttons'>
            <img
                className='done-button'
                id={task.id}
                src={acceptIcon}
                alt='done button'
                onClick={() => dispatch(addCompleted(task.id))}
            />
            <img
                className='edit-button'
                src={editIcon}
                alt='edit button'
                onClick={(e) => (
                    setId(task.id),
                    setTextOnChange(task.task),
                    dispatch(openModal())
                )}
            />
            <img
                className='delete-button'
                src={deleteIcon}
                alt='delete button'
                onClick={() => dispatch(removeActive(task.id))}
            />
            </div>
        </li>
        )) 
        :
        (completedToDos.map((task) =>
        <li
        key={task.id}
        className='list-item'
        >
          {task.task}
          <img
                className='delete-button buttons'
                src={deleteIcon}
                alt='delete button'
                onClick={() => dispatch(removeCompleted(task.id))}
          />
        </li>))
      }
      {isOpen ? (<ToDoEditModal isOpen={isOpen} id={id} textForUpdate={textOnChange}/>) : null}
    </ul>
  )
}
