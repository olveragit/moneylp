import React from 'react'
import { Redirect } from 'react-router-dom'
import { LoginContext } from './LoginContext'

const Logout = () => {
    const {state, dispatch} = React.useContext(LoginContext)
    dispatch({type: 'LOGGED_OUT'})
    console.log(state)
    return(<Redirect to="/" />)
}

export default Logout