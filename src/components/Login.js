// import React, { useState, useEffect } from 'react'
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import users from '../fakedata/users.json'
import { LoginContext } from './LoginContext'
import './Login.css'

const Login = () => {

  const {state, dispatch} = React.useContext(LoginContext)
  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const onChangeInput = event => {// console.log(`${event.target.name} ${event.target.value}`)
    if(event.target.name === 'userInput'){
      setUserInput(event.target.value)
    } else {
      setPasswordInput(event.target.value)
    }
  }

  const onSubmit = event => {
    event.preventDefault()

    const matchUser = users.filter( user => {
      return user.name === userInput // return Object
    })// console.log(matchUser) // 0: Object { name: "Gabriel", password: "mypassword" }
    
    if(matchUser.length !== 0){
      if(matchUser[0].password === passwordInput){
        return dispatch({type: 'GRANTED', user: matchUser[0].name})
      } else {
        setUserInput('')
        setPasswordInput('')
        return dispatch({type: 'REJECTED'})
      }
    } else {
      setUserInput('')
      setPasswordInput('')
      return dispatch({type: 'REJECTED'})
    }
  }

  if(state.granted === false && state.user === ''){
    
    return (
      <div className="Login">
        {console.log(state)}
        <form onSubmit={onSubmit} className="loginForm" autoComplete="off">{/*onSubmit*/}

          <> {/* INPUT TEXT */}
            <input type="text" name="userInput" onChange={onChangeInput} value={userInput}
              className="userInput" placeholder="Usuario" required autoFocus={true} />{/*onChangeInput*/}
             {/* INPUT PASSWORD */}
            <input type="password" name="passwordInput" onChange={onChangeInput} value={passwordInput}
              className="passwordInput" placeholder="Contraseña" required />{/*onChangeInput*/}
              <br />
             {/* INPUT SUBMIT */}
            <input type="submit" name="loginButton" value="Login" className="submitButton"/>
          </>
          
        </form>
        <p className="authMessage">{state.message}</p>
        
      </div>
    )
  } else {
    return <Redirect to="/alerts" />
  }
}

export default Login