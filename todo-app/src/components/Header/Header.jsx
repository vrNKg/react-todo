import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'

export default function Header() {
  const user = useSelector(state => state.name)
  const activeTodosLength = useSelector(state => state.activeTodos.length)

    return (
        <header className='header__wrapper'>
            <h1 className='header__user'>Привет, {user}</h1>
            <span className='header__active-toDos'>
                Количество активных задач: {''}
                <span>{activeTodosLength}</span>
            </span>
        </header>
      )
}