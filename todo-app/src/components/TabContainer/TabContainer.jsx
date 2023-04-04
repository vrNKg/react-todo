import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pressActive, pressCompleted } from '../../redux/reducer.js'
import Button from '../Button/Button.jsx'

export default function TabContainer() {

  const dispatch = useDispatch()
  const buttonActive = useSelector(state => state.buttonActive)
  const buttonCompleted = useSelector(state => state.buttonCompleted)

  return(
    <div className='tab-container'>
      <Button
      className={buttonActive}
      type='button'
      onClick={() => dispatch(pressActive())}
      title='Активные'
      />
      <Button
      className={buttonCompleted}
      type='button'
      onClick={() => dispatch(pressCompleted())}
      title='Завершенные'
      />
    </div>
  )
}