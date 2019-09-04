import React from 'react'
import { LoginContext } from './LoginContext'
import './Footer.css'

const Footer = (props) => {
    const {state} = React.useContext(LoginContext)
    return(
        <div className="Footer">
            <p className="FooterLabel">Usuario:</p>
            <p className="FooterUser">{state.user}</p>
        </div>
    )
}

export default Footer