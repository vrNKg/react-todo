import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import StartPage from './pages/StartPage/Start'
import ToDoPage from './pages/ToDoPage/ToDo'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={StartPage}/>
        <Route path='/todo' Component={ToDoPage}/>
      </Routes>
    </>
  )
}
