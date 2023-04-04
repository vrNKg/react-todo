import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../../redux/reducer.js'
import './ToDo.css'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import ToDoList from '../../components/ToDo/ToDoList.jsx'
import TabContainer from '../../components/TabContainer/TabContainer.jsx'

const ToDoPage = () => {
  const [todo, setTodo] = useState(''),
    dispatch = useDispatch()

  const toDoChange = (e) => {
    setTodo(e.target.value)
  }

  const addTodo = () => {
    if (todo === '') {
      alert('Заполните поле ввода')
    } else {
      dispatch(addToDo(todo))
      setTodo('')
    }
  }
  
  return (
    <div className='todo-page'>
      <Header/>
      <div className='todos-list'>
        <Input
          className='new-task'
          type='text'
          onChange={(e) => toDoChange(e)}
          placeholder='Новая задача'
          value={todo}
        />
        <Button onClick={() => addTodo()} className='todo-list__button' title='Добавить'/>
      </div>
      <TabContainer />
      <ToDoList/>
    </div>
  )
}

export default ToDoPage