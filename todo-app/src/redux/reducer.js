import { createSlice } from '@reduxjs/toolkit'

const addTodoReducer = createSlice({
  name: 'todo',
  initialState: {
      activeTodos: [],
      completedTodos: [],
      name: '',
      buttonActive: true,
      buttonCompleted: false,
      isOpen: false,
  },
  reducers: {
      addToDo(state, action) {
          state.activeTodos.push({
              id: new Date().toISOString(),
              task: action.payload,
              completed: false
          })
      },
      addCompleted(state, action) {
          state.activeTodos.forEach(el => {
              if (el.id === action.payload){
                  el.completed = !el.completed
                  state.completedTodos.push(el)
              }
          })
          state.activeTodos = state.activeTodos.filter((todo) => !todo.completed)

      },
      removeActive(state, action) {
          state.activeTodos = state.activeTodos.filter((todo) => todo.id !== action.payload)
      },
      removeCompleted(state, action) {
          state.completedTodos = state.completedTodos.filter((todo) => todo.id !== action.payload)
      },
      changeActive(state, action) {
          const todo = state.activeTodos.find(todo => todo.id === action.payload.id)
          state.activeTodos.forEach((el) => {
              if (el.id === todo.id) {
                el.task = action.payload.text
              }
          })
      },
      setUser(state, action) {
          state.name = action.payload
      },
      pressActive(state) {
        state.buttonActive = true
        state.buttonCompleted = false
      },
      pressCompleted(state) {
          state.buttonActive = false
          state.buttonCompleted = true
      },
      openModal(state) {
        state.isOpen = true
      },
      closeModal(state) {
          state.isOpen = false
      },
  },
})

export const {addToDo, addCompleted, removeActive, removeCompleted, changeActive, 
  setUser, pressActive, pressCompleted, openModal, closeModal} = addTodoReducer.actions

export const reducer = addTodoReducer.reducer