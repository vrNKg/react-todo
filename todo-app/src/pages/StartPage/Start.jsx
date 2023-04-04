import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import './Start.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { setUser } from '../../redux/reducer'


function StartPage(props) {
    const [userName, setUserName] = useState(''),
        [error, setError] = useState(false),
        navigate = useNavigate(),
        dispatch = useDispatch()
  
    const changeUserName = (e) => {
        dispatch(setUser(e.target.value))
        setUserName(e.target.value)
    }
  
    function submitUserName(e) {
        e.preventDefault()
        if (userName.trim() !== '') {
            setError(false)
            navigate('/todo')
            } else {
            setError(true)
        }
    }

    return (
        <div className='start-page'>
            <h1>Привет!</h1>
            <div className='start-content'>
                <Input 
                className='start-page__userName'
                type='text'
                name='name'
                placeholder='Введите ваше имя'
                value={userName}
                onChange={(e) => changeUserName(e)}
                />
                <Button 
                className='start-page__submit'
                type='submit'
                title='Сохранить'
                onClick={(e) => submitUserName(e)}
                />
            </div>
            {error && <span className='start-error'>* Поле обязательно для заполнения</span>}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      setUser: (obj) => dispatch(setUser(obj)),
    }
  }
  
export default connect(null, mapDispatchToProps)(StartPage)