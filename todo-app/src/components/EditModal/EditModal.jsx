import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeActive } from '../../redux/reducer.js'
import { closeModal } from '../../redux/reducer.js'
import closeIcon from '../../images/remove.svg'
import './EditModal.css'
import Input from '../Input/Input.jsx'

export default function ToDoEditModal({isOpen, id, textForUpdate}) {

  const [text, setText] = useState(textForUpdate)

  const dispatch = useDispatch()

  function closeWindow() {
    dispatch(changeActive({id, text}))
    dispatch(closeModal())
  }

  return(
    !isOpen ? null :
    <div className='edit-window'>
      <div className='edit-window__content'>
        <Input
        type='text'
        className='edit-window__input'
        onChange={(e) => setText(e.target.value)}
        value={text}/>
          <img
            className='close-button'
            src={closeIcon}
            alt='close button'
            onClick={() => closeWindow()}
          />
      </div>
    </div>
  )
}